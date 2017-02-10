window.onload = function() {
	$.ajaxSettings.traditional = true;
	showTabList();
	var exception = getException();
	var enttype = getEntType();
	var pripid = getPripid();
	var nodenumber = getNodeNumber();

	busFun("CompanyDetails", "CompanyDetails_ul", exception)
	function busFun(detailSciptId, detailDivId, busExceptCount) {
		var jsonData = getListData();
		jsonData.busexceptcount = busExceptCount;
		var html = template(detailSciptId, jsonData);
		$("#" + detailDivId).append(html);
	}
	
	var illegalInfoParms = {
		"mobileAction": "illegalInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"enttype": enttype,
		"userID": "id001",
		"userIP": "192.123.123.13"
	};
	aillegalInfoFun(illegalInfoParms, "aillegalInfo_s", "aillegalInfo_div");
}

function aillegalInfoFun(params, detailSciptId, detailDivId) {
	$.post(purl + searchBrLawInfoUrl, params, function(data) {
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