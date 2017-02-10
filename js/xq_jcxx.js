
var exception = getException();    
var enttype = getEntType();
//1200 5200 6200 发起人
var pripid = getPripid();          
var nodenumber = getNodeNumber(); 

var str = enttype.substr(0,2)+'00';
//console.log(str);
if(str == '1200' || str == '5200' || str == '6200') {
	template.config("escape", false);
	$('#changeContent').html('发起人及出资信息');
	$("#changeEntContent").html('发起人及出资信息');
//	$('#changeName').html('发起人名称');
//	$('#changeType').html('发起人类型');
}else{
	template.config("escape", false);
	$('#changeContent').html('股东及出资信息');
	$("#changeEntContent").html('股东及出资信息');
//	$('#changeName').html('股东名称');
//	$('#changeType').html('股东类型');
}

//显示已关注/未关注
loadAttentionLogo(pripid);

//点击详情页某块，展开时调用
function clickLoadData(dom){
	var id = dom.attr("id");
	fn = eval(id);
	fn.call();
	//设置该块已经加载完成标记
	dom.attr("isLoadData","1");
}


var params = {
	"mobileAction": "entDetail",
	"pripid": pripid,
	"nodenum":nodenumber ,
	"enttype": enttype,
	"userID": "id001",
	"userIP": "192.123.123.13"
};
busiLiceFun(params,"CompanyDetails","CompanyDetails_ul","LicenceDetails","LicenceDetails_div",exception);

//查询股东及出资信息
function invBlockFun(){
	var params = {
		"mobileAction": "invInfo",
		"pripid": pripid,
		"nodenum":nodenumber,
		"enttype": enttype,
		"userID": "id001",
		"userIP": "192.123.123.13"
	};
	invFun(params,"xq_jcxx_7","xq_jcxx_7_div");
}

//查询主要人员信息  
function personBlockFun(){
	var params = {                                                       
		"mobileAction":"personInfo",                                     
		"pripid": pripid,                                                
	   	"nodenum":nodenumber,                                            
	    "pageNum":1,                                                     
	    "pageSize":1,                                                    
	    "userID":"id001",                                                
	    "userIP":"192.123.123.13"                                        
	}                                                                    
	personFun(params,"personnelInfo","personnelInfo_div");   
}
  


//查询分支机构信息
function branchBlockFun(){
	var params = {                                           
		"mobileAction":"brchInfo",                         
		"pripid": pripid,                                    
	   	"nodenum":nodenumber,                                                                   
	    "userID":"id001",                                    
	    "userIP":"192.123.123.13"                            
	}  
	branchFun(params,"structureInfo","structureInfo_div");
}
//查询清算信息
function auditBlockFun(){
	var params = {                                          
		"mobileAction":"liqInfo",                          
		"pripid": pripid,                                   
	   	"nodenum":nodenumber,                               
	    "userID":"id001",                                   
	    "userIP":"192.123.123.13"                           
	} 
	auditFun(params,"assount","assount_div");
}
//查询变更信息  
function searchChangeBlockFun(){
	var params = {                 
		"mobileAction":"altInfo", 
		"startTime":"",
		"endTime":"",
		"pripid": pripid,
	   	"nodenum":nodenumber,      
	    "userID":"id001",          
	    "userIP":"192.123.123.13"  
	}     
	searchChangeFun(params,"changeSciptId","changeDivId");
}//查询动产抵押登记信息
function searchMortBlockFun(){
	var params = {                                       
		"mobileAction":"moveInfo",                        	                                 
		"pripid": pripid,                                
	   	"nodenum":nodenumber,                            
	    "userID":"id001",                                
	    "userIP":"192.123.123.13"                        
	}  
	searchMortFun(params, "searchMortSciptId", "searchMortDivId");
}
//抽查检查
function searchCheckBlockFun(){
	var checkParam = {
		"mobileAction":"spotInfo",                        	                                 
		"pripid": pripid,                                
	   	"nodenum":nodenumber,                            
	    "userID":"id001",                                
	    "userIP":"192.123.123.13" 
	}
	searchCheckFun(checkParam,'checkInfoDetail','checkInfo');
}


//查询司法协助信息
function searchJudiBlockFun(){
	var params = {                 
		"mobileAction":"judicialInfo", 
		"pripid": pripid,          
	   	"nodenum":nodenumber,      
	    "userID":"id001",          
	    "userIP":"192.123.123.13"  
	}    
	searchJudiFun(params, "searchJudiSciptId", "searchJudiDivId");
}//查询年报信息
function searchAnnRepoBlockFun(){
	var params = {                     
		"mobileAction":"ancheyearInfo", 
		"pripid": pripid,              
	   	"nodenum":nodenumber,   
	   	"enttype":enttype,
	    "userID":"id001",              
	    "userIP":"192.123.123.13"      
	} 
	searchAnnRepoFun(params, 'searchAnnRepoSciptId', "searchAnnRepoDivId")
}//股权变更
function searchEntStoBlockFun(){
	var changeRightParams = {
		"mobileAction":"changeInfo", 
		"pripid": pripid,              
	   	"nodenum":nodenumber,   
	    "userID":"id001",              
	    "userIP":"192.123.123.13"  
	}
	searchEntStoFun(changeRightParams,'changeRightDetail','changeRight');
}
//企业行政许可
function searchEntPermBlockFun(){
	var permissPArams = {
		"mobileAction":"licenseInfo", 
		"pripid": pripid,              
	   	"nodenum":nodenumber,   
	    "userID":"id001",              
	    "userIP":"192.123.123.13"  
	}
	searchEntPermFun(permissPArams,'adminPermissDetail','adminPermiss');
}
//企业知识产权出质
function searchEntIntePropBlockFun(){
	var knowledgeParams = {
		"mobileAction":"regInfo", 
		"pripid": pripid,              
	   	"nodenum":nodenumber,   
	    "userID":"id001",              
	    "userIP":"192.123.123.13"  
	}
	searchEntIntePropFun(knowledgeParams,'knowledgeDetail','knowledge');
}
//企业行政处罚
function searchEntPuniBlockFun(){
	var penaltyParams = {
		"mobileAction":"adpenaltyInfo", 
		"pripid": pripid,              
	   	"nodenum":nodenumber,   
	    "userID":"id001",              
	    "userIP":"192.123.123.13" 
	}
	searchEntPuniFun(penaltyParams,'adminPenaltyDetail','adminPenalty');
}
//查询企业股东及出资即时信息
function searchEntInvBlockFun(){
	var invParams = {              
		"mobileAction":"instantInfo",
		"pripid": pripid,              
	   	"nodenum":nodenumber, 
	   	"enttype": enttype,
	   	"pageNum":1,  
	    "pageSize":8, 
	    "userID":"id001",         
	    "userIP":"192.123.123.13"   
	}
	searchEntInvFun(invParams, "qygdScriptId", "qygdDivId")
}/**
 * 商标信息
 */
function searchBrandBlockFun(){
	var brandParams = {              
		"mobileAction":"tmInfo",
		"pripid": pripid,              
	   	"nodenum":nodenumber, 
	   	"pageNum":1,  
	    "pageSize":10, 
	    "userID":"id001",         
	    "userIP":"192.123.123.13"   
	}
	searchBrandFun(brandParams, "brandScriptID", "brandDivID")
}
/**
 * 股权出质信息
 */
function searchStoCzBlockFun(){
	var stoCzParams = {              
		"mobileAction":"pledgeInfo",
		"pripid": pripid,              
	   	"nodenum":nodenumber, 
	   	"pageNum":1,  
	    "pageSize":10, 
	    "userID":"id001",         
	    "userIP":"192.123.123.13"   
	}
	searchStoCzFun(stoCzParams, "stoCzSciptId", "stoCzDivId")
}

