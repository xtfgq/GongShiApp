window.onload = function() {
	var morregid = request.QueryString("morregid");
	var pripid = getPripid();
	var nodenumber = getNodeNumber();
	var dcdyck = {
		"mobileAction": "moveDetail",
		"morregid": morregid,
		"userID": pripid,
		"userIP": nodenumber
	}
	getdcdyDetails(dcdyck);
}

function getdcdyDetails(params) {
	$.post(purl + searchMortDetailUrl, params, function(data) {
		template.config("escape", false);
		var jsonData = JSON.parse(data);
		var djxx = jsonData.DJXX;
		var dyrxx = jsonData.DYRXX;
		var bdbrxx = jsonData.BDBRXX;
		var dywxx = jsonData.DYWXX;
		showDCDYListDetails(djxx, "dcdy_register_info_s", "dcdy_register_info_ul");
		showDCDYListDetails(dyrxx, "dcdy_person_info_s", "dcdy_person_info_div");
		showDCDYListDetails(bdbrxx, "dcdy_claims_info_s", "dcdy_claims_info_div");
		showDCDYListDetails(dywxx, "dcdy_pledge_info_s", "dcdy_pledge_info_div");

	})

}

function showDCDYListDetails(data, scriptid, divid) {
	if(data == "" || data == "{}" || data == "[]") {
		$("#" + divid).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
		return;
	}
	var html = template(scriptid, data);
	$("#" + divid).append(html);
}