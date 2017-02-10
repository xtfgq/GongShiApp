var nodenumber = getNodeNumber(); 
var invid = request.QueryString("invid"); 
var invname = request.QueryString("invname"); 



var params = {                  
	"mobileAction": "invDetail",  
	"invid": invid,           
	"nodenum":nodenumber,             
	"userID": "id001",          
	"userIP": "192.123.123.13"  
}; 
searchInvDetailFun(params, "tptalScriptId","totalDivId","subcribeScriptId", "subcribeDivId", "paidScriptId", "paidDivId",invid,invname);