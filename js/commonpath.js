//项目根路径
//var purl = "http://192.168.1.127:8080/";
var purl = "http://yd.gsxt.gov.cn/";
//采集数据外部接口
var baseUrl="106.75.93.167";

//查询某(多)企业自某时点以来有多少条变更信息
var searchGetEntChgCountUrl = "GetEntChgCount";
//搜索列表页路径
var searchListSummayUrl = "QuerySummary";
//查询异常名录列表，按照企业名称、注册号、统一社会信用代码、或空
var searchAbnUrl = "QueryAbn";
//查询违法失信列表，按照企业名称、注册号、统一社会信用代码、或空
var searchBrLawUrl = "QueryBrLaw";

//关键字自动完成
var searchAutoCompleteUrl = "AutoComplete";

//获取内资公司法人信息详情
var searchBusiLiceUrl = "QueryBusiLice";
//查询股东及出资信息
var searchInvUrl = "QueryInv";
//查询某股东详情
var searchInvDetailUrl = "QueryInvDetail";
//查询主要人员信息
var searchPersonUrl = "QueryPerson";
//查询分支机构信息
var searchBranchUrl = "QueryBranch";
//查询清算信息
var searchAuditUrl = "QueryAudit";
//查询变更信息
var searchChangeUrl = "QueryChange";
//查询动产抵押登记信息
var searchMortUrl = "QueryMort";
//查询某动产抵押详情
var searchMortDetailUrl = "QueryMortDetail";
//查询知识产权出质信息
var searchIntePropUrl = "QueryInteProp";
//查询某知识产权出质详情
var searchIntePropDetailUrl = "QueryIntePropDetail";
//查询股权出质登记信息
var searchStoCzUrl = "QueryStoCz";
//查询股权出质登记详情
var searchStoCzDetailUrl = "QueryStoCzDetail";
//查询商标注册信息
var searchBrandUrl = "QueryBrand";
//查询某商标注册详情
var searchBrandDetailUrl = "QueryBrandDetail";
//查询抽查检查信息
var searchCheckUrl = "QueryCheck";
//查询司法协助信息
var searchJudiUrl = "QueryJudi";
//查询某司法协助详情
var searchJudiDetailUrl = "QueryJudiDetail";
//查询行政许可信息
var searchPermUrl = "QueryPerm";
//查询行政处罚信息
var searchPuniUrl = "QueryPuni";
//查询某行政处罚详情
var searchPuniDetailUrl = "QueryPuniDetail";
//查询列入异常名录信息
var searchAbnInfoUrl = "QueryAbnInfo";
//查询违法失信信息
var searchBrLawInfoUrl = "QueryBrLawInfo";
//查询年报信息
var searchAnnRepoUrl = "QueryAnnRepo";
//查询年报基本信息
var searchAnnRepoBaseUrl="QueryAnnRepoBase";
//查询年报企业资产状况
var searchAnnRepoAssetUrl="QueryAnnRepoAsset";
//查询年报股东出资信息
var searchAnnRepoInvUrl="QueryAnnRepoInv";
//查询年报对外提供担保信息
var seachAnnRepoGuraUrl="QueryAnnRepoGura";
//查询某年报对外投资信息
var searchAnnRepoOutInvUrl="QueryAnnRepoOutInv";
//查询年报股权变更信息
var searchAnnRepoAltStoUrl="QueryAnnRepoAltSto";
//查询某年报某项分页信息
var searchAnnRepoItemUrl = "QueryAnnRepoItem";
//查询企业股东及出资即时信息
var searchEntInvUrl = "QueryEntInv";
//查询企业股东及出资即时信息的修改记录
var searchEntInvDetailUrl = "QueryEntInvDetail";
//查询企业股权变更即时信息
var searchEntStoUrl = "QueryEntSto";
//查询企业行政许可即时信息
var searchEntPermUrl = "QueryEntPerm";
//查询企业某行政许可详情
var searchEntPermDetailUrl = "QueryEntPermDetail";
//查询企业知识产权出质信息
var seachEntIntePropUrl = "QueryEntInteProp";
//查询企业某知识产权出质详情
var searchEntIntePropDetailUrl = "QueryEntIntePropDetail";
//查询企业行政处罚信息
var searchEntPuniUrl = "QueryEntPuni";
//查询异常名录列入公告
var searchNotiAbnInfoUrl = "QueryNotiAbnInfo";
//查询异常名录列入公告详情
//var searchNotiAbnDetailUrl = "QueryNotiAbnDetail";
//查询异常名录移出公告
var searchNotiAbnRemUrl = "QueryNotiAbnRem";
//查询异常名录移出公告详情
//var searchNotiAbnRemDetailUrl = "QueryNotiAbnRemDetail";
//查询异常名录期满三年提醒公告
var searchNotiAbnWarnUrl = "QueryNotiAbnWarn";
//查询异常名录期满三年提醒公告详情
//var searchNotiAbnWarnDetailUrl = "QueryNotiAbnWarnDetail";
//查询违法失信列入公告
var searchNotiBrLawUrl = "QueryNotiBrLaw";
//查询违法失信列入公告详情
//var searchNotiBrLawDetailUrl = "QueryNotiBrLawDetail";
//查询违法失信移出公告
var searchNotiBrLawRemUrl = "QueryNotiBrLawRem";
//查询违法失信移出公告详情
//var searchNotiBrLawRemDetailUrl = "QueryNotiBrLawRemDetail";
//查询抽查公告
var searchNotiSeleUrl = "QueryNotiSele";
//查询抽查公告详情
var searchNotiSeleDetailUrl = "QueryNotiSeleDetail";
//查询检查公告，查询检查公告详情
var searchNotiCheckUrl = "QueryNotiCheck";
//查询检查公告详情
//var searchNotiCheckDetailUrl = "QueryNotiCheckDetail";
//查询行政处罚公告
var searchNotiPuniUrl = "QueryNotiPuni";
//查询行政处罚公告详情(地方)
var searchNotiPuniDetailUrl = "QueryNotiPuniDetail";
//查询行政处罚公告详情(中央)
var searchCenterNotiPuniDetailUrl = "QueryCenterNotiPuniDetail";
//查询司法股权冻结公告，查询司法股权冻结公告详情
var searchNotiStoFreUrl = "QueryNotiStoFre";
//查询司法股权冻结公告详情
//var searchNotiStoFreDetailUrl = "QueryNotiStoFreDetail";
//查询司法股东变更公告，查询司法股东变更公告详情
var searchNotiInvChgUrl = "QueryNotiInvChg";
//查询司法股东变更公告详情
//var searchNotiInvChgDetailUrl = "QueryNotiInvChgDetail";
//查询企业正常注销公告，查询企业正常注销公告详情
var searchNotiNorOutUrl = "QueryNotiNorOut";
//查询企业正常注销公告详情
//var searchNotiNorOutDetailUrl = "QueryNotiNorOutDetail";
//查询企业简易注销公告，查询企业简易注销公告详情
var searchNotiSimOutUrl = "QueryNotiSimOut";
//查询企业简易注销公告详情
//var searchNotiSimOutDetailUrl = "QueryNotiSimOutDetail";
//查询其他公告，查询其他公告详情
var searchNotiOtherUrl = "QueryNotiOther";
//查询其他公告详情
//var searchNotiOtherDetailUrl = "QueryNotiOtherDetail";
//查询年报网站信息
var searchAnnRepoWebUrl="QueryAnnRepoWeb";
//查询年报修改记录
var searchAnnRepoAltUrl="QueryAnnRepoAlt";
var request =                                                                  
{                                                                              
	QueryString : function(val)                                                
	{                                                                          
		var uri = window.location.search;                                      
		var re = new RegExp("" +val+ "=([^&?]*)", "ig");                       
		return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null); 
	}                                                                          
};

//日期转换成字符串  yyyy-MM-dd
Date.prototype.formatDateToStr = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//在目标容器中添加加载中图标
function showLoadingIcon(){
	var loadingIcon ='<div class="loader">'
						+'<div class="loader-inner line-spin-fade-loader">'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'</div>'
					      +'</div>';
	$('body').append(loadingIcon);
}
//隐藏加载中图标
function removeLoadingIcon(){
	$("body div.loader").remove();
}

$(function(){
	$(".follow_1").off("click");
	$(".follow_1").on("click",function(){
		var attentions = localStorage.getItem("attentions");
		var pripid = getPripid();
		//公司基本信息
		var lisData = getListData();
		if(lisData == null || lisData == undefined){
			return;
		}
		var comName = null;
		//cat18为16的数据，公司名称变量名与其他的不一样
		if(getCat18() == 16){
			comName = lisData.TRANAME;
		}else{
			comName = lisData.ENTNAME;
		}
		var status = attentionOprate(comName);
		if(status){
			$(this).find(".fa-heart-o").animate({top:"-12px"},500);
		    $(this).find(".fa-heart").animate({top:"6px"},500);
			$(this).addClass("follow_1_hover");
			$(this).find("span").text("已关注");
			return false;
		}else{
			$(this).find(".fa-heart-o").animate({top:"6px"},500);
		    $(this).find(".fa-heart").animate({top:"24px"},500);	
			$(this).removeClass("follow_1_hover");
			$(this).find("span").text("未关注");
			return false;
		}
		
	})
})
function redirectUrl(url,pageId){
	window.location = url + "?pageId="+pageId;
}
function yearUrl(url,ancheyear){
	window.location = url + "?ancheyear="+ancheyear;                                     
}

//返回上一页
function goBackPage(){
	var cat18 = getCat18();
	if (cat18 ==1 || cat18 ==10){
		window.location = "xq_jcxx.html";
	}else if(cat18 == 2 || cat18 == 4 || cat18 == 6 || cat18 == 8 || cat18 == 9 || cat18 == 11 || cat18 == 13 || cat18 == 14){
		window.location = "xq_jcxx_2_4_6_8_9_11_13_14.html";
	}else if(cat18 == 3){
		window.location = "xq_jcxx_3.html";
	}else if(cat18 == 15){
		window.location = "xq_jcxx_15.html";
	}else if(cat18 == 5 || cat18 == 12){
		window.location = "xq_jcxx_5_12.html";
	}else if(cat18 == 7){
		window.location = "xq_jcxx_7.html";
	}else if(cat18 == 16){
		window.location = "xq_jcxx_16.html";
	}else if(cat18 == 17){
		window.location = "xq_jcxx_17.html";
	}else if(cat18 == 18){
		window.location = "xq_jcxx_18.html";
	}
}

/**
 * 显示tab列表
 */
function showTabList() {
	var cat = getCat18();
	var cat18 = {
		"CAT18": cat
	};
	template.config("escape", false);
	var html = template("ul_tab_list_script", cat18);
	$("#ul_tab_list").append(html);
}
//从sessionStorage中获取 搜索关键字
function getSearchWord(){
	return sessionStorage.getItem("searchWord");
}
//从sessionStorage中获取 搜索类型，1：企业信用，2：经营异常，3：违法失信
function getSearchType(){
	return sessionStorage.getItem("topic");
}
//从sessionStorage中获取cat18的值
function getCat18(){
	return sessionStorage.getItem("cat18");
}
//从sessionStorage中获取 企业是否异常
function getException(){
	return sessionStorage.getItem("exception");
}
//从sessionStorage中获取 pripid
function getPripid(){
	return sessionStorage.getItem("pripid");
}

//从sessionStorage中获取 nodenumber
function getNodeNumber(){
	return sessionStorage.getItem("nodenumber");
}
//从sessionStorage中获取 
function getEntType(){
	return sessionStorage.getItem("enttype");
}

/**
 * 获得请求头部详细信息
 */
function getListData(){
	var listData = sessionStorage.getItem("lisdata");
	return JSON.parse(listData);
}

/**
 * 详情页面添加/取消关注
 * comName:公司名称
 * 返回值，处理完成后，关注列表中是否存在该信息，true:存在（已添加关注），false:不存在(已取消关注)
 */
function attentionOprate(comName){
	
	var pripid = getPripid();
	var exception = getException();
	var nodenumber = getNodeNumber();
	var enttype = getEntType();
	var cat18 = getCat18();
	
	if(comName == null && $.trim(comName) == ""){
		return;
	}
	var attentions = localStorage.getItem("attentions");
	if(attentions == null || attentions == undefined){
		attentions = new Array();
	}else{
		attentions = JSON.parse(attentions);
	}
	//循环已关注的公司，如果存在，则删除该公司，返回false
	for(var i = 0; i < attentions.length; i++){
		if($.trim(attentions[i].pripid) == $.trim(pripid)){
			attentions.splice(i,1);
			localStorage.setItem("attentions",JSON.stringify(attentions));
			return false;
		}
	}

	//向数组中添加该公司，并返回true
	var comObj = {
		"pripid":pripid,
		"exception":exception,
		"nodenumber":nodenumber,
		"enttype":enttype,
		"cat18":cat18,
		"comName":comName,
		"atteDate":new Date().formatDateToStr("yyyy-MM-dd")
	}
	//最大只能关注20个
	if(attentions.length < 20){
		attentions.unshift(comObj);
	}else{
		keywords.pop();
		attentions.unshift(comObj);
	}
	localStorage.setItem("attentions",JSON.stringify(attentions));
	return true;
}

//详情页面加载已关注/未关注按钮样式
function loadAttentionLogo(pripid){
	var attentions = localStorage.getItem("attentions");
	if(attentions == null || attentions == undefined){
		$(".follow_1").removeClass("follow_1_hover");
		$(".follow_1").find("span").text("未关注");
		return;
	}else{
		attentions = JSON.parse(attentions);
	}
	for(var i = 0; i < attentions.length; i++){
		if($.trim(attentions[i].pripid) == $.trim(pripid)){
			//该公司已被关注
			$(".follow_1").addClass("follow_1_hover");
			$(".follow_1").find("span").text("已关注");
			return;
		}
	}
	//该公司未被关注
	$(".follow_1").removeClass("follow_1_hover");
	$(".follow_1").find("span").text("未关注");
}

/** 
 * 查询营业执照信息
 * params:查询参数
 * detailSciptId：公司详情模板Script标签的id
 * detailDivId:填充公司详情div的id
 * licenceScriptId：营业执照模板Script标签的id
 * licenceDivId：填充营业执照div的id
 * busExceptCount：公司是否列入异常，列表页面传递过来的参数
 **/
function busiLiceFun(params, detailSciptId, detailDivId, licenceScriptId, licenceDivId, busExceptCount) {
	showLoadingIcon();
	$.post(purl + searchBusiLiceUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+licenceDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		template.config("escape", false);
		var jsonData = JSON.parse(data);
		sessionStorage.setItem("lisdata",data);
		alert(data+"");
		//向结果中写入参数-异常字段，name，passwd需要重新定义
		jsonData.busexceptcount = busExceptCount;
		 $.ajax({
          url : baseUrl,
          type : "POST",
          contentType: "application/json;charset=utf-8",
          data : JSON.stringify({'name':name,'passwd':passwd}),
          dataType : "text",
          success : function(result) {
            if (result == "success") {
              
            } else {
            }
          },
          error:function(msg){
            $(".notice").html('Error:'+msg);
          }
        })
		var html = template(detailSciptId, jsonData);
		$("#" + detailDivId).append(html);

		var html = template(licenceScriptId, jsonData);
		$("#" + licenceDivId).append(html);
	})
}

/** 
 * 查询股东及出资信息
 * params：查询参数
 * invSciptId：出资信息模板Script标签的id
 * invlDivId:出资信息详情div的id
 **/
function invFun(params, invSciptId, invDivId) {
	$.post(purl + searchInvUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+invDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(invSciptId, jsonData);
		$("#" + invDivId).append(html);
	})
}

/** 
 * 查询主要人员信息
 * params：查询参数
 * personSciptId：主要人员信息模板Script标签的id
 * personDivId：主要人员信息详情div的id
 **/
function personFun(params, personSciptId, personDivId) {
	$.post(purl + searchPersonUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+personDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(personSciptId, jsonData);
		$("#" + personDivId).append(html);
	})
}

/** 
 * 查询分支机构信息
 * params：查询参数
 * branchSciptId：分支机构信息模板Script标签的id
 * branchDivId：分支机构信息详情div的id
 **/
function branchFun(params, branchSciptId, branchDivId) {
	$.post(purl + searchBranchUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+branchDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');	
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(branchSciptId, jsonData);
		$("#" + branchDivId).append(html);
	})
}

/** 
 * 查询清算信息
 * params：查询参数
 * auditSciptId：清算信息模板Script标签的id
 * auditDivId：清算信息详情div的id
 **/
function auditFun(params, auditSciptId, auditDivId) {
	$.post(purl + searchAuditUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+auditDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(auditSciptId, jsonData);
		$("#" + auditDivId).append(html);
	})
}

/** 
 * 查询变更信息
 * params：查询参数
 * changeSciptId：变更信息模板Script标签的id
 * changeDivId：变更信息详情div的id
 **/
function searchChangeFun(params, changeSciptId, changeDivId) {
	$.post(purl + searchChangeUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+changeDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(changeSciptId, jsonData);
		$("#" + changeDivId).append(html);
	})
}

/** 
 * 查询异常名录列表信息
 * params：查询参数
 * searchAbnSciptId：异常名录列表信息模板Script标签的id
 * searchAbnDivId：异常名录列表信息详情div的id
 **/
function searchAbnFun(params, searchAbnSciptId, searchAbnDivId) {
	$.post(purl + searchAbnUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAbnDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchAbnSciptId, jsonData);
		$("#" + searchAbnDivId).append(html);
	})
}

/** 
 * 查询动产抵押登记信息
 * params：查询参数
 * searchMortSciptId：查询动产抵押登记信息模板Script标签的id
 * searchMortDivId：查询动产抵押登记信息div的id
 **/
function searchMortFun(params, searchMortSciptId, searchMortDivId) {
	$.post(purl + searchMortUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchMortDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchMortSciptId, jsonData);
		$("#" + searchMortDivId).append(html);
	})
}
/** 
 * 查询某动产抵押详情
 * params：查询参数
 * searchMortDetailSciptId：查询某动产抵押详情模板Script标签的id
 * searchMortDetailDivId：查询某动产抵押详情div的id
 **/
function searchMortDetailFun(params, searchMortDetailSciptId, searchMortDetailDivId) {
	$.post(purl + searchMortDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchMortDetailDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchMortDetailSciptId, jsonData);
		$("#" + searchMortDetailDivId).append(html);
	})
}
/** 
 * 查询抽查检查信息
 * params：查询参数
 * searchCheckSciptId：查询抽查检查信息模板Script标签的id
 * searchCheckDivId：查询抽查检查信息div的id
 **/
function searchCheckFun(params, searchCheckSciptId, searchCheckDivId) {
	$.post(purl + searchCheckUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchCheckDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchCheckSciptId, jsonData);
		$("#" + searchCheckDivId).append(html);
	})
}
/** 
 * 查询司法协助信息
 * params：查询参数
 * searchJudiSciptId：查询司法协助信息模板Script标签的id
 * searchJudiDivId：查询司法协助信息div的id
 **/
function searchJudiFun(params, searchJudiSciptId, searchJudiDivId) {
	$.post(purl + searchJudiUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchJudiDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchJudiSciptId, jsonData);
		$("#" + searchJudiDivId).append(html);
	})
}
/** 
 * 查询某司法协助详情
 * params：查询参数
 * searchJudiDetailSciptId：查询某司法协助详情模板Script标签的id
 * searchJudiDetailDivId：查询某司法协助详情div的id
 **/
function searchJudiDetailFun(params, searchJudiDetailSciptId, searchJudiDetailDivId) {
	$.post(purl + searchJudiDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchJudiDetailDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchJudiDetailSciptId, jsonData);
		$("#" + searchJudiDetailDivId).append(html);
	})
}
/** 
 * 查询行政许可信息
 * params：查询参数
 * searchPermSciptId：查询行政许可信息模板Script标签的id
 * searchPermDivId：查询行政许可信息div的id
 **/
function searchPermFun(params, searchPermSciptId, searchPermDivId) {
	$.post(purl + searchPermUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchPermDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchPermSciptId, jsonData);
		$("#" + searchPermDivId).append(html);
	})
}
/** 
 * 查询行政处罚信息
 * params：查询参数
 * searchPuniSciptId：查询行政处罚信息模板Script标签的id
 * searchPuniDivId：查询行政处罚信息div的id
 **/
function searchPuniFun(params, searchPuniSciptId, searchPuniDivId) {
	$.post(purl + searchPuniUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchPuniDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchPuniSciptId, jsonData);
		$("#" + searchPuniDivId).append(html);
	})
}
/** 
 * 查询违法失信信息
 * params：查询参数
 * searchBrLawInfoSciptId：查询违法失信信息模板Script标签的id
 * searchBrLawInfoDivId：查询违法失信信息div的id
 **/
function searchBrLawInfoFun(params, searchBrLawInfoSciptId, searchBrLawInfoDivId) {
	$.post(purl + searchBrLawInfoUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchBrLawInfoDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchBrLawInfoSciptId, jsonData);
		$("#" + searchBrLawInfoDivId).append(html);
	})
}
/** 
 * 查询年报信息
 * params：查询参数
 * searchAnnRepoSciptId：查询年报信息模板Script标签的id
 * searchAnnRepoDivId：查询年报信息div的id
 **/
function searchAnnRepoFun(params, searchAnnRepoSciptId, searchAnnRepoDivId) {
	$.post(purl + searchAnnRepoUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchAnnRepoSciptId, jsonData);
		$("#" + searchAnnRepoDivId).append(html);
	})
}

/** 
 * 查询年报基本信息
 * params：查询参数
 * searchAnnRepoBaseSciptId：年报基本信息模板Script标签的id
 * searchAnnRepoBaseDivId：年报基本信息div的id
 **/
function searchAnnRepoBaseFun(params, searchAnnRepoBaseSciptId, searchAnnRepoBaseDivId) {
	$.post(purl + searchAnnRepoBaseUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoBaseDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchAnnRepoBaseSciptId, jsonData);
		$("#" + searchAnnRepoBaseDivId).append(html);
	})
}
/** 
 * 查询年报企业资产状况
 * params：查询参数
 * searchAnnRepoAssetSciptId:年报企业资产状况模板Script标签的id
 * searchAnnRepoAssetDivId:年报企业资产状况div的id
 **/
function searchAnnRepoAssetFun(params, searchAnnRepoAssetSciptId, searchAnnRepoAssetDivId) {
	$.post(purl + searchAnnRepoAssetUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoAssetDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchAnnRepoAssetSciptId, jsonData);
		$("#" + searchAnnRepoAssetDivId).append(html);
	})
}
/** 
 * 查询年报股东出资信息
 * params：查询参数
 * searchAnnRepoInvSciptId:年报股东出资信息模板Script标签的id
 * searchAnnRepoInvDivId:年报股东出资信息div的id
 **/
function searchAnnRepoInvFun(params, searchAnnRepoInvSciptId, searchAnnRepoInvDivId) {
	$.post(purl + searchAnnRepoInvUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoInvDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(searchAnnRepoInvSciptId, jsonData);
		$("#" + searchAnnRepoInvDivId).append(html);
	})
}
/** 
 * 查询年报对外提供担保信息
 * params：查询参数
 * seachAnnRepoGuraSciptId:查询年报对外提供担保信息模板Script标签的id
 * seachAnnRepoGuraDivId:查询年报对外提供担保信息div的id
 **/
function seachAnnRepoGuraFun(params, seachAnnRepoGuraSciptId, seachAnnRepoGuraDivId) {
	$.post(purl + seachAnnRepoGuraUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+seachAnnRepoGuraDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		alert(data+"");
		var html = template(seachAnnRepoGuraSciptId, jsonData);
		$("#" + seachAnnRepoGuraDivId).append(html);
	})
}
/** 
 * 查询年报对外投资信息
 * params：查询参数
 * seachAnnRepoOutInvSciptId:查询年报对外投资信息模板Script标签的id
 * seachAnnRepoOutInvDivId:查询年报对外投资信息div的id
 **/
function seachAnnRepoOutInvFun(params, seachAnnRepoOutInvSciptId, seachAnnRepoOutInvDivId) {
	$.post(purl + seachAnnRepoGuraUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+seachAnnRepoOutInvDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(seachAnnRepoOutInvSciptId, jsonData);
		$("#" + seachAnnRepoOutInvDivId).append(html);
	})
}
/** 
 * 查询年报股权变更信息
 * params：查询参数
 * searchAnnRepoAltStoSciptId:查询年报股权变更信息模板Script标签的id
 * searchAnnRepoAltStoDivId:查询年报股权变更信息div的id
 **/
function searchAnnRepoAltStoFun(params, searchAnnRepoAltStoSciptId, searchAnnRepoAltStoDivId) {
	$.post(purl + searchAnnRepoAltStoUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoAltStoDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(searchAnnRepoAltStoSciptId, jsonData);
		$("#" + searchAnnRepoAltStoDivId).append(html);
	})
}
/** 
 * 查询年报股权变更信息
 * params：查询参数
 * searchAnnRepoAltStoSciptId:查询年报股权变更信息模板Script标签的id
 * searchAnnRepoAltStoDivId:查询年报股权变更信息div的id
 **/
function searchAnnRepoAltStoFun(params, searchAnnRepoAltStoSciptId, searchAnnRepoAltStoDivId) {
	$.post(purl + searchAnnRepoAltStoUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+searchAnnRepoAltStoDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(searchAnnRepoAltStoSciptId, jsonData);
		$("#" + searchAnnRepoAltStoDivId).append(html);
	})
}
/** 
 * 查询企业股权变更即时信息
 * params：查询参数
 * SciptId:查询企业股权变更即时信息模板Script标签的id
 * DivId:查询企业股权变更即时信息div的id
 **/
function searchEntStoFun(params, SciptId, DivId) {
	$.post(purl + searchEntStoUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询企业行政许可即时信息
 * params：查询参数
 * SciptId:查询企业行政许可即时信息模板Script标签的id
 * DivId:查询企业行政许可即时信息div的id
 **/
function searchEntPermFun(params, SciptId, DivId) {
	$.post(purl + searchEntPermUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询企业某行政许可详情
 * params：查询参数
 * SciptId:查询企业某行政许可详情模板Script标签的id
 * DivId:查询企业某行政许可详情div的id
 **/
function searchEntPermDetailFun(params, SciptId, DivId) {
	$.post(purl + searchEntPermDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询企业知识产权出质信息
 * params：查询参数
 * SciptId:查询企业知识产权出质信息模板Script标签的id
 * DivId:查询企业知识产权出质信息div的id
 **/
function searchEntIntePropFun(params, SciptId, DivId) {
	$.post(purl + seachEntIntePropUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询企业某知识产权出质详情
 * params：查询参数
 * SciptId:查询企业某知识产权出质详情模板Script标签的id
 * DivId:查询企业某知识产权出质详情div的id
 **/
function searchEntIntePropDetaiFun(params, SciptId, DivId) {
	$.post(purl + searchEntIntePropDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询企业行政处罚信息
 * params：查询参数
 * SciptId:查询企业行政处罚信息模板Script标签的id
 * DivId:查询企业行政处罚信息div的id
 **/
function searchEntPuniFun(params, SciptId, DivId) {
	$.post(purl + searchEntPuniUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询年报网站信息
 * params：查询参数
 * SciptId:查询年报网站信息模板Script标签的id
 * DivId:查询年报网站信息div的id
 **/
function searchAnnRepoWebFun(params, SciptId, DivId) {
	$.post(purl + searchAnnRepoWebUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询年报修改记录
 * params：查询参数
 * SciptId:查询年报修改记录模板Script标签的id
 * DivId:查询年报修改记录div的id
 **/
function searchAnnRepoAltFun(params, SciptId, DivId) {
	$.post(purl + searchAnnRepoAltUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/** 
 * 查询某股东详情
 * params：查询参数
 * SciptId:查询年报修改记录模板Script标签的id
 * DivId:查询年报修改记录div的id
 **/
function searchInvDetailFun(params, SciptId, DivId, SciptId_2, DivId_2, SciptId_3, DivId_3,invid, invName) {
	$.post(purl + searchInvDetailUrl, params, function(data) {
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData.TOTAL);
		$("#" + DivId).append(html);	
		$("#per").html(decodeURI(invName));
		
		var html2 = template(SciptId_2, jsonData.SUB);
		if(jsonData.SUB == "" || jsonData.SUB == "{}" || jsonData.SUB == "[]"){
			$("#"+DivId_2).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
		}else{
			$("#" + DivId_2).append(html2);
		}
		var html3 = template(SciptId_3, jsonData.AC);
		if(jsonData.AC == "" || jsonData.AC == "{}" || jsonData.AC == "[]"){
			$("#"+DivId_3).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		$("#" + DivId_3).append(html3);
	})
}
/** 
 * 查询企业股东及出资即时信息
 * params：查询参数
 * SciptId:查询年报修改记录模板Script标签的id
 * DivId:查询年报修改记录div的id
 **/
function searchEntInvFun(params, SciptId, DivId) {
	$.post(purl + searchEntInvUrl, params, function(data) {
		var jsonData = JSON.parse(data);	
		if(jsonData == "" || jsonData == "{}" || jsonData == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');			
			return;
		}
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
//		var html2 = template(SciptId_2, jsonData.SUB);
//		if(jsonData.SUB == "" || jsonData.SUB == "{}" || jsonData.SUB == "[]"){
//			$("#"+DivId_2).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
//			
//		}
//		$("#" + DivId_2).append(html2);
//		var html3 = template(SciptId_3, jsonData.AC);
//		$("#per").html(decodeURI(invid));
//		if(jsonData.AC == "" || jsonData.AC == "{}" || jsonData.AC == "[]"){
//			$("#"+DivId_3).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
//		
//		}
//		$("#" + DivId_3).append(html3);
	})
}


//公告接口


var bullentArr = [];
/*
 //查询异常名录列入公告及详情
 * */
function searchNotiAbnInfo(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiAbnInfoUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}			
		}
		
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
//			document.getElementById(DivId).innerHTML = html;
			$("#" + DivId).append(html);
		}
	})
}

/*
 //查询异常名录移出公告及详情
 * */
function searchNotiAbnRem(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiAbnRemUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}

/*
 //查询异常名录期满三年提醒公告及详情
 * */
function searchNotiAbnWarn(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiAbnWarnUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}

/*
 //查询违法失信列入公告及详情
 * */
function searchNotiBrLaw(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiBrLawUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}

/*
 //查询违法失信移出公告及详情
 * */
function searchNotiBrLawRem(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiBrLawRemUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询抽查公告
 * */
function searchNotiSeleFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiSeleUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询抽查公告详情(暂时不按动态加载)
 * */
function searchNotiSeleDetailFun(params, SciptId, DivId) {
	$.post(purl + searchNotiSeleDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
/*
 //查询检查公告，查询检查公告详情
 * */
function searchNotiCheckFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiCheckUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询司法股权冻结公告，查询司法股权冻结公告详情
 * */
function searchNotiStoFreFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiStoFreUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询司法股东变更公告，查询司法股东变更公告详情
 * */
function searchNotiInvChgFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiInvChgUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
//			document.getElementById(DivId).innerHTML = html;
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询企业简易注销公告，查询企业简易注销公告详情
 * */
function searchNotiSimOutFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiSimOutUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询企业正常注销公告，查询企业正常注销公告详情
 * */
function searchNotiNorOutFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiNorOutUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}
/*
 //查询其他公告，查询其他公告详情
 * */
function searchNotiOtherFun(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiOtherUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}

/*
 //查询行政处罚公告
 * */
function searchNotiPuni(params,DivId,str,pageNum) {
	var render = template.render(str);
	$.post(purl + searchNotiPuniUrl, params, function(data) {
		removeLoadingIcon();
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		if(pageNum == 1) {
			bullentArr = jsonData;
		} else {
			for(var i=0;i<jsonData.length;i++) {
				bullentArr.push(jsonData[i]);
			}
		}
		for(var i=0;i<jsonData.length;i++) {
			var html = render(jsonData[i]);
			$("#" + DivId).append(html);
		}
	})
}


/*
 //查询行政处罚公告（地方）详情
 * */
function searchNotiPuniDetail(params, SciptId, DivId) {
	$.post(purl + searchNotiPuniDetailUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}

/*
 //查询行政处罚公告（中央）详情
 * */
function searchCenterNotiPuniDetail(params, DivId) {
	$.post(purl + searchCenterNotiPuniDetailUrl, params, function(data) {
		var jsonData = JSON.parse(data);
		var header = jsonData.T_HEADER;
		var body = jsonData.T_DATA;
		if(body == "" || body == "{}" || body == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		//$("#bullentShow").html('');
		var tempStr = '<script type="text/html" id = "bullentShowScript">'
			+ '{{each}}<ul>';
			for(var i = 0; i < header.length;i++){
				if(header[i].ISSHOW == "1"){
					tempStr+='<li>'+header[i].COLUMNTITLE+'<span>{{$value.'+header[i].COLUMNNAME+'}}</span></li>';
				}
				
			}
			tempStr += '</ul>{{/each}}'
			+ '</script>';
		$("#" + DivId).append(tempStr);
		var html = template("bullentShowScript", body);
		$("#" + DivId).append(html);
	})
}

/**
 * 商标注册信息
 */
function searchBrandFun(params, SciptId, DivId) {
	$.post(purl + searchBrandUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		sessionStorage.setItem("brandList",data);
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}

/**
 * 股权出质信息
 */
function searchStoCzFun(params, SciptId, DivId) {
	$.post(purl + searchStoCzUrl, params, function(data) {
		if(data == "" || data == "{}" || data == "[]"){
			$("#"+DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}
