
var exception = getException();    
var enttype = getEntType();
var pripid = getPripid();          
var nodenumber= getNodeNumber(); 
var ancheyear = request.QueryString("ancheyear");

$("#subTitle").text(ancheyear+"年度报告");

//显示'股东及出资信息'还是'发起人及出资信息'
var str = enttype.substr(0,2)+'00';
if(str == '1200' || str == '5200' || str == '6200') {
	template.config("escape", false);
	$('#contentChange').html('发起人及出资信息');
	template.config("escape", false);
	$('#contentChange').html('股东及出资信息');
}

//基本信息
var basicDesc= {
			"mobileAction": "anbaseInfo",
			"pripid": pripid,
			"nodenum":nodenumber ,
			"ancheyear":ancheyear,
			"enttype": enttype,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoBaseFun(basicDesc,"searchAnnRepoBaseList","searchAnnRepoBase");
//网站或网店信息
var storeDesc= {
			"mobileAction": "anwebsiteInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber,
			"enttype": enttype,
			"pageNum":1,
			"pageSize":10,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoWebFun(storeDesc,"storeList","store");
//股东及出资信息
var capitalDesc= {
			"mobileAction": "ansubscapitalInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber ,
			"enttype": enttype,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoInvFun(capitalDesc,"capitalList","capital");
//对外投资信息
var investmentDesc= {
			"mobileAction": "anforinvestInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber ,
			"pageNum":1,
			"pageSize":10,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
seachAnnRepoOutInvFun(investmentDesc,"investmentList","investment");
//企业资产状况信息
var assetsDesc= {
			"mobileAction": "anassetsInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber,
			"enttype": enttype,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoAssetFun(assetsDesc,"assetsList","assets");
//对外提供保证担保信息
var guaranteelDesc= {
			"mobileAction": "anforgurarnteeInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
seachAnnRepoGuraFun(guaranteelDesc,"guaranteelList","guaranteel");
//股权变更信息
var equityDesc= {
			"mobileAction": "analterstockInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoAltStoFun(equityDesc,"equityList","equity");
//社保信息
//var socialDesc= {
//			"mobileAction": "entDetail",
//			"pripid": pripid,
//			"ancheyear":ancheyear,
//			"nodenum":nodenumber ,
//			"enttype": enttype,
//			"userID": "id001",
//			"userIP": "192.123.123.13"
//};
//修改信息
var updateDesc= {
			"mobileAction": "anupdateInfo",
			"pripid": pripid,
			"ancheyear":ancheyear,
			"nodenum":nodenumber ,
			"enttype": enttype,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchAnnRepoAltFun(updateDesc,"updateList","update");