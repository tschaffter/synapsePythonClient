import filecmp
import os
import random
import requests
import tempfile
import traceback
from io import open

from unittest import mock

from synapseclient import File
import synapseclient.core.config
import synapseclient.core.utils as utils
from synapseclient.core.upload.multipart_upload import (
    MIN_PART_SIZE,
    multipart_upload_file,
    multipart_upload_string
)


def test_round_trip(syn, project, schedule_for_cleanup):
    fhid = None
    filepath = utils.make_bogus_binary_file(MIN_PART_SIZE + 777771)
    try:
        fhid = multipart_upload_file(syn, filepath)

        # Download the file and compare it with the original
        junk = File(parent=project, dataFileHandleId=fhid)
        junk.properties.update(syn._createEntity(junk.properties))
        (tmp_f, tmp_path) = tempfile.mkstemp()
        schedule_for_cleanup(tmp_path)

        junk['path'] = syn._downloadFileHandle(fhid, junk['id'], 'FileEntity', tmp_path)
        assert filecmp.cmp(filepath, junk.path)

    finally:
        try:
            if 'junk' in locals():
                syn.delete(junk)
        except Exception:
            print(traceback.format_exc())
        try:
            os.remove(filepath)
        except Exception:
            print(traceback.format_exc())


def test_single_thread_upload(syn):
    synapseclient.core.config.single_threaded = True
    try:
        filepath = utils.make_bogus_binary_file(MIN_PART_SIZE * 2 + 1)
        assert multipart_upload_file(syn, filepath) is not None
    finally:
        synapseclient.core.config.single_threaded = False


def test_randomly_failing_parts(syn, project, schedule_for_cleanup):
    """Verify that we can recover gracefully with some randomly inserted errors
    while uploading parts."""

    fail_every = 3  # fail every nth request
    fail_cycle = random.randint(0, fail_every - 1)  # randomly vary which n of the request cycle we fail
    fhid = None

    filepath = utils.make_bogus_binary_file(MIN_PART_SIZE * 2 + (MIN_PART_SIZE / 2))

    put_count = 0
    normal_put = requests.Session.put

    def _put_chunk_or_fail_randomly(self, url, *args, **kwargs):
        # fail every nth put to aws s3
        if 's3.amazonaws.com' not in url:
            return normal_put(self, url, *args, **kwargs)

        nonlocal put_count
        put_count += 1

        if (put_count + fail_cycle) % fail_every == 0:
            raise IOError("Ooops! Artificial upload failure for testing.")

        return normal_put(self, url, *args, **kwargs)

    with mock.patch('requests.Session.put', side_effect=_put_chunk_or_fail_randomly, autospec=True):
        try:
            fhid = multipart_upload_file(syn, filepath, part_size=MIN_PART_SIZE)

            # Download the file and compare it with the original
            junk = File(parent=project, dataFileHandleId=fhid)
            junk.properties.update(syn._createEntity(junk.properties))
            (tmp_f, tmp_path) = tempfile.mkstemp()
            schedule_for_cleanup(tmp_path)

            junk['path'] = syn._downloadFileHandle(fhid, junk['id'], 'FileEntity', tmp_path)
            assert filecmp.cmp(filepath, junk.path)

        finally:
            try:
                if 'junk' in locals():
                    syn.delete(junk)
            except Exception:
                print(traceback.format_exc())
            try:
                os.remove(filepath)
            except Exception:
                print(traceback.format_exc())


def test_multipart_upload_big_string(syn, project, schedule_for_cleanup):
    cities = ["Seattle", "Portland", "Vancouver", "Victoria",
              "San Francisco", "Los Angeles", "New York",
              "Oaxaca", "Cancún", "Curaçao", "जोधपुर",
              "অসম", "ལྷ་ས།", "ཐིམ་ཕུ་", "دبي", "አዲስ አበባ",
              "São Paulo", "Buenos Aires", "Cartagena",
              "Amsterdam", "Venice", "Rome", "Dubrovnik",
              "Sarajevo", "Madrid", "Barcelona", "Paris",
              "Αθήνα", "Ρόδος", "København", "Zürich",
              "金沢市", "서울", "แม่ฮ่องสอน", "Москва"]

    text = "Places I wanna go:\n"
    while len(text.encode('utf-8')) < MIN_PART_SIZE:
        text += ", ".join(random.choice(cities) for i in range(5000)) + "\n"

    fhid = multipart_upload_string(syn, text)

    # Download the file and compare it with the original
    junk = File(parent=project, dataFileHandleId=fhid)
    junk.properties.update(syn._createEntity(junk.properties))
    (tmp_f, tmp_path) = tempfile.mkstemp()
    schedule_for_cleanup(tmp_path)

    junk['path'] = syn._downloadFileHandle(fhid, junk['id'], "FileEntity", tmp_path)

    with open(junk.path, encoding='utf-8') as f:
        retrieved_text = f.read()

    assert retrieved_text == text
