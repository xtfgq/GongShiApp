(function($){
//锚点导航
	$.fn.slideGuide = function(options){
		var $this = $(this);
		if($this.length == 0) return false;
		var opts = $.extend({
			guide_items:".svc-guide li",
			guide_itemis:".svc-guide li i",
			content_items:".menu_id",
			fixedClass:"fixed",
			currClass:"curr",
			oldClass:"fa-circle",
			newClass:"fa-circle-thin",
			gotop:".gotop",
			speed:300
		},options);
		
		var gtop = $this.offset().top-120;
		var spos = new Array();
		var lilength=$(opts.content_items).length;
		$(opts.content_items).each(function(i,ele) {
			spos[i]= $(this).offset().top;
		});
		
		$(".hidemore").click(function(){
			$(this).hide();
			$(this).prev().prev("div").hide();
			$(this).prev(".zp_open").show();
			var j=parseInt($(this).attr("name"))+1;
			for(var i=j-1;i<=lilength-1;i++){
				var num=i+1;
				spos[i]= $("#menu_id_"+num).offset().top;
			}
			return false;
		})
		$(".zp_open").click(function(){
			$(this).hide();
			$(this).prev("div").show();
			$(this).next(".hidemore").show();
			var j=parseInt($(this).attr("name"))+1;
			for(var i=j-1;i<=lilength-1;i++){
				var num=i+1;
				spos[i]= $("#menu_id_"+num).offset().top;
			}
			return false;
		})
		
		
		//var docSt = setInterval(function(){
			//if(document.readyState=="complete"){
				//clearInterval(docSt);
				//$(opts.content_items).each(function(i,ele) {
				//	spos[i] = $(this).offset().top-10;
				//});
			//}
		//},10);
		
		$(window).scroll(function(){
			var wtop = $(this).scrollTop();
            var aaatop = document.getElementById("aaa").getBoundingClientRect().top;

			if(wtop>=gtop&&aaatop>530){
				$this.addClass(opts.fixedClass);
				$this.css("top","100px");
			}else if(wtop>=gtop&&aaatop>300&&aaatop<=530){
				    var h=aaatop-400;
					$this.removeClass(opts.fixedClass);
					$this.addClass(opts.fixedClass);
					$this.css("top",h);
			}else{
				$this.removeClass(opts.fixedClass);
			}
			setCurrGuide(wtop);
		});
		
		$(opts.guide_items).click(function(){
			var i = $(this).index();
			//$(window).scrollTop(spos[i-1]);
			if(i==0){
				$("html,body").animate({scrollTop:1200},opts.speed);
			}else{
				$("html,body").animate({scrollTop:spos[i-1]+$("#menu_id_"+i).height()-100},opts.speed);
			}
		});
		
		$(opts.gotop).click(function(){
			$("html,body").animate({scrollTop:0},opts.speed);
		});
		
		var setCurrGuide = function(wtop){
			
			var curr = 0
			for(var i=0;i<=spos.length;i++){
				if(wtop>=spos[i-1]+$("#menu_id_"+i).height()-100){
					curr = i;
				}
				if(wtop<spos[i-1]+$("#menu_id_"+i).height()-100){
					
					break;
				}
				
			}
			$(opts.guide_items).removeClass(opts.currClass).eq(curr).addClass(opts.currClass);
			$(opts.guide_itemis).addClass(opts.oldClass).removeClass(opts.newClass).eq(curr).addClass(opts.newClass).removeClass(opts.oldClass);
		}
	}

})(jQuery);
$(function(){
	$(".svc-guide").slideGuide();
});