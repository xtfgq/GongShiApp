window.onload = function() {
	var stoCzList = sessionStorage.getItem("stoCzList");

	if(request.QueryString('reasonDate')) {
		var reasonDate = decodeURI(request.QueryString('reasonDate'));
		var reason = decodeURI(request.QueryString('reason'));
		var str = '<ul>';
		str +='<li>注销日期 <span>'+reasonDate+'</span></li>';
		str +='<li>注销内容<span>'+reason+'</span></li></ul>';
		
		$('#gqcz_details_div').append(str);
		
	}else if(request.QueryString('cancleDate')) {
		var reasonDate = decodeURI(request.QueryString('reasonDate'));
		var reason = decodeURI(request.QueryString('reason'));
		var str = '<ul>';
		str +='<li>撤销日期 <span>'+reasonDate+'</span></li>';
		str +='<li>撤销内容<span>'+reason+'</span></li></ul>';
		
		$('#gqcz_details_div').append(str);
	}else {
		var pripid = getPripid();
		var nodenumber = getNodeNumber();
		var imporgid = request.QueryString("imporgid");
	
		var gqczParms = {
			"mobileAction": "pledgeDetail",
			"imporgid": imporgid,
			"pripid": pripid,
			"nodenum": nodenumber,
			"userID": "id001",
			"userIP": "192.123.123.13"
		}
			getGqczDetails(gqczParms, "gqcz_details_s", "gqcz_details_div");
		}

	
}

function getGqczDetails(parms, SciptId, DivId) {
	$.post(purl + searchStoCzDetailUrl, parms, function(data) {
		template.config("escape", false);
//		console.log(data);
		if(data == "" || data == "{}" || data == "[]") {
			$("#" + DivId).html('<ul class="xq_jcxx_4_1"><li> 无 </li></ul>');
			return;
		}
		var jsonData = JSON.parse(data);
		var html = template(SciptId, jsonData);
		$("#" + DivId).append(html);
	})
}