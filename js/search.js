 //当前页数
var pageNo = 1;
 $('.searchtext').bind('keydown', function (e) {
            var key = e.which;
            if (key == 13) {
                e.preventDefault();
                search();
            }
    });

//获取url参数
var request =
{
	QueryString : function(val)
	{
		var uri = window.location.search;
		var re = new RegExp("" +val+ "=([^&?]*)", "ig");
		return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
	}
};
$(function(){
	$(".searchtext").off("focus");
	$(".searchtext").on('focus',function(){
		var searchtext=$(".searchtext").val();
		$(".searchtext").css("color","#333");
		if(searchtext=="请输入要查询的内容"){
			$(this).val("");
		}
		genHisList();
		   
	})
});

var searchWord = sessionStorage.getItem("searchWord");
var topic = sessionStorage.getItem("topic");
if(searchWord != null && searchWord != ""){
	searchWord = decodeURI(searchWord);
	$(".searchtext").val(searchWord);
}
//生成搜索历史列表


//loadData();

//页面跳转，设置sessionStorage
function toUrlAndSaveParam(url,exception,enttype,pripid,nodenumber,cat18){
	sessionStorage.setItem("exception", exception);
	sessionStorage.setItem("enttype", enttype);
	sessionStorage.setItem("pripid", pripid);
	sessionStorage.setItem("nodenumber", nodenumber);
	sessionStorage.setItem("cat18", cat18);
	window.location = url;
}


template.config("escape", false);
var render = template('datalist');
clearInput();
genHisList();
//加载数据
function loadData(){
		showLoadingIcon();
		if(searchWord == null || $.trim(searchWord) == "请输入要查询的内容" || $.trim(searchWord) == ""){
			return false;
		}
		var params = {"mobileAction":"entSearch","keywords":searchWord,"topic":topic,"pageNum":pageNo,"pageSize":"10","userID":"id001","userIP":"192.123.123.13"};
		if(topic == 1){
			//企业信用
			$.post(purl+searchListSummayUrl,params, function(data){
				removeLoadingIcon();
				$("#pullUp").show();
				if(data == "" || data == "{}" || data == "[]"){
					if(pageNo == 1){
						$("#thelist").html('<li class="list_2"><div class="list_2_1"><ul><li class="list_2_1_title"> 无 </li></ul></div></li>');
					}
					return;
				}
				var html = render(JSON.parse(data));
				$("#thelist").append(html);
				pageNo++;
				myScroll.refresh();
			})
		}else if(topic == 2){
			//经营异常
			$.post(purl+searchAbnUrl,params, function(data){
				removeLoadingIcon();
				$("#pullUp").show();
				if(data == "" || data == "{}" || data == "[]"){
					$("#thelist").html('<li class="list_2"><div class="list_2_1"><ul><li class="list_2_1_title"> 无 </li></ul></div></li>');
					return;
				}
				var html = render(JSON.parse(data));
				$("#thelist").append(html);
				pageNo++;
				myScroll.refresh();
			})
		}else if(topic == 3){
			//违法失信
			$.post(purl+searchBrLawUrl,params, function(data){
				removeLoadingIcon();
				$("#pullUp").show();
				if(data == "" || data == "{}" || data == "[]"){
					$("#thelist").html('<li class="list_2"><div class="list_2_1"><ul><li class="list_2_1_title"> 无 </li></ul></div></li>');
					return;
				}
				var html = render(JSON.parse(data));
				$("#thelist").append(html);
				pageNo++;
				myScroll.refresh();
			})
		}
		
		
}

function search(){
	//初始化pageNo
	pageNo=1;
	searchWord = $(".searchtext").val();
	if(searchWord == null || $.trim(searchWord) == "请输入要查询的内容" || $.trim(searchWord) == ""){
		return false;
	}
	sessionStorage.setItem("searchWord", searchWord);
	//记录搜索历史
	saveSearchHis(searchWord);
	//搜索完成后重新生成搜索历史列表
	genHisList();
	
	$(".search_content02").hide();
	$("#thelist").html("");
	loadData();
}


	//记录搜索历史
	function saveSearchHis(keyword){
		keyword = $.trim(keyword);
		if(keyword == null || $.trim(keyword) == "请输入要查询的内容" || $.trim(keyword) == ""){
			return false;
		}
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
		$(".search_content02 ul").html('');
		if(keywords == null || keywords == undefined || keywords.length < 1){
			$(".search_content02").hide();
		}else{
			keywords = keywords.split(",");
			var html = '';
			for(var i = 0; i < keywords.length; i++){
				html += '<li><i class="fa fa-search"></i>' + keywords[i] + '</li>';
			}
			$(".search_content02 ul").html(html);
			
			//绑定搜索列表中每一项的点击事件
			$(".search_content02 li").off("click");
			$(".search_content02 li").on("click", function(){
				var search_content=$(this).text();
				$(".list_1_1").find("input").val(search_content);
				$(".search_content02").hide();
				$(".search_content02").removeClass("search_content02dh");
				search();
			});
			$(".search_content02").show();
		}
	}
	
	//清空搜索框
	function clearInput(){
		var searchtext=$(".searchtext").val();
		$(".searchtext").css("color","#333");
		if(searchtext=="请输入要查询的内容"){
			$(".searchtext").val("");
		}
	        	
		$(".search_content02").show();
		$(".search_content02").addClass("ssearch_content02dh");
		$(".footer").hide();
	}


//在目标容器中添加加载中图标
function showLoadingIcon(){
	var loadingIcon ='<div class="loader">'
						+'<div class="loader-inner line-spin-fade-loader">'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'<div></div>'
						  +'</div>'
					      +'</div>';
	$('body').append(loadingIcon);
}
//隐藏加载中图标
function removeLoadingIcon(){
	$("body div.loader").remove();
}
