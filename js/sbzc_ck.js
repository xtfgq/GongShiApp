var brandList = sessionStorage.getItem("brandList");
var request =                                                                  
{                                                                              
	QueryString : function(val)                                                
	{                                                                          
		var uri = window.location.search;                                      
		var re = new RegExp("" +val+ "=([^&?]*)", "ig");                       
		return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null); 
	}                                                                          
};
$(document).ready(function(){
	var brandJoson = JSON.parse(brandList);
	var arrayIndex = request.QueryString("arrayIndex");
	console.info(brandJoson[arrayIndex]);
	var html = template("brandScriptDetailID", brandJoson[arrayIndex]);
	$("#brandDivDetailID").append(html);
})
