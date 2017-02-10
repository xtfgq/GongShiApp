
var exception = getException();    
var enttype = getEntType();
var pripid = getPripid();          
var nodenumber= getNodeNumber(); 

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

//基本信息、经营执照
var basicparams = {
			"mobileAction": "entDetail",
			"pripid": pripid,
			"nodenum":nodenumber ,
			"enttype": enttype,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
busiLiceFun(basicparams,"CompanyDetails","CompanyDetails_ul","LicenceDetails","LicenceDetails_div",exception);

//主要人员
function personBlockFun(){
	var personnelParams={
		"mobileAction":"personInfo",
		"pripid": pripid,         
	   	"nodenum":nodenumber,     
	    "pageNum":1,
	    "pageSize":1,
	    "userID":"id001",        
	    "userIP":"192.123.123.13"	
	};
	personFun(personnelParams,"personnelInfo","personnelInfo_div");
}


//变更信息
function searchChangeBlockFun(){
	var changeParams={
		"mobileAction":"altInfo",                                          
		"pripid": pripid,                                                   
	   	"nodenum":nodenumber, 
	   	"starTime":"", 
	   	"endTime":"",    	
	    "userID":"id001",                                                   
	    "userIP":"192.123.123.13"                                           	
	};
	searchChangeFun(changeParams,"changeList","change");
}


//动产抵押登记信息
function searchMortBlockFun(){
	var moveParams={
		"mobileAction":"moveInfo",                                          
		"pripid": pripid,                                                   
	   	"nodenum":nodenumber,    		
	    "userID":"id001",                                                   
	    "userIP":"192.123.123.13"                                           	
	};
	searchMortFun(moveParams,"moveList","move");
}

//知识产权出质登记信息
function searchEntIntePropBlockFun(){
	var propertyParams={
		"mobileAction":"regInfo",                                          
		"pripid": pripid,                                                   
	   	"nodenum":nodenumber,    		
	    "userID":"id001",                                                   
	    "userIP":"192.123.123.13"                                           		
	};
	searchEntIntePropFun(propertyParams,'propertyList','property');
}


//抽查检查结果信息
function searchCheckBlockFun(){
	var spotParams={
		"mobileAction":"spotInfo",                                          
		"pripid": pripid,                                                   
	   	"nodenum":nodenumber,    		
	    "userID":"id001",                                                   
	    "userIP":"192.123.123.13"                                           	
	};
	searchCheckFun(spotParams,"spotList","spot");
}

//企业年报信息
function searchAnnRepoBlockFun(){
	var ancheyearParams={
		"mobileAction":"ancheyearInfo",                                          
		"pripid": pripid,                                                   
	   	"nodenum":nodenumber, 
	   	"enttype:":enttype,
	    "userID":"id001",                                                   
	    "userIP":"192.123.123.13"                                           	
	};
	searchAnnRepoFun(ancheyearParams,"yearReportList","yearReport");
}


/**
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
	searchBrandFun(brandParams, "brandScriptID", "brandDivID");
}

