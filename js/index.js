$(document).ready(function(){
	
	//enter键搜索
	//$('.searchtext').focus();
    $('.searchtext').bind('keydown', function (e) {
            var key = e.which;
            if (key == 13) {
                e.preventDefault();
                indexSearch();
            }
    });
    $(".search_btn").bind("click", function(){
		var typeText = $("div.content_box .content_3_1_span").text();
		var type = 1;
		if(typeText =="企业信用"){
			type = 1;
		}else if(typeText =="经营异常"){
			type = 2;
		}else if(typeText == "违法失信"){
			type = 3;
		}
		sessionStorage.removeItem("searchWord");
		sessionStorage.setItem("topic", type);
		window.location = 'search_list.html';
	});
  
})
	//日期转换成字符串  yyyy-MM-dd
	Date.prototype.formatDateToStr = function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}

//获取关注企业的变更数量
var attentionList = localStorage.getItem("attentions");
var chgCnt = sessionStorage.getItem("chgCnt");
if(attentionList != null && attentionList != undefined && attentionList != '' && chgCnt != "1"){
	
	var count = searchGetEntChgCountFun(JSON.parse(attentionList));
	
	//保存变更数量
	sessionStorage.setItem("chgCnt","1");
	if(count > 0){
		$(".gz_dot").html(count);
		$(".gz_dot").show();
	}else{
		$(".gz_dot").hide();
	}
}


//搜索历史列表
genHisList();

function indexSearch(){
	var url = "search_list.html";
	var searchWord = $(".searchtext").val();
	if($.trim(searchWord) == "请输入要查询的内容" || $.trim(searchWord) == "" || $.trim(searchWord).length < 2){
		return false;
	}
	var typeText = $("div.content_box .content_3_1_span").text();
	var type = 1;
	if(typeText =="企业信用"){
		type = 1;
	}else if(typeText =="经营异常"){
		type = 2;
	}else if(typeText == "违法失信"){
		type = 3;
	}
	
	sessionStorage.setItem("topic", type);
	if(searchWord != null && searchWord != ""){
		//记录搜索历史
		saveSearchHis(searchWord);
		
		sessionStorage.setItem("searchWord", searchWord);
		window.location = url+"?searchWord="+searchWord+"&topic="+type;
	}
}

	//记录搜索历史
	function saveSearchHis(keyword){
		keyword = $.trim(keyword);
		var keywords = localStorage.getItem("keywords");
		if(keywords == null || keywords == undefined){
			keywords = new Array();
		}else{
			keywords = keywords.split(",");
		}
		//搜索重复，将该关键词放到第一位
		for(var i = 0; i < keywords.length; i++){
			if(keyword == keywords[i]){
				keywords.splice(i,1);
				keywords.unshift(keyword);
				localStorage.setItem("keywords",keywords);
				return true;
			}
		}
		if(keywords.length < 50){
			//将新的关键词加入到历史记录中
			keywords.unshift(keyword);
		}else{
			//先移除最后一个元素再追加新元素到数组最前一个元素
			keywords.pop();
			keywords.unshift(keyword);
		}
		localStorage.setItem("keywords",keywords);
	}
	
	//搜索历史列表
	function genHisList(){
		var keywords = localStorage.getItem("keywords");
		$(".search_content ul").html('');
		if(keywords == null || keywords == undefined || keywords.length < 1){
			$(".search_content").hide();
		}else{
			keywords = keywords.split(",");
			var html = '';
			for(var i = 0; i < keywords.length; i++){
				html += '<li><a href="#"><i class="fa fa-search"></i>' + keywords[i] + '</a></li>';
			}
			$(".search_content ul").html(html);
		}
	}
	
	/** 
	 * 查询关注的所有企业自某时点以来有多少条变更信息
	 **/
	function searchGetEntChgCountFun(attentionList) {
		
		
		var retVal = 0;
		for(var i = 0; i < attentionList.length; i++){
			var attention = attentionList[i];
			var pripid = attention.pripid;
			var nodenumber = attention.nodenumber;
			var enttype = attention.enttype;
			var startTime = attention.atteDate;
			var endTime = new Date().formatDateToStr("yyyy-MM-dd");
			var params = {
				"pripid":pripid,
				"nodenum":nodenumber,
				"enttype":enttype,
				"startTime":startTime,
				"endTime":endTime
			}
			
			$.ajax({url:"http://yd.gsxt.gov.cn/GetEntChgCount", data:params, type:"post", async:false, success:function(data1) {
				var atte = localStorage.getItem("attentions");
				atte = JSON.parse(atte);
				for(var i = 0; i < atte.length; i++){
					if($.trim(atte[i].pripid) == $.trim(pripid)){
						atte[i].chgCount = data1;
						localStorage.setItem("attentions",JSON.stringify(atte));
						break;
					}
				}
				retVal += parseInt(data1);
			}})
		}
		
		return retVal;
	}