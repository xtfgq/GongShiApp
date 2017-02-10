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
	var xzcfParams = {
		"mobileAction": "penaltyInfo",
		"pripid": pripid,
		"nodenum": nodenumber,
		"userID": "id001",
		"userIP": "192.123.123.13"

	};
	searchPuniFun(xzcfParams, "punishmentList", "punishment");
}