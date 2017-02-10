
//获取处罚公告的caseID编号;
var data = localStorage.getItem('bullentCase');
var params = {
	"mobileAction":"casepubDetail",
	"caseID":data,
	"userID": "id001",
	"userIP": "192.123.123.13"
}
//请求处罚公告（地方数据）
searchNotiPuniDetail(params,'bullentShowDetail','bullentShow');








