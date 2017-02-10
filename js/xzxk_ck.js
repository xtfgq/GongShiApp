
var licid = request.QueryString("licid");

//行政许可详情
var licenseDetailsParams = {
			"mobileAction": "licenseDetail",			
			"licid": licid,
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchEntPermDetailFun(licenseDetailsParams,"licenseDetailsList","licenseDetails");
