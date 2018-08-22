Search.setIndex({docnames:["Activity","Annotations","Client","CommandLineClient","Entity","Evaluation","Multipart_upload","Table","Team","Utilities","Versions","Wiki","index","sftp","synapseutils"],envversion:53,filenames:["Activity.rst","Annotations.rst","Client.rst","CommandLineClient.rst","Entity.rst","Evaluation.rst","Multipart_upload.rst","Table.rst","Team.rst","Utilities.rst","Versions.rst","Wiki.rst","index.rst","sftp.rst","synapseutils.rst"],objects:{"":{synapseclient:[12,0,0,"-"],synapseutils:[14,0,0,"-"]},"synapseclient.Synapse":{"delete":[2,2,1,""],chunkedQuery:[2,2,1,""],createColumns:[2,2,1,""],createEntity:[2,2,1,""],createStorageLocationSetting:[2,2,1,""],deleteEntity:[2,2,1,""],deleteProvenance:[2,2,1,""],downloadEntity:[2,2,1,""],downloadTableColumns:[2,2,1,""],downloadTableFile:[2,2,1,""],findEntityId:[2,2,1,""],get:[2,2,1,""],getAnnotations:[2,2,1,""],getChildren:[2,2,1,""],getColumn:[2,2,1,""],getColumns:[2,2,1,""],getConfigFile:[2,2,1,""],getEntity:[2,2,1,""],getEvaluation:[2,2,1,""],getEvaluationByContentSource:[2,2,1,""],getEvaluationByName:[2,2,1,""],getMyStorageLocationSetting:[2,2,1,""],getPermissions:[2,2,1,""],getProjectSetting:[2,2,1,""],getProvenance:[2,2,1,""],getSubmission:[2,2,1,""],getSubmissionBundles:[2,2,1,""],getSubmissionStatus:[2,2,1,""],getSubmissions:[2,2,1,""],getTableColumns:[2,2,1,""],getTeam:[2,2,1,""],getTeamMembers:[2,2,1,""],getUserProfile:[2,2,1,""],getWiki:[2,2,1,""],getWikiAttachments:[2,2,1,""],getWikiHeaders:[2,2,1,""],invalidateAPIKey:[2,2,1,""],loadEntity:[2,2,1,""],login:[2,2,1,""],logout:[2,2,1,""],md5Query:[2,2,1,""],move:[2,2,1,""],onweb:[2,2,1,""],printEntity:[2,2,1,""],query:[2,2,1,""],restDELETE:[2,2,1,""],restGET:[2,2,1,""],restPOST:[2,2,1,""],restPUT:[2,2,1,""],sendMessage:[2,2,1,""],setAnnotations:[2,2,1,""],setEndpoints:[2,2,1,""],setPermissions:[2,2,1,""],setProvenance:[2,2,1,""],setStorageLocation:[2,2,1,""],store:[2,2,1,""],submit:[2,2,1,""],tableQuery:[2,2,1,""],updateActivity:[2,2,1,""],updateEntity:[2,2,1,""],uploadFile:[2,2,1,""],uploadFileHandle:[2,2,1,""],uploadSynapseManagedFileHandle:[2,2,1,""]},"synapseclient.activity":{Activity:[0,1,1,""]},"synapseclient.activity.Activity":{executed:[0,2,1,""],used:[0,2,1,""],usedEntity:[0,2,1,""],usedURL:[0,2,1,""]},"synapseclient.client":{login:[2,2,1,""]},"synapseclient.entity":{DockerRepository:[4,1,1,""],Entity:[4,1,1,""],File:[4,1,1,""],Folder:[4,1,1,""],Link:[4,1,1,""],Project:[4,1,1,""]},"synapseclient.evaluation":{Evaluation:[5,1,1,""],Submission:[5,1,1,""],SubmissionStatus:[5,1,1,""]},"synapseclient.evaluation.Evaluation":{__init__:[5,2,1,""]},"synapseclient.evaluation.Submission":{__init__:[5,2,1,""]},"synapseclient.evaluation.SubmissionStatus":{__init__:[5,2,1,""]},"synapseclient.multipart_upload":{_multipart_upload:[6,3,1,""],_start_multipart_upload:[6,3,1,""],calculate_part_size:[6,3,1,""],count_completed_parts:[6,3,1,""],find_parts_to_upload:[6,3,1,""],get_data_chunk:[6,3,1,""],get_file_chunk:[6,3,1,""],multipart_upload:[6,3,1,""],multipart_upload_string:[6,3,1,""]},"synapseclient.table":{Column:[7,1,1,""],CsvFileTable:[7,1,1,""],EntityViewSchema:[4,1,1,""],Row:[7,1,1,""],RowSet:[7,1,1,""],RowSetTable:[7,1,1,""],Schema:[4,1,1,""],Table:[7,3,1,""],TableAbstractBaseClass:[7,1,1,""],TableQueryResult:[7,1,1,""],as_table_columns:[7,3,1,""],build_table:[7,3,1,""]},"synapseclient.table.Column":{__init__:[7,2,1,""]},"synapseclient.table.CsvFileTable":{asDataFrame:[7,2,1,""],from_table_query:[7,4,1,""],iter_row_metadata:[7,2,1,""],setColumnHeaders:[7,2,1,""]},"synapseclient.table.Row":{__init__:[7,2,1,""]},"synapseclient.table.RowSet":{__init__:[7,2,1,""]},"synapseclient.table.RowSetTable":{iter_row_metadata:[7,2,1,""]},"synapseclient.table.TableAbstractBaseClass":{RowMetadataTuple:[7,1,1,""],iter_row_metadata:[7,2,1,""]},"synapseclient.table.TableAbstractBaseClass.RowMetadataTuple":{row_etag:[7,5,1,""],row_id:[7,5,1,""],row_version:[7,5,1,""]},"synapseclient.table.TableQueryResult":{asDataFrame:[7,2,1,""],iter_row_metadata:[7,2,1,""],next:[7,2,1,""]},"synapseclient.team":{Team:[8,1,1,""],TeamMember:[8,1,1,""],UserGroupHeader:[8,1,1,""],UserProfile:[8,1,1,""]},"synapseclient.utils":{as_url:[9,3,1,""],caller_module_name:[9,3,1,""],download_file:[9,3,1,""],equal_paths:[9,3,1,""],extract_filename:[9,3,1,""],extract_prefix:[9,3,1,""],extract_user_name:[9,3,1,""],file_url_to_path:[9,3,1,""],find_data_file_handle:[9,3,1,""],format_time_interval:[9,3,1,""],from_unix_epoch_time:[9,3,1,""],from_unix_epoch_time_secs:[9,3,1,""],get_properties:[9,3,1,""],guess_file_name:[9,3,1,""],id_of:[9,3,1,""],is_in_path:[9,3,1,""],is_same_base_url:[9,3,1,""],is_synapse_id:[9,3,1,""],is_url:[9,3,1,""],itersubclasses:[9,3,1,""],make_bogus_binary_file:[9,3,1,""],make_bogus_data_file:[9,3,1,""],md5_for_file:[9,3,1,""],normalize_path:[9,3,1,""],normalize_whitespace:[9,3,1,""],printTransferProgress:[9,3,1,""],query_limit_and_offset:[9,3,1,""],threadsafe_generator:[9,3,1,""],threadsafe_iter:[9,1,1,""],to_unix_epoch_time:[9,3,1,""],to_unix_epoch_time_secs:[9,3,1,""],topolgical_sort:[9,3,1,""],touch:[9,3,1,""],unique_filename:[9,3,1,""]},"synapseclient.version_check":{check_for_updates:[10,2,1,""],release_notes:[10,2,1,""]},"synapseclient.wiki":{Wiki:[11,1,1,""]},"synapseclient.wiki.Wiki":{__init__:[11,2,1,""]},"synapseutils.copy":{changeFileMetaData:[14,3,1,""],copy:[14,3,1,""],copyFileHandles:[14,3,1,""],copyWiki:[14,3,1,""]},"synapseutils.monitor":{notifyMe:[14,3,1,""],with_progress_bar:[14,3,1,""]},"synapseutils.sync":{generateManifest:[14,3,1,""],readManifestFile:[14,3,1,""],syncFromSynapse:[14,3,1,""],syncToSynapse:[14,3,1,""]},"synapseutils.walk":{walk:[14,3,1,""]},synapseclient:{Synapse:[2,1,1,""],__main__:[3,0,0,"-"],activity:[0,0,0,"-"],annotations:[1,0,0,"-"],client:[2,0,0,"-"],entity:[4,0,0,"-"],evaluation:[5,0,0,"-"],multipart_upload:[6,0,0,"-"],table:[7,0,0,"-"],team:[8,0,0,"-"],utils:[9,0,0,"-"],version_check:[10,0,0,"-"],wiki:[11,0,0,"-"]},synapseutils:{copy:[14,0,0,"-"],monitor:[14,0,0,"-"],sync:[14,0,0,"-"],walk:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","classmethod","Python class method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:classmethod","5":"py:attribute"},terms:{"101_2":2,"10s":6,"5mb":6,"abstract":7,"boolean":[7,9,14],"break":2,"byte":[6,9,14],"case":[0,2,4,7,9,14],"class":[0,2,4,5,7,8,9],"default":[2,4,7,9,10,12,14],"final":[2,5],"float":[9,12],"function":[2,4,6,7,12,14],"import":[1,2,4,5,7,11,14],"int":9,"long":14,"new":[2,4,7,9,12,14],"public":[2,12],"return":[2,4,5,6,7,9,14],"short":[0,5,8],"switch":2,"throw":9,"true":[0,2,4,6,7,8,9,14],"try":[1,2,4,7,9],"while":2,AWS:2,Adding:[2,7,12],For:[0,1,2,3,4,7,10,11,12,13],Has:14,IDs:[0,2,4,7,11,14],Ids:14,NOT:2,One:[2,4],That:2,The:[0,2,3,4,5,7,8,9,12,13,14],There:12,These:[4,7,12,14],Use:2,Used:14,Uses:2,Using:[0,2,12],With:7,__dict__:4,__init__:[5,7,11],__name__:9,_dev_version_url:10,_getrawannot:2,_multipart_upload:6,_seen:9,_start_multipart_upload:6,_version_url:10,abl:[4,12,13],about:[2,3,7,8,12],abov:[11,14],absolut:9,accept:[0,2,5,14],access:[1,2,4,5,9],accesstyp:2,account:[2,12],accur:[5,7,11],acl:[2,5],across:[2,4,7],act:0,activ:[2,12,14],activest:9,activitydescript:[0,2,14],activitynam:[0,2,14],actual:[4,7],acycl:9,adapt:9,add:[0,2,3,4,7,13,14],add_scop:7,addannotationcolumn:[4,7],addcolumn:7,adddefaultviewcolumn:[4,7],added:[4,7,14],adding:[2,7,12],addit:[0,4,12,14],address:[2,8],administr:8,affili:8,after:[2,4,7,9,13,14],again:7,aka:2,album:7,algorithm:[0,14],alia:7,align:[7,11],all:[2,4,7,9,14],allfil:14,allow:[2,5,7,11],along:[2,3],alreadi:[4,6,9,14],also:[0,1,2,4,7,11,12,14],altern:[0,7,10],alwai:[2,4],amazon:2,amazonaw:2,ambigu:4,analysi:[2,12],anandolog:9,ani:[0,2,4,5,6,7,14],annot1:14,annot2:14,annot:[2,3,7,14],anoth:[1,7,13],answer:2,api:[2,7],apikei:2,appear:9,append:[7,9,12],appli:0,applic:4,appropri:[2,7],approv:[2,8],apt:[2,13],arbitrari:[1,2,9,12],aren:6,arg:7,argument:[2,6,7],around:[2,9],arrai:[2,7],articl:4,artist:7,as_table_column:7,as_url:9,asc:2,ascii:2,asdatafram:7,asrowset:7,assist:14,associ:[2,3,4,5,7,8,14],associateobjectid:14,associateobjecttyp:14,atom:[4,7],attach:[1,2,11,12,14],attempt:[2,14],authendpoint:2,authent:[2,12],automat:[2,4,7],avail:[12,13],avoid:4,awesom:0,back:[2,5,7,9],backslash:2,bah:7,bang:9,banner:2,bar:[2,4,9,14],base64:2,base:[2,4,6,7,9,14],basenam:[4,14],bash:2,bat:9,batch:[2,14],baz:14,bday_column2:7,bday_column:7,becaus:2,becom:14,been:[2,14],befor:[2,7,9,13,14],began:9,behavior:14,behind:11,being:[2,4,14],belong:[2,4,7,9,11],below:14,benefactor:2,best:1,better:11,between:[2,4,14],binari:[9,12,13],bionetwork:[0,12],birthdai:7,birthday2:7,bit:7,block_siz:9,blog:9,blp:7,blue:[2,7],bnk:7,board:2,bodi:2,bogu:9,bool:9,both:[0,1,2,4,10,12,14],branch:12,breast:12,browsabl:12,browser:[2,12],bucket:2,buffer:6,build:[0,2,5,7,12,13],build_tabl:7,built:[12,13],bulk:2,bundl:[2,9],burrel:7,burrellwarholbn1543:7,bypass:2,cach:[2,3,4,12,14],calcul:[2,9],calculate_part_s:6,call:[0,4,6,7,8,9,12,14],caller:[2,9],caller_module_nam:9,calling_modul:9,can:[0,1,2,3,4,5,7,8,11,12,14],cancer:12,cannot:11,canpublicjoin:8,care:12,cat:3,catalog:7,challeng:[2,5,12],chang:[2,5,8,14],change_permiss:2,changefilemetadata:[4,14],changeset:7,charact:[2,7,9],charset:4,check:[2,5,10,12],check_for_upd:[10,12],checkout:12,checksum:2,children:2,chmod:2,choic:[4,7,11],choos:[2,14],chosen:8,chromosom:7,chunk:6,chunkedqueri:[2,12],chunksiz:6,classmethod:7,clean:9,clear:2,client:[1,4,6,8,9,10],clone:12,close:[2,5],cloud:12,cls:9,cluster:0,clustered_sampl:0,code:[0,2,4,9,12,14],code_repo:0,codeent:0,col:[4,7],collabor:12,collaps:2,collect:[1,5,7],collection_d:1,collid:4,collis:[2,4,14],colon:14,coltran:7,coltranebluetrain:7,column:[2,4,12,14],columntyp:[4,7],com:[0,2,9,12],combin:[0,2,7],come:[2,7],comma:[2,9],command:[2,12,14],common:[0,9,14],commun:[2,12,13],compani:8,companion:12,compar:9,competit:5,compil:[2,12,13],complet:[1,2,4,5,6,9,14],compon:12,compos:12,concurr:[7,8],config:2,configpars:2,configpath:2,configur:2,conflict:[0,2,4,7],conform:7,confus:4,conjunct:2,connect:[2,3],consid:2,consist:7,consol:12,constrain:7,construct:[2,12],constructor:[1,4,8,14],contact:2,contain:[0,2,4,6,7,8,9,11,12,14],content:[2,3,4,5,7,9,11,12,14],content_disposition_head:9,contentsourc:5,contenttyp:[2,4,6,14],context:5,continu:7,contribut:2,control:[2,4,5,8],conveni:2,convert:[7,9,14],convert_to_datetim:7,copi:[3,4,12],copyfilehandl:14,copywiki:14,correspond:[2,7],could:5,count:6,count_completed_part:6,cover:[4,7],cover_art:2,cover_fil:7,covers_dir:7,crawl:14,creat:[2,3,4,5,7,9,12,14],createcolumn:2,created_on:2,createdbyprincipalid:12,createdon:[4,7],createent:2,createorupd:2,createstoragelocationset:2,creation:2,creator:4,credenti:[2,3],credit:2,cryptic:9,csv:[2,7],csvfilet:7,ctrl:9,current:[2,7,8,9,10,12],current_fram:9,currentfram:9,custom:[2,7],daemon:2,data:[2,3,4,5,6,9,11],data_fold:12,data_r_u:2,datafilehandleid:[4,9],datafram:[7,14],dataset:3,date:[4,7,8,9],datetim:[1,7,9],dbu:2,debian:13,debug:2,decor:[9,11,14],def:14,default_filenam:9,defaultvalu:7,defin:[1,2,4,7,8,9,11,12,14],delet:[2,3,11],deleteent:2,deleteproven:2,delimit:[9,12,14],deliv:2,demo:12,depend:[4,7,12],deprec:[0,2,4],depth:9,deriv:[2,9,12],desc:2,describ:[2,7,8,12,14],descript:[0,2,4,5,7,8,11,12,14],desir:4,destin:[2,6,14],destinationid:14,destinationsubpageid:14,destruct:2,detail:[2,5,7,9,12,14],detect:8,determin:[2,9,14],dev:[2,13],develop:[0,10,12,13],dict:[2,7,9],dictionari:[0,1,2,4,9],differ:[2,4,6,7],direct:[2,9],directli:[0,6,8],directori:[2,12,14],dirnam:14,dirpath:14,disciplin:8,discov:[4,7],displai:[2,3,4,5,7],display:9,disposit:9,distinct:4,distribut:13,divis:4,doc:[2,4,10,12],docker:4,dockerhub:4,dockerrepo:2,doctest:9,document:[1,2,7],doe:[2,7],doing:2,doing_someth:14,don:[2,4],done:[4,7,12,14],dot:[4,9],doubl:[2,4,7],down:6,download:[0,2,3,4,7,9,12,14],download_fil:9,downloada:14,downloadent:2,downloadfil:2,downloadloc:2,downloadtablecolumn:[2,7],downloadtablefil:2,dryrun:14,dtype:7,dure:0,each:[0,2,7,14],easili:12,ecdsa:13,echo:2,edit:14,either:[0,2,4,7,9,12,13],element:7,ellipsi:9,email:[2,8,14],emphas:11,emploi:8,empti:[2,14],enabl:[7,12],encapsul:2,encod:2,encrypt:2,end:[4,6,7,9],endpoint:[2,12],endpointurl:2,enforc:4,ensure_ascii:2,entail:4,entir:[2,4,14],entiti:[1,2,3,5,7,8,9,11,14],entity_parent_id:2,entityid:[2,5,7],entitymap:14,entitysubpageid:14,entitytyp:2,entityview:[2,4,7],entityviewschema:[2,4,7],entri:5,enumer:7,enumvalu:7,environ:12,equal:[2,9],equal_path:9,error:[0,4,7,14],escap:2,escapecharact:[2,7],etag:[7,8],etc:[4,7,9,12,14],evalu:[2,3],evaluation_in_progress:2,evaluationid:5,even:[2,4],eventu:2,everi:[2,8],everyth:14,exampl:[0,2,4,7,9,11,12,13,14],example_fil:14,excel:0,excellent_data:0,except:[2,7,9,14],exclud:9,excludetyp:14,exectu:14,execut:[0,2,5,14],exist:[2,4,7,9,10,12,14],exit:3,extern:[2,4],external_sync:2,externalfilehandl:2,externalobjectstorag:2,externals3storag:2,externals3storageloc:2,externalstorag:2,extra:[12,13,14],extract:9,extract_filenam:9,extract_prefix:9,extract_user_nam:9,failur:14,failurecod:14,fairli:7,fals:[0,2,6,7,8,9,14],famili:8,fanci:[2,12],fantast:11,faster:7,favorit:7,featur:12,fetch:2,few:[1,3,7,13],field:[0,2,5,7,8,9,14],figur:[9,11],file1:14,file2:14,file:[1,2,6,8,9,11,12,14],file_and_t:[4,7],file_handl:7,file_handle_id:2,file_map:2,file_path:2,file_s:2,file_typ:2,file_url_to_path:9,fileanam:14,fileent:14,filehandl:[2,7,9,11,14],filehandleendpoint:2,filehandleid:[2,7,8],filenam:[2,4,6,9,11,14],filenameoverrid:4,filepath:[6,7,9,14],files:6,filetyp:14,filter:2,find:[2,12],find_data_file_handl:9,find_parts_to_upload:6,findentityid:2,fine:12,finish:9,first:[2,4,7,8,9],firstnam:8,fix:4,flag:2,flavor:7,folder:[2,7,12,14],follow:[2,4,7,12],followlink:[2,4,14],foo:[2,4,5,7,9,14],foobarbat:4,foord:13,forc:2,forcerestart:6,forcevers:[2,14],foreign:8,forenam:8,forgetm:2,form:[6,7,9],format:[2,4,5,7,9,14],format_time_interv:9,forward:[9,13],found:[2,4,14],fredcommo:2,freds_profil:2,free:13,frequent:2,from:[0,1,2,3,4,5,6,7,9,11,12,13,14],from_table_queri:7,from_unix_epoch_tim:9,from_unix_epoch_time_sec:9,ftp:2,func:14,futur:[2,4],gene:7,gener:[0,2,7,9,14],generatemanifest:14,genome_assembl:12,get:[2,3,4,5,7,9,11,13,14],get_chunk_funct:6,get_data_chunk:6,get_file_chunk:6,get_properti:9,getannot:[1,2],getchildren:2,getcolumn:[2,7,12],getconfigfil:2,getent:2,getevalu:[2,5,12],getevaluationbycontentsourc:[2,5],getevaluationbynam:[2,5],getmystoragelocationset:2,getpermiss:[2,5,12],getprojectset:2,getproven:2,getsubmiss:[2,5,12],getsubmissionbundl:2,getsubmissionstatu:[2,5,12],gettablecolumn:[2,7,12],getteam:2,getteammemb:2,getuserprofil:[2,12],getwiki:[2,11,12],getwikiattach:2,getwikihead:[2,11],git:12,github:[0,12,14],githubusercont:0,give:[2,7],given:[1,2,4,6,7,8,9,14],glib:2,gnarli:0,gnome:2,goal:7,good:[0,5,12],goog:0,googl:[0,12],gotcha:1,grain:12,grant:2,graph:[9,12],graphic:[11,12],group:[2,8,12],guarante:2,guess_file_nam:9,guid:12,hack:0,had:7,halflif:[4,7],handl:[2,6,7,8,9,11,14],hard_limit:9,has:[0,2,4,5,7,9,14],hash:2,have:[0,1,2,4,7,12,14],head:12,header:[2,4,7,9,12,13],headless:2,held:4,help:[5,7,10,11],here:[0,2,7,11],hex:6,hexadecim:2,hg19:12,hierarch:12,hierarchi:14,higher:[12,14],hold:[2,4,7,12],home:2,host:[4,12],how:[2,7,9,14],html:[2,4,14],http:[0,2,4,9,12,14],icon:8,id_of:9,idea:[0,5],identifi:[2,7,8,12],ids:[2,4,7,14],ifcollis:[2,14],ignor:[2,4,9],ignoredannotationcolumnnam:[4,7],ile:7,imag:[4,8],immedi:7,immut:[2,7],implement:[6,9],inaccess:2,includ:[4,11,12,14],includerowidandrowvers:[2,7],includetyp:2,increment:2,incrementvers:2,index:[2,7],index_col:7,indic:[2,5,6,9,14],industri:8,inform:[3,8,11],ing:4,inherit:2,initi:[5,7,11],inner:7,input:9,insid:0,inspect:9,instal:[2,7,10],instead:2,instruct:4,integ:[4,7],integr:12,intens:12,interact:[12,14],interchang:4,interest:2,interfac:12,intern:[4,7,14],interpret:14,interv:[9,14],invalid:[2,5,7],invalidateapikei:2,invit:8,invok:9,involv:[2,7],is_in_path:9,is_same_base_url:9,is_synapse_id:9,is_url:9,isadmin:8,isbyt:[9,14],isconsist:[2,7],ish:12,isindividu:8,isotop:[4,7],isrestrict:2,issu:7,item:[2,4,9,14],iter:[2,7,9],iter_row_metadata:7,itersubclass:9,its:[0,2,4,5,7,9,14],itself:4,jan:9,java:12,jazz:7,joe_hack:0,john:7,join:[7,8],jpg:7,json:[2,4],jupo:9,just:[11,12],keep:[2,11,14],kei:[1,2,4,7,8,9,12],kenni:7,keyerror:4,keyr:2,keyword:[2,6],kimyentruong:2,know:[2,7],known:2,kwallet:2,kwarg:[2,4,5,6,7,8,11,14],label:2,languag:[2,7,12],larg:[2,6],largetext:7,last:[8,14],lastnam:8,lat_long:1,later:[2,7,9],latest:[2,10,12],lead:2,leaderboard:2,least:6,length:14,let:[7,11,12],level:[12,14],libdbu:2,librari:[7,12,13],lightweight:4,like:[1,2,3,4,5,7,12],limit:[2,7,9],limitsearch:2,line:[12,14],lineend:[2,7],linesep:2,linestoskip:7,link:[2,5,7,8,12,14],linux:2,list:[0,2,4,7,8,9,11,14],load:[2,7,12],loadent:2,local:[2,4,9,12,14],local_st:[4,7],localfilepath:9,locat:[1,2,4,8,14],log:[2,14],login:[3,7,12,14],logo:11,logout:[2,12],long_runtime_func:14,look:[4,12],lookup:2,loss:2,lot:7,luck:7,mac:2,machin:[2,4],mai:[2,5,7,9,13],make:[0,7,9,12],make_bogus_binary_fil:9,make_bogus_data_fil:9,manag:[2,4],mani:9,manifest:14,manifestfil:14,manipul:4,manual:4,map:[2,4,7,14],markdown:[11,12],markdownfil:11,mass:[4,7],master:12,match:9,matrix:12,max:2,max_part:6,maximum:[2,7],maximums:7,mayb:14,md5:[2,6,9],md5_for_fil:9,md5queri:2,mean:[5,6,10,14],measur:0,member:[2,4,8],membership:8,memo:9,mention:4,messag:[2,3,5,8,14],messageattach:14,messagebodi:2,messagesubject:[2,14],met:13,metadata:[1,2,4,8,12,14],method:[0,2,5,9,12],michael:13,microsoft:13,midnight:9,might:[0,2,7],millisecond:9,mime:2,mimetyp:2,min_part_s:6,mingw:13,minim:7,minimum:[6,14],minut:[2,9],mission:2,mmse:5,model:[2,7,8,12],modifi:[2,3,4,7,9],modifiedbi:[4,7],modify_benefactor:2,modul:[9,12],more:[1,3,8,11],more_gen:7,most:[2,4,6,7,9],mostli:[2,7],move:[2,3],much:9,multipart_upload:6,multipart_upload_str:6,multipartuploadstatu:6,multipl:[0,2,11],must:[2,4,6,7,12,14],my_annot:1,my_fil:[4,14],my_funct:14,my_newname_fil:[4,14],my_profil:2,my_project:1,my_queri:14,mydomain:0,myown:2,mytabl:[4,7],name:[0,2,5,7,8,9,12,14],namedtupl:7,namespac:4,nativ:[2,12],necessari:2,need:[2,4,6,7,12,13,14],neutral:9,never:4,new_par:2,new_row:7,newer:[10,14],newk:7,newsynid:14,next:[7,9,12],nice:7,nicknam:2,non:[2,9],none:[0,2,4,6,7,9,10,11,14],normal:[1,4,14],normalize_path:9,normalize_whitespac:9,not_found:14,notat:4,note:[2,4,7,10,11],noth:2,notif:8,notifi:14,notificationset:8,notify_decor:14,notifym:14,now:[0,1,7,11],nowher:12,nth:6,number:[2,3,5,6,7,9,14],obj:[2,9],object:[1,2,4,5,6,7,8,9,11,12,14],objectid:14,obtain:14,occ:8,odd:9,offici:4,offset:[2,7,9],old:14,oldsynid:14,omit:2,onc:[7,9,12,13],one:[1,2,4,5,12,14],ones:[2,7],onli:[2,4,7,9],onlin:12,ontolog:0,onweb:[2,3,12],open:[2,3,5,12],openstack:2,oper:2,optimist:[7,8],option:[0,2,4,7,11,12,13,14],order:[2,9],ordinari:1,org:[2,4,7,8,9,12,14],origin:14,other:[2,4,9,12,14],other_annot:1,otherwis:[2,7,9],our:[0,2,7],out:[8,9,12,14],output:[0,2],outsid:14,over:[2,7,9,14],overload:14,overwrit:[2,14],own:[2,4,7,12,13],owner:[2,4,11],ownerid:[2,8,12],packag:[9,12,14],page:[2,11,12,14],pagin:2,pan:12,panda:[12,14],param:[2,7],paramet:[0,2,4,5,6,7,8,9,10,11,14],paramiko:13,parent:[1,2,4,7,11,12,14],parentid:[2,12,14],parentwikiid:11,part:6,part_statu:6,particular:[2,5],partsiz:6,pass:[0,2,6,9],password:[2,3,12],path1:9,path2:9,path:[2,4,7,9,11,12,14],payload:2,pend:2,per:[6,14],perform:[2,3,12,14],period:2,permiss:[0,2,4],persist:4,person:8,pictur:8,piec:2,piecem:0,pip:[2,12,13],pipelin:[5,12],place:[2,14],plai:7,plain:2,platform:[7,9],pleas:[2,4],plu:7,png:[4,11],point:9,popul:[2,7,9],popular:7,port:4,portalendpoint:2,posit:8,possibl:[0,2,4],post:[2,7],postfix:[9,14],potenti:4,practic:8,pre:2,prebuilt:12,preced:4,predict:[5,12],prefer:[2,8],prefix:[2,9,14],preliminari:7,present:[1,4,12],pretti:2,prevent:7,preview:6,previou:[2,7],previous:4,previouslytransf:9,princip:8,principalid:2,print:[2,4,7,9,10,12,14],printabl:9,printent:2,printprogress:9,printtransferprogress:9,privat:12,process:[0,2,5,7,12,13],produc:0,product:2,production_endpoint:2,profil:[2,8,9,12],profilepicurefilehandleid:8,prognost:12,program:3,programmat:12,progress:[5,9,14],project:[2,5,7,11,14],project_or_fold:[4,7],project_or_folder_id:[4,7],projectset:2,propag:7,proper:9,properti:[1,2,7,9],proven:[1,2,3,11,14],provid:[2,4,6,7,12,14],proxi:2,proxystorag:2,proxyurl:2,pseudonym:5,push:14,put:2,pycrypto:13,pypi:12,pysftp:[12,13],python3:2,python:[1,2,3,4,7],queri:[2,3,9,14],query_limit_and_offset:9,querystr:2,question:5,queue:[2,5],quickli:7,quit:7,quot:2,quotecharact:[2,7],qux1:7,qux2:7,rais:2,ran:14,random:9,rate:[1,9],rather:2,raw:[0,12],rdata:0,read:[2,4,6,7,9,12],read_csv:7,readabl:[4,7,9],readi:14,readlin:12,readm:[10,14],readmanifestfil:14,realli:[2,5],receiv:2,recent:[2,7],recip:9,recommend:[2,4,10],record:[1,2,3,11,12],recurs:[12,14],refer:[0,2,4,12],referenc:[9,14],refresh:2,regard:[2,8],regist:[2,8,12],reinstal:12,reject:[2,7],relat:2,releas:[10,12],release_not:[10,12],rememberm:2,remot:9,remov:[2,3,4,7,9],removecolumn:7,renam:[4,7],render:12,reorder:14,repeatedli:2,replac:[2,9,14],replace_with_your_keyring_password:2,repo:[2,7,8],repoendpoint:2,report:10,repositori:[2,4],repositorynam:4,repres:[0,2,4,5,7,8,11,12],represent:[0,8],reproduc:[12,14],request:2,requester_pai:2,requir:[2,4,7,11,12,13,14],res:2,research:12,reserv:14,resourc:[0,2,8],respons:[2,9],rest:[2,12],restart:9,restdelet:[2,12],restget:[2,12],restpost:[2,12],restput:[2,12],restrict:2,result:[0,2,4,7,9,12,14],resultsa:2,retri:14,retriev:[2,5,6,12],retrypolici:2,review:2,revis:12,robust:6,rollin:7,rollinsbn1558:7,rollinsbn4001:7,root:2,row:[2,12,14],row_etag:7,row_id:7,row_reference_set:7,row_vers:7,rowid:[2,7],rowidandvers:2,rowidandversioninindex:7,rowmetadatatupl:7,rowset:2,rowsett:7,rule:4,run:[2,13,14],rzing:7,safe:9,sage:[0,12],sagebionetwork:[2,7,8],sai:[4,7],same:[0,9,14],sampl:0,scale:11,schema:[2,12],scheme:8,scope:[4,7],score:[2,5,12],script:12,search:2,sec:9,second:[2,9],secret:[2,12],secretkei:2,see:[0,1,2,4,5,7,9,10,11,12,14],seed:9,select:[2,7,8,12,14],selectcolumn:7,self:[2,5,7,11],semi:14,send:2,sendmessag:[2,14],sent:[2,8,14],separ:[0,2,4,7,9,12,14],sequenc:9,seri:7,serial:9,serious:2,serv:2,server:[2,7,13],servic:[2,12],servicetimeoutsecond:2,session:2,sessiontoken:2,set:[0,1,2,3,4,7,8,12,14],setannot:[1,2],setcolumnhead:7,setendpoint:2,setpermiss:[2,5,12],setproven:[2,14],setstorageloc:2,setting_typ:2,settl:7,setup:[2,12],sever:[2,12],sftp:[2,12],share:12,shortcut:0,should:[2,4,6,7,8,13],show:[2,3,4],shown:2,side:6,sign:2,signatur:[5,7,11],silent:2,similar:7,simpl:12,simple_t:7,sinc:[2,8,9,14],singl:[2,9],site:12,situat:[1,4],size:[2,6,7],skip:[2,14],skip_check:2,skipcopyannot:14,skipcopywikipag:14,slash:9,small:12,smallish:2,some:[0,2,4,7,9],someon:9,someth:7,sonni:7,sort:[2,9],sortbi:2,sortdirect:2,sourc:[2,4,5,9,12,14],space:9,special:7,specif:[2,3,4,12,14],specifi:[0,2,4,11,14],split:12,sql:[2,3,7,12],ssh:2,stabl:12,stage:2,staging_endpoint:2,stai:12,start:[2,7,9,12],state:2,statement:7,statu:[2,6],step:[0,7,12,13],stick:5,stop:2,storag:[2,7,12,14],storage_location_id:2,storage_typ:2,storageloc:2,storagelocationid:[2,6],storagelocationset:2,store:[2,4,5,6,7,11,12,14],straight:13,straightforward:7,strand:7,string:[0,2,4,6,7,9,14],stringio:7,strip:9,structur:12,studi:4,stuff:11,style:9,sub:[2,11],subclass:[4,7,9],subfold:[2,14],subject:[2,14],submiss:[2,12],submissionattach:14,submissioninstructionsmessag:5,submissionreceiptmessag:5,submissionstatu:[2,5,12],submit:[2,3,5,12],submitt:2,submitteralia:[2,5],subpag:[2,14],subpageid:[2,14],subwiki:14,sudo:[2,12,13],suitabl:7,summari:[4,8],suppli:10,support:[2,7,12],supportssubfold:2,suppress:2,sure:9,surnam:8,surviv:12,syn000000:7,syn100009:0,syn1223:14,syn12312:2,syn123450:14,syn123456:[0,11],syn12345:[0,2,5,14],syn12346:0,syn1234:[0,7,14],syn1235:[0,14],syn123:[2,4,7,14],syn12433:14,syn1243:14,syn124:14,syn1721874:12,syn1824434:11,syn1899339:12,syn1899495:12,syn1899498:12,syn1906479:2,syn1906480:2,syn1917825:2,syn2290704:5,syn23456:0,syn2345:14,syn300013:12,syn33455:14,syn3345:14,syn345678:14,syn449742:2,syn45678:14,syn4567:0,syn456:2,syn:[0,2,4,5,6,7,11,12,14],synanps:2,synap:2,synaps:[0,1,4,5,7,8,9,11,14],synapse_id:5,synapse_metadata_manifest:14,synapsecach:14,synapsecli:[0,1,2,4,5,6,7,8,9,10,11,12,13,14],synapseconfig:2,synapseid:11,synapsepassword:3,synapsepythoncli:[0,12],synapsestor:[2,4,14],synapseus:3,synapseutil:[2,4,12,14],sync:12,syncfromsynaps:14,synchron:14,synctosynaps:14,synid:[4,14],synonym:2,syntax:[2,12],system:[1,2,4,9],tab:[12,14],tabl:[2,14],table_query_timeout:2,tableabstractbaseclass:7,tableent:[7,14],tableid:7,tablequeri:[2,7,14],tablequeryresult:7,tabular:7,tag:[8,12],take:[2,4,6,7,9,12],taken:[2,4],target:[0,2,4,14],targetid:[0,4],targetvers:[0,4],targetversionnumb:0,tcga:12,team:[2,5],teamattach:14,teamid:8,teammemb:[2,8],teamnam:2,techniqu:7,temporari:9,term:[0,2],test:[0,2,9],test_ent:[2,12],text:[0,2,6,12,14],than:[2,11],thei:[1,4,7,9,12],them:[7,8,11],themselv:4,thi:[0,1,2,3,4,5,7,8,9,11,12,13,14],thing:4,those:[2,7],though:4,thought:2,thread:9,threadsafe_gener:9,threadsafe_it:9,three:[2,4,14],through:14,thu:4,time:[2,4,7,8,9],timeout:2,timestamp:7,titl:[2,8,11,14],to_loc:14,to_unix_epoch_tim:9,to_unix_epoch_time_sec:9,tobetransf:9,togeth:12,token:2,tool:[1,12,13],top:12,topolgical_sort:9,topolog:9,total:[2,6,9,14],totalcal:14,touch:9,traceback:14,track:[11,12],train:7,transcriptionfactor:7,transfer:9,transform:[9,12],travers:14,treat:4,tree:12,tri:[0,9],tripl:9,tsv:14,tupl:[2,7,9],two:[0,2,4,7,9],txt:[2,4,14],type:[0,2,3,4,5,7,8,9,11,14],typic:[2,4],ubuntu:[2,13],unambigu:4,unauthor:14,unavail:2,under:[2,4,14],unfortun:4,uniform:8,uniqu:[2,4,8,9,12,14],unique_filenam:9,unit:0,unit_test_cli:0,unix:[7,9],unless:[2,14],unlock:2,unus:2,updat:[2,3,5,7,8,9,14],updateact:2,updateent:2,updateexist:14,updatelink:14,updatesynid:14,upgrad:[10,12],upload:[2,4,7,9,12,14],uploaddestin:6,uploadfil:2,uploadfilehandl:2,uploadsynapsemanagedfilehandl:[2,7],upon:5,uri:[2,8],url1:9,url2:9,url:[0,2,4,8,9,14],usag:2,use:[2,4,7,9,12],used:[0,1,2,3,4,5,7,8,9,12,14],usedent:0,usedurl:0,useful:[2,9,12],user:[1,2,4,5,6,7,8,9,12,14],user_id:5,usergrouphead:8,userid:[2,7],usernam:[2,3,8],userprofil:8,userprofileattach:14,uses:[7,13],using:[1,2,4,5,6,7,9,12],usual:[4,5,7],utc:7,utf:4,util:14,valid:[2,7,9,14],valu:[2,4,7,9,12,14],variabl:[2,4,7],verifi:14,verificationsubmiss:14,verify_exist:9,version:[2,3,4,5,7,11,12,14],version_check:10,version_url:10,versionlabel:2,versionnumb:[2,5,7],via:[2,3,5,14],view:[7,12],view_typ:[4,7],virtual:4,vitualenv:2,voidspac:13,vol:7,w3c:0,wai:[1,4,5,9,12],wait:2,walk:2,walkedpath:14,want:[7,14],warn:2,warn_if_inherit:2,wasexecut:0,weather:14,web:[11,12],websit:[2,3,12],welcom:2,well:[2,4,14],were:9,what:[2,7,14],when:[0,1,2,4,7,8,9,14],whenev:14,where:[2,4,6,7,12,14],wherea:[1,4],whether:[2,4,8,9,14],which:[0,2,4,5,6,7,8,9,11,12,14],whitespac:9,whizzi:0,whose:[2,4,9,14],wiki2:2,wiki:[2,14],wikiattach:14,win:0,window:[2,9],wish:2,with_progress_bar:14,within:[2,4,7,12],without:[2,7,8,12,14],work:[2,5,7,13],workspac:12,wrap:[7,14],wrapper:2,write:[2,9],written:[9,14],wrong:5,www:14,xyx:14,xyz:[0,1,2,4,7,12],year:7,you:[0,2,4,7,12,13,14],your:[2,4,7,12,13],zap:7,zing1:7,zing2:7,zing3:7},titles:["Provenance","Annotations","Synapse Client","Synapse command line client","Entity","Evaluations","Synapse Multipart Upload","Tables","Teams","Utility Functions","Version Functions","Wiki","Synapse Python Client documentation","Using the Synapse Python Client with SFTP data storage","Overview"],titleterms:{"class":11,"function":[9,10],"import":[0,12],Using:13,access:12,activ:0,annot:[1,4,12],api:12,argument:3,attach:7,chang:[4,7],client:[2,3,12,13],column:7,command:3,connect:12,control:12,copi:14,creat:[0,11],data:[0,1,7,12,13],delet:7,detail:[1,4],directli:12,dockerrepositori:4,document:12,embed:11,entiti:[0,4,12],evalu:[5,12],file:[4,7],folder:4,get:12,help:3,imag:11,implement:[1,4],inform:[2,12],instal:[3,12,13],level:7,line:3,link:4,login:2,method:[7,11],modul:7,monitor:14,more:[2,12],multipart:6,name:4,object:0,option:3,organ:12,overview:[12,14],panda:7,project:[4,12],properti:4,proven:[0,12],python:[12,13],queri:[7,12],record:0,row:7,rowset:7,schema:[4,7],sftp:13,sourc:[0,1],statu:5,storag:13,store:0,structur:7,submiss:5,synaps:[2,3,6,12,13],sync:14,tabl:[4,7,12],team:8,unix:13,updat:[11,12],upload:6,util:[9,12],variant:13,version:10,view:4,walk:14,whole:7,wiki:[11,12],window:13}})