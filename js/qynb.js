// JavaScript Document
$(function(){
	$(".xq_box").height($(window).height()-$(".xq_top").height());
	$(".xq_jcxx_13").toggle(function(){
	$(".xq_box").animate({scrollTop:$(this)[0].offsetTop},1000);
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-down")
	},function(){
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-up")	
	})
   $(".xq_jcxx_2").toggle(function(){
    var t=$(this).prop("offsetTop");
	$(".xq_box").animate({scrollTop:t},1000);
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-up")
	},function(){
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-down")	
	})	
	
})