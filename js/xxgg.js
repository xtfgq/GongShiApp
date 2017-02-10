
//初始化
var nodenum = "";
var noticeType = '11';
var pageNum = 1;
var pageSize = 10;

//动态加载第一类数据
var str = "";
//str+='<script type='+'"text/html"'+'id='+'"bullentInfo"'+'>';
//str+='{{each}}';
str+='<li class='+'"xxgg_1"'+'>';
//str+='<a href='+'"xxgg_xl.html"'+'>';
str+='<a onclick='+'"showAll()"'+'>';
//str+='<a>';
str+='<div class='+'"xxgg_1_1"'+'>{{NOTICETITLE}}</div>';
//str+='<div onclick='+'"showAll()"'+' class='+'"xxgg_1_1"'+'>{{NOTICETITLE}}</div>';
str+='<ul>';
str+='<li>{{JUDAUTH_CN}}</li>';
str+='<li class='+'"xxgg_1_2"'+'>{{NOTICEDATE}}</li>';
str+='</ul>';
str+='<div class='+'"dw"'+'></div>';
str+='</a>';
str+='<div class='+'"dw"'+'></div>';
str+='</li>';
//str+='</each></script>';

//动态加载第二类数据(司法股权冻结)
var str2 = "";
//str2+='<script type='+'"text/html"'+'id='+'"bullentInfo"'+'>';
//str2+='{{each}}';
str2+='<li class='+'"xxgg_1"'+'>';
//str2+='<a href='+'"xxgg_xl.html"'+'>';
str2+='<a onclick='+'"showAll()"'+'>';
str2+='<div class='+'"xxgg_1_1"'+'>{{TITLE}}</div>';
//str2+='<div onclick='+'"showAll()"'+' class='+'"xxgg_1_1"'+'>{{TITLE}}</div>';
str2+='<ul>';
str2+='<li>{{FROAUTH}}</li>';
str2+='<li class='+'"xxgg_1_2"'+'>{{PUBLICDATE}}</li>';
str2+='</ul>';
str2+='<div class='+'"dw"'+'></div>';
str2+='</a>';
str2+='<div class='+'"dw"'+'></div>';
str2+='</li>';
//str+='</each></script>';

//动态加载第二类数据(司法变更)
var str2_1 = "";
//str2+='<script type='+'"text/html"'+'id='+'"bullentInfo"'+'>';
//str2+='{{each}}';
str2_1+='<li class='+'"xxgg_1"'+'>';
//str2+='<a href='+'"xxgg_xl.html"'+'>';
str2_1+='<a onclick='+'"showAll()"'+'>';
str2_1+='<div class='+'"xxgg_1_1"'+'>{{TITLE}}</div>';
//str2_1+='<div onclick='+'"showAll()"'+' class='+'"xxgg_1_1"'+'>{{TITLE}}</div>';
str2_1+='<ul>';
str2_1+='<li>{{FROAUTH}}</li>';
str2_1+='<li class='+'"xxgg_1_2"'+'>{{EXECUTEDATE}}</li>';
str2_1+='</ul>';
str2_1+='<div class='+'"dw"'+'></div>';
str2_1+='</a>';
str2_1+='<div class='+'"dw"'+'></div>';
str2_1+='</li>';
//str+='</each></script>';


//动态加载第三类数据(其他公告)
var str3 = "";
str3+='<li class='+'"xxgg_1"'+'>';
//str3+='<a href='+'"xxgg_xl.html"'+'>';
str3+='<a onclick='+'"showAll()"'+'>';
str3+='<div class='+'"xxgg_1_1"'+'>{{ANNOUNCETITLE}}</div>';
//str3+='<div onclick='+'"showAll()"'+' class='+'"xxgg_1_1"'+'>{{ANNOUNCETITLE}}</div>';
str3+='<ul>';
str3+='<li>{{PUBLISHER}}</li>';
str3+='<li class='+'"xxgg_1_2"'+'>{{ANNOUNCEDATE}}</li>';
str3+='</ul>';
str3+='<div class='+'"dw"'+'></div>';
str3+='</a>';
str3+='<div class='+'"dw"'+'></div>';
str3+='</li>';

////动态加载第四类数据(行政处罚公告)
var str4 = "";
str4+='<li class='+'"xxgg_1"'+'>';
//str4+='<a href='+'"xxgg_xl.html"'+'>';
str4+='<a onclick='+'"showAll()"'+'>';
str4+='<div class='+'"xxgg_1_1"'+'>{{PENDECNO}}</div>';
//str4+='<div onclick='+'"showAll()"'+' class='+'"xxgg_1_1"'+'>{{PENDECNO}}</div>';
str4+='<ul>';
str4+='<li>{{PENAUTH_CN}}</li>';
str4+='<li class='+'"xxgg_1_2"'+'>{{PUBLICDATE}}</li>';
str4+='</ul>';
str4+='<div class='+'"dw"'+'></div>';
str4+='</a>';
str4+='<div class='+'"dw"'+'></div>';
str4+='</li>';

function showAll() {

    var evt = event || window.event;
    evt.stopPropagation();
    for(var i=0;i<bullentArr.length;i++) {
		if((i==$(evt.target).parent().index() && $(evt.target).parent().hasClass('xxgg_1')) || (evt.target.nodeName=='DIV' && $(evt.target).hasClass('xxgg_1_1') && i==$(evt.target).parent().parent().index()) ) {
//			console.log(i);
			var title = $('.menu_active').parent().siblings('h3').html();
//			console.log(title);
			//将此数据展示到详情界面
			localStorage.setItem('bullentMore',JSON.stringify(bullentArr[i]));			
//			console.log(bullentArr[i]);
			if($('#bullentTitle').html().substr(0,4) == '司法股权') {
				window.location = 'xxgg_xl_gq.html?title='+title; 
			}else if($('#bullentTitle').html().substr(0,4) == '司法股东') {
				window.location = 'xxgg_xl_gd.html?title='+title;
			}else if($('#bullentTitle').html() == '抽查公告') {
				localStorage.setItem('bullentIndex',bullentArr[i].NOTICEID);
//				window.location = 'xxgg_xl_ch.html';
				window.location = 'xxgg_ccjc_xl.html?title='+title;
			}else if($('#bullentTitle').html() == '行政处罚公告') {
//				console.log(bullentArr[i]);
				//判断是中央还是地方数据
				if(bullentArr[i].TYPE == '0') {
					localStorage.setItem('bullentCase',bullentArr[i].CASEID);
					window.location = 'xxgg_xl_xzcf_df.html?title='+title;
				}else{
					localStorage.setItem('bullentCase',bullentArr[i].CASEID);
					window.location = 'xxgg_xl_xzcf_zy.html?title='+title;
				}
				
			}
			else{
				window.location = 'xxgg_xl.html?title='+title; 
			}
			
		}
		
	}

}

var params={
	"mobileAction":'noticeInfo',
	"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?"":$('.searchtext').val(),
	"nodenum":nodenum,
	"noticeType":noticeType,
	"pageNum":pageNum,
	"pageSize":pageSize,
	"userID": "id001",
	"userIP": "192.123.123.13"
}

//请求接口
//document.getElementById('thelist').innerHTML="";
//searchNotiAbnInfo(params,'thelist',str);
getUrl(params);

//监听左侧侧滑栏的变化
document.querySelector('.menu').addEventListener('click', function(eve) {
	//点击正常a标签
	if (eve.target.nodeName === 'A') { 
		noticeType = $(eve.target).parent().attr('type')
		$('#bullentTitle').html($(eve.target).parent().attr('def'));
		
		//其他公告和处罚公告移除样式
		$('.menu-section-title').removeClass('menu_active');
		$('.menu-section-title').css('color','#43464f');
		
		//往后台传的参数发生变化		
		params = {
			"mobileAction":'noticeInfo',
			"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?"":$('.searchtext').val(),
			"nodenum":nodenum,
			"noticeType":noticeType,
			"pageNum":pageNum,
			"pageSize":pageSize,
			"userID": "id001",
			"userIP": "192.123.123.13"
		}
			//请求接口
			getUrl(params);
	}
	
	//点击其他公告(li)；
	if(eve.target.nodeName == 'H3' && ($(eve.target).html() == '其他公告' || $(eve.target).html() == '行政处罚公告')) {
		slideout.close();
		
		//修改其他公告的样式
		$(eve.target).css('color','#ac812e');
//		$(eve.target).css('background-color','#ddd');
		$(eve.target).addClass('menu_active');
		$('.menu-section-list').find('li').removeClass('menu_active');
		
		noticeType = $(eve.target).attr('type')
		$('#bullentTitle').html($(eve.target).attr('def'));
		//往后台传的参数发生变化		
		params = {
			"mobileAction":'noticeInfo',
			"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?"":$('.searchtext').val(),
			"nodenum":nodenum,
			"noticeType":noticeType,
			"pageNum":pageNum,
			"pageSize":pageSize,
			"userID": "id001",
			"userIP": "192.123.123.13"
		}
			//请求接口
			getUrl(params);
	}
	
	//行政处罚公告与其他传递的参数不一致，单独请求;
	if(eve.target.nodeName == 'H3' &&  $(eve.target).html() == '行政处罚公告') {
		slideout.close();
		
		//修改其他公告的样式
		$(eve.target).css('color','#ac812e');
		$(eve.target).addClass('menu_active');
		$('.menu-section-list').find('li').removeClass('menu_active');
		
		noticeType = $(eve.target).attr('type')
		$('#bullentTitle').html($(eve.target).attr('def'));
		//往后台传的参数发生变化		
		params = {
			"mobileAction":'casepubInfo',
			"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?"":$('.searchtext').val(),
			"nodenum":nodenum,
			"sector":"",
			"noticeType":noticeType,
			"pageNum":pageNum,
			"pageSize":pageSize,
			"userID": "id001",
			"userIP": "192.123.123.13"
		}
			//请求接口
			getUrl(params);
	}
	
});

//监听选择省份的变化
document.querySelector('.xxgg_map').addEventListener('click', function(eve) {
//	console.log($(eve.target).attr('val'));
	if (eve.target.nodeName === 'LI') { 
		
		nodenum = $(eve.target).attr('val');
		params.nodenum = nodenum;
		//往后台传的参数发生变化		
//		params = {
//			"mobileAction":'noticeInfo',
//			"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?" ":$('.searchtext').val(),
//			"nodenum":nodenum,
//			"noticeType":noticeType,
//			"pageNum":pageNum,
//			"pageSize":pageSize,
//			"userID": "id001",
//			"userIP": "192.123.123.13"
//		}		
			//请求接口
//			console.log(params);
			getUrl(params);
		}
});

//点击查询时
$(function(){
	 $("#search").click(function(){		   
		 params = {
			"mobileAction":'noticeInfo',
			"noticeTitle":$('.searchtext').val()=='请输入要查询的内容'?"":$('.searchtext').val(),
			"nodenum":nodenum,
			"noticeType":noticeType,
			"pageNum":pageNum,
			"pageSize":pageSize,
			"userID": "id001",
			"userIP": "192.123.123.13"
		}
			//请求接口
			getUrl(params);
			$('.searchtext').val("");
	 })
})

//请求接口公用方法
function getUrl(params) {
//	console.log(params);
	if(pageNum == 1) {
		if(params.mobileAction == 'noticeInfo') {
			if(params.noticeType == '11') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiAbnInfo(params,'thelist',str,pageNum);
			}else if(params.noticeType == '12') {
				//目前请求noticeType=11的接口
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiAbnInfo(params,'thelist',str,pageNum);
		//		searchNotiAbnRem(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '13') {		
				//目前请求noticeType=11的接口
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiAbnInfo(params,'thelist',str,pageNum);
		//		searchNotiAbnWarn(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '21') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiBrLaw(params,'thelist',str,pageNum);
			}else if(params.noticeType == '22') {
				//目前请求noticeType=21的接口
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiBrLaw(params,'thelist',str,pageNum);
		//		searchNotiBrLawRem(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '31') {
				//抽查公告和抽查公告详情分开
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiSeleFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == '32') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiCheckFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == 'x2') {
				showLoadingIcon();
				searchNotiStoFreFun(params,'thelist',str2,pageNum);
			}else if(params.noticeType == 'x3') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiInvChgFun(params,'thelist',str2_1,pageNum);		
			}else if(params.noticeType == '41') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiSimOutFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == '42') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiNorOutFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == 'x4') {
				document.getElementById('thelist').innerHTML="";
				showLoadingIcon();
				searchNotiOtherFun(params,'thelist',str3,pageNum);
			}
		} else {
			//行政处罚公告		
			document.getElementById('thelist').innerHTML="";
			showLoadingIcon();
			searchNotiPuni(params,'thelist',str4,pageNum);
			
		}
	}else{
		if(params.mobileAction == 'noticeInfo') {
			if(params.noticeType == '11') {
				showLoadingIcon();
				searchNotiAbnInfo(params,'thelist',str,pageNum);
			}else if(params.noticeType == '12') {
				showLoadingIcon();
				//目前请求noticeType=11的接口
				searchNotiAbnInfo(params,'thelist',str,pageNum);
		//		searchNotiAbnRem(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '13') {		
				showLoadingIcon();
				//目前请求noticeType=11的接口
				searchNotiAbnInfo(params,'thelist',str,pageNum);
		//		searchNotiAbnWarn(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '21') {
				showLoadingIcon();
				searchNotiBrLaw(params,'thelist',str,pageNum);
			}else if(params.noticeType == '22') {
				showLoadingIcon();
				//目前请求noticeType=21的接口
				searchNotiBrLaw(params,'thelist',str,pageNum);
		//		searchNotiBrLawRem(params,"bullentInfo",'bullent');
			}else if(params.noticeType == '31') {
				showLoadingIcon();
				//抽查公告和抽查公告详情分开
				searchNotiSeleFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == '32') {
				showLoadingIcon();
				searchNotiCheckFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == 'x2') {
				showLoadingIcon();
				searchNotiStoFreFun(params,'thelist',str2,pageNum);
			}else if(params.noticeType == 'x3') {
				showLoadingIcon();
				searchNotiInvChgFun(params,'thelist',str2_1,pageNum);		
			}else if(params.noticeType == '41') {
				showLoadingIcon();
				searchNotiSimOutFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == '42') {
				showLoadingIcon();
				searchNotiNorOutFun(params,'thelist',str,pageNum);
			}else if(params.noticeType == 'x4') {
				showLoadingIcon();
				searchNotiOtherFun(params,'thelist',str3,pageNum);
			}
		} else {
			//行政处罚公告
			showLoadingIcon();
			searchNotiPuni(params,'thelist',str4,pageNum);
			
		}
	}
	
}



///////////////////////////////////////////////////////////
//处理上拉加载和下拉刷新
// JavaScript Document
 
var myScroll,
 pullDownEl, pullDownOffset,
 pullUpEl, pullUpOffset,
 generatedCount = 0;
 
/**
 * 下拉刷新 （自定义实现此方法）
 * myScroll.refresh();  // 数据加载完成后，调用界面更新方法
 */
function pullDownAction () {
 setTimeout(function () { // <-- Simulate network congestion, remove setTimeout from production!
  var el, li, i;
  el = document.getElementById('thelist');
 
//for (i=0; i<3; i++) {
// li = document.createElement('li');
// li.innerText = '添加三冰 ' + (++generatedCount);
// el.insertBefore(li, el.childNodes[0]);
//}
 
  myScroll.refresh();  //数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
 }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}
 
/**
 * 滚动翻页 （自定义实现此方法）
 * myScroll.refresh();  // 数据加载完成后，调用界面更新方法
 */
function pullUpAction () {
 setTimeout(function () { // <-- Simulate network congestion, remove setTimeout from production!
  var el, li, i;
  el = document.getElementById('thelist');
 
//for (i=0; i<3; i++) {
// li = document.createElement('li');
// li.innerText = '添加三冰 ' + (++generatedCount);
// el.appendChild(li, el.childNodes[0]);
//}

	//上拉加载，请求下一页的消息,并拼接到显示的公告后
	pageNum++;
	params.pageNum = pageNum;
	//请求接口
	getUrl(params);
	$('.searchtext').val("");
 
  myScroll.refresh();  // 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
 }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}
 
/**
 * 初始化iScroll控件
 */
function loaded() {
 pullDownEl = document.getElementById('pullDown');
 pullDownOffset = pullDownEl.offsetHeight;
 pullUpEl = document.getElementById('pullUp'); 
 pullUpOffset = pullUpEl.offsetHeight;
 
 myScroll = new iScroll('wrapper', {
  scrollbarClass: 'myScrollbar', /* 重要样式 */
  useTransition: false, /* 此属性不知用意，本人从true改为false */
  topOffset: pullDownOffset,
  onRefresh: function () {
   if (pullDownEl.className.match('loading')) {
    pullDownEl.className = '';
    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
   } else if (pullUpEl.className.match('loading')) {
    pullUpEl.className = '';
    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
   }
  },
  onScrollMove: function () {
   if (this.y > 5 && !pullDownEl.className.match('flip')) {
    pullDownEl.className = 'flip';
    pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
    this.minScrollY = 0;
   } else if (this.y < 5 && pullDownEl.className.match('flip')) {
    pullDownEl.className = '';
    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
    this.minScrollY = -pullDownOffset;
   } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
    pullUpEl.className = 'flip';
    pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
    this.maxScrollY = this.maxScrollY;
   } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
    pullUpEl.className = '';
    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
    this.maxScrollY = pullUpOffset;
   }
  },
  onScrollEnd: function () {
   if (pullDownEl.className.match('flip')) {
    pullDownEl.className = 'loading';
    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';    
    pullDownAction(); // Execute custom function (ajax call?)
   } else if (pullUpEl.className.match('flip')) {
    pullUpEl.className = 'loading';
    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';    
    pullUpAction(); // Execute custom function (ajax call?)
   }
  }
 });
 
 setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}
 
//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);




