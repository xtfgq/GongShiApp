window.onload = function() {
	$.ajaxSettings.traditional = true;
	var exception = getException();
	var enttype = getEntType();
	var pripid = getPripid();
	var nodenumber = getNodeNumber();

	showTabList();
	busFun("CompanyDetails", "CompanyDetails_ul", exception)
	function busFun(detailSciptId, detailDivId, busExceptCount) {
		var jsonData = getListData();
		jsonData.busexceptcount = busExceptCount;
		var html = template(detailSciptId, jsonData);
		$("#" + detailDivId).append(html);
	}
	
	var abnormalInfoParms = {
		"mobileAction": "abnormalInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"enttype": enttype,
		"userID": "id001",
		"userIP": "192.123.123.13"
	};
	abnormalFun(abnormalInfoParms, "abnormal_s", "abnormal_div");
}

function abnormalFun(params, detailSciptId, detailDivId) {
	$.post(purl + searchAbnInfoUrl, params, function(data) {
		template.config("escape", false);
		var jsonData = JSON.parse(data);
		if(jsonData == "" || jsonData == "{}" || jsonData == "[]") {
			$("#" + detailDivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var html = template(detailSciptId, jsonData);
		$("#" + detailDivId).append(html);
	});
}