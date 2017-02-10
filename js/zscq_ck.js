
var pleid = request.QueryString("pleid");

//知识产权详情
var propertyDetailsParams = {
			"mobileAction": "regDetail",
			"pleid": pleid,			
			"userID": "id001",
			"userIP": "192.123.123.13"
};
searchEntIntePropDetaiFun(propertyDetailsParams,"propertyDetailsList","propertyDetails");
