
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

//营业执照信息
var params = {
	"mobileAction": "entDetail",
	"pripid": pripid,
	"nodenum":nodenumber ,
	"enttype": enttype,
	"userID": "id001",
	"userIP": "192.123.123.13"
};
busiLiceFun(params,'CompanyDetails','CompanyDetails_ul','LicenceDetails','Licence',exception);

//股东及出资信息
function invBlockFun(){
	var holderParam = {
		"mobileAction": "invInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	invFun(holderParam,'holderInfoDetail','holderInfo');
}


//请求变更信息
function searchChangeBlockFun(){
	var changeParams = {
		"mobileAction": "altInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13",
		"startTime":" ",
		"endTime":" "	
	};
	searchChangeFun(changeParams,'changeInfoDetail','changeInfo');
}


//动产抵押登记信息
function searchMortBlockFun(){
	var pledgeParams = {
		"mobileAction": "moveInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchMortFun(pledgeParams,'pledgeInfoDetail','pledgeInfo');
}


//抽查检查结果信息
function searchCheckBlockFun(){
	var checkParams = {
		"mobileAction": "spotInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchCheckFun(checkParams,'checkInfoDetail','checkInfo');
}


//企业年报信息
function searchAnnRepoBlockFun(){
	var reportParams = {
		"mobileAction": "ancheyearInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"enttype": enttype,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchAnnRepoFun(reportParams,'reportInfoDetail','reportInfo');
}


//企业行政许可信息
function searchEntPermBlockFun(){
	var permissParams = {
		"mobileAction": "licenseInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	//(permissParams,'adminPermissDetail','adminPermiss');
	searchEntPermFun(permissParams,'adminPermissDetail','adminPermiss');
}


//知识产权出质登记信息
function searchEntIntePropBlockFun(){
	var knowledgeParams = {
		"mobileAction": "regInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	//(knowledgeParams,'knowledgeDetail','knowledge');
	searchEntIntePropFun(knowledgeParams,'knowledgeDetail','knowledge');
}


//企业行政处罚信息(prepend),无备注信息
function searchEntPuniBlockFun(){
	var penaltyParams = {
		"mobileAction": "adpenaltyInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	//(searchPuniFun,'adminPermissDetail','adminPermiss');
	searchEntPuniFun(penaltyParams,'adminPenaltyDetail','adminPenalty');
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
