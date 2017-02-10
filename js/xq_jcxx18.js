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

/**
 * 营业执照
 */
var busiParams = {
	"mobileAction": "entDetail",
	"pripid": pripid,
	"nodenum": nodenumber,
	"enttype": enttype,
	"userID": "id001",
	"userIP": "192.123.123.13"
};
busiLiceFun(busiParams, "companyDetail_s", "companyDetail", "BusinessLicense_s", "BusinessLicense",exception);

/**
 * 股东及出资信息
 */
function invBlockFun(){
	var invParams = {
		"mobileAction": "invInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"enttype": enttype,
		"userID": "id001",
		"userIP": "192.123.123.13"
	};
	invFun(invParams, "invInfo", "invInfo_div");
}

/**
 *变更信息 
 */
function searchChangeBlockFun(){
	var altInfoParams = {
		"mobileAction": "altInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"startTime": "",
		"endTime": "",
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchChangeFun(altInfoParams,"altinfo_s","altinfo_div");
}

/**
 *动产抵押 
 */
function searchMortBlockFun(){
	var moveInfoParmas = {
		"mobileAction": "moveInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchMortFun(moveInfoParmas,"moveInfo_s","moveInfo_div");
}


/**
 * 抽查结果信息 
 */
function searchCheckBlockFun(){
	var spotInfoParmas = {
		"mobileAction": "spotInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"userID": "id001",
		"userIP": "192.123.123.13"
	}
	searchCheckFun(spotInfoParmas,"spotInfo_s","spotInfo_div");
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


