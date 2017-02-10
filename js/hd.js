// JavaScript Document

//-------
$(document).ready(function(){
	//动态获取li总宽度后用jq重置ul宽度
	//top
	var top_size = $("#top-scroll ul li").outerWidth(true);//获取元素整个占位宽度包含padding、margin和border
	var top_li_num = $("#top-scroll ul li").size();//获取li的数量
	var top_ul_width = top_size * top_li_num;//ul的宽度=li数量*单个li宽度
	$("#top-scroll ul").css({'width':top_ul_width});
	var topScroll;
	topScroll = new IScroll('#top-scroll',{ 
		scrollX: true,//横向滚动
		scrollbars: false,//是否显示滚动条
		//click:true
	},100);
	//left
	var left_size = $("#left-scroll ul li").outerHeight(true);//获取元素整个占位宽度包含padding、margin和border
	var left_li_num = $("#left-scroll ul li").size();//获取li的数量
	var left_ul_height = left_size * left_li_num;//ul的宽度=li数量*单个li宽度
	$("#left-scroll ul").css({'height':left_ul_height});

	var leftScroll;
	leftScroll = new IScroll('#left-scroll',{ 
		scrollY: true,//横向滚动
		scrollbars: false,//是否显示滚动条
		//click:true
	},100);
	//right
	var right_size = $("#right-scroll ul li").outerHeight(true);//获取元素整个占位宽度包含padding、margin和border
	var right_li_num = $("#right-scroll ul li").size();//获取li的数量
	var right_ul_height = right_size * right_li_num;//ul的宽度=li数量*单个li宽度
	$("#right-scroll ul").css({'height':right_ul_height});

	var rightScroll;
	rightScroll = new IScroll('#right-scroll',{ 
		scrollY: true,//横向滚动
		scrollbars: false,//是否显示滚动条
		//click:true
	},100);
	//-----
	
})
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);