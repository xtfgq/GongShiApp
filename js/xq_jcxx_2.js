
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
busiLiceFun(params,'CompanyDetails','CompanyDetails_ul','LicenceDetails','LicenceDetails_div',exception);

//$.post(purl + searchBusiLiceUrl, params, function(data) {
//	template.config("escape", false);
//	var jsonData = JSON.parse(data);
//	//向结果中写入参数-异常字段
//	jsonData.busexceptcount = exception;
////	console.log(jsonData);
//	var html = template('CompanyDetails', jsonData);
//	$("#CompanyDetails_ul").append(html);
//	
//	var html = template('LicenceDetails', jsonData);
//	$("#LicenceDetails_div").append(html);
//})
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

//$.post(purl + searchChangeUrl, changeParams, function(data) {
//	template.config("escape", false);
//	if(data) {
//		var jsonDataChange = JSON.parse(data);
//		var jsonDateShow= [];
//		//向结果中写入参数-异常字段
//		//console.log(jsonDataChange);
//		//只显示前两条数据
//		for(var i=0;i<jsonDataChange.length;i++) {
//			if(i<2) {
//				jsonDateShow.push(jsonDataChange[i]);
//			}
//		}
//		
//		var changeHtml = template('changeInfoDetail', jsonDateShow);
//		$("#changeInfo").append(changeHtml);
//	}else{
//		console.log('查询变更没有返回数据');
//	}
//})

//公用方法
function publicFun(url,params, sciptId, divId){
	$.post(url, params, function(data) {
		if(data) {
			var jsonData = JSON.parse(data);                
			var html = template(sciptId, jsonData);  
			$("#"+divId).append(html);
		}
		
	})
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
	//publicFun(purl + searchMortUrl,pledgeParams,'pledgeInfoDetail','pledgeInfo');
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
	//publicFun(purl + searchCheckUrl,checkParams,'checkInfoDetail','checkInfo');
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
	//publicFun(purl + searchAnnRepoUrl,reportParams,'reportInfoDetail','reportInfo');
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
	//publicFun(purl + searchEntPermUrl,permissParams,'adminPermissDetail','adminPermiss');
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
	//publicFun(purl + seachEntIntePropUrl,knowledgeParams,'knowledgeDetail','knowledge');
	searchEntIntePropFun(knowledgeParams,'knowledgeDetail','knowledge');
}


//企业行政处罚信息(prepend)
function searchEntPuniBlockFun(){
	var penaltyParams = {
		"mobileAction": "adpenaltyInfo",
		"pripid": pripid,
		"nodenum":nodenumber ,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	//publicFun(purl + searchEntPuniUrl,penaltyParams,'adminPenaltyDetail','adminPenalty');
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



