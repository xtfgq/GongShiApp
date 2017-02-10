var noticeID = localStorage.getItem('bullentIndex');
var params = {
	"mobileAction":"spotcheckDetail",
	"noticeID":noticeID,
	"userID": "id001",
	"userIP": "192.123.123.13"
};
searchNotiSeleDetailFun(params,'bullentShowDetail','bullentShow');
