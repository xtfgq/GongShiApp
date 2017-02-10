// JavaScript Document

$(function(){
	$(".xq_box").height($(window).height()-$(".xq_top").height());
	$(".searchtext").on('focus',function(){
				var searchtext=$(".searchtext").val();
				$(".searchtext").css("color","#333");
				if(searchtext=="请输入要查询的内容"){
				    $(this).val("");
					$(".searchX").hide();	
					}else{
				        $(".searchX").show();	
						}
	        	//$(".box").addClass("box01");
		        //$(".box").animate({top:"-60px"},500);
		         //window.location.href='search_list.html';
				 $(".search_content").show();
				 $(".search_content").addClass("search_contentdh");
				 $(".search_content02").show();
				 $(".search_content02").addClass("ssearch_content02dh");
				 $(".footer").hide();	
				})
			$(".searchtext").on('blur', function(){
				var searchtext=$(".searchtext").val();
				//$(".searchX").hide();	
				if(searchtext==""){
			    	$(this).val("请输入要查询的内容");	
					$(".searchtext").css("color","#999");
					$(".searchX").hide();
					}else{
						$(".searchX").click(function(){
							$(".searchtext").val("");
							$(".searchX").hide();	
							$(".searchtext").val("请输入要查询的内容");
							$(".searchtext").css("color","#999");	
				        })
					}
				    //$(".box").removeClass("box01");
		            //$(".box").animate({top:"0"},1500);
					//$(".search_content").hide();
					//$(".search_content").removeClass("search_contentdh");
					 $(".footer").show();	
				})
				
// 首页任务栏图标
   
    $(".content_3_1").click(function(){
		var content_3_1=$(this).children("div").attr("class");
		$(".content_3_1").children("div").removeAttr("id");
		var content_3_1_=content_3_1+"_"
		$(this).children("div").attr("id",content_3_1_);
		$(".content_3_1").next().removeClass("content_3_1_span");
		$(this).next().addClass("content_3_1_span");
		})
		
	$(".footer_1 li").click(function(){
		var footer_1=$(this).children("div").attr("class");
		$(".footer_1 li").children("div").removeAttr("id");
		var footer_1_=footer_1+"_"
		$(this).children("div").attr("id",footer_1_);
		})	
		
// 详情页-拖动导航
$(".xq_jcxx_13").toggle(function(){
	$(".xq_box").animate({scrollTop:$(this)[0].offsetTop},1000);
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-down")
	},function(){
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-up")	
	})

$(".xq_jcxx_2").toggle(function(){
var t=$(this).prop("offsetTop")+$(".xq_jcxx_1").height()+$(".index_line_1").height()+$(".index_line_1").height()+$("#carousel").height()-230;
	$(".xq_box").animate({scrollTop:t},1000);
	//如果点击的块还没有加载数据，调用clickLoadData函数，加载数据
	var isLoadData = $(this).attr("isLoadData");
	if(isLoadData != "1" && typeof clickLoadData =="function"){
		clickLoadData($(this));
	}
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-up")
	},function(){
	$(this).next().slideToggle();
	$(this).find("i").attr("class","fa fa-angle-down")	
	})	

$(window).resize(function(){
   $(".xq_box").height($(window).height()-$(".xq_top").height());

  })
$(".xxgg_map li").click(function(){
  	$(".xxgg_map li").removeClass("map_active");
	$(this).addClass("map_active");
	$(".xxgg_map").slideUp();
})

$(".xxgg_sx i").click(function(){
  $(".xxgg_map").slideToggle();
});

$(".right_btn").click(function(eve){		   
    $(".xxgg_map").slideUp();
	//alert("dd")
})
	var windowHeight=$(window).height();
	var autoHeight=$(".right_btn").height();
	if(autoHeight>windowHeight){
		$(".right_btn").height("auto")
	}else{
		
		$(".right_btn").height(windowHeight);
	}
	
	//透明度按钮
	touming();
		$(".btn-hamburger").hover(function(){//鼠标悬浮效果
			window.clearInterval(timeId);//停止定时器	
			$(".btn-hamburger").css("opacity",1);//不透明
		},function(){//鼠标悬浮离开，渐变透明
			//初始化参数
			opacity=1.0;
			time=1;
			touming();
		});
		
		$(".menu-section-list li").click(function(){
			$(".menu-section-list li").removeClass("menu_active");
			$(this).addClass("menu_active");
		})
		
		$(".search_content").height(windowHeight-290);
		$(".search_content02").height(windowHeight-44);
		$(".search_content li").click(function(){
			//alert("ddd")
			var search_content=$(this).text();
			//alert(search_content)
			$(".content_2").find("input").val(search_content);
			$(".search_content").hide();
			$(".search_content").removeClass("search_contentdh");
			})
         $(".search_content02 li").click(function(){
			//alert("ddd")
			var search_content=$(this).text();
			//alert(search_content)
			$(".list_1_1").find("input").val(search_content);
			$(".search_content02").hide();
			$(".search_content02").removeClass("search_content02dh");
			})
			
       $(".help_btn").click(function(){
		if($(this).next(".help_box").hasClass("hlep_box_show")){
						$(this).next(".help_box").removeClass("hlep_box_show");
						return false;
					}else{
						$(".help_box").removeClass("hlep_box_show");
						$(this).next(".help_box").addClass("hlep_box_show");
						return false;
					}
		
		})	
	
	    $(".help_box").click(function(e){
						var ev = e || window.event;
							if(ev.stopPropagation){
									ev.stopPropagation();
							 }
							else if(window.event){
									window.event.cancelBubble = true;//兼容IE
							}
					})
					
	       $(".top").click(function(){
			   $(".help_box").removeClass("hlep_box_show");
			   })
	
	      $(".content_box").click(function(){
			   $(".help_box").removeClass("hlep_box_show");
			   })
		  
		 $(".close_search").click(function(){
			 $(".search_content").hide();
			 $(".search_content").removeClass("search_contentdh");
			 $(".search_content02").hide();
			 $(".search_content02").removeClass("search_contentdh");
		 })
		 /**
		  * 判断弹出提示公告，如果缓存里没有或缓存里的时间和当前时间不等，就弹出提示公告
		  */
		 var gg_date = localStorage.getItem("gg_date");
		 var cur_date = new Date().formatDateToStr("yyyy-MM-dd");
		 if(gg_date == null || cur_date != gg_date){
		 	$(".index_gg_load").load("http://yd.gsxt.gov.cn/index_gg.html");
		 	localStorage.setItem("gg_date",cur_date);
		 }
	  /* $(".follow_1").click(function(){
		   var
		   $(this).find(".fa-heart-o").animate({top:"-12px"},500);
		   $(this).find(".fa-heart").animate({top:"6px"},500);
	   })*/
	   $(".follow_1").click(function(){
		if($(this).hasClass("follow_1_hover")){
					    $(this).find(".fa-heart-o").animate({top:"6px"},500);
		                $(this).find(".fa-heart").animate({top:"24px"},500);	
			            $(this).removeClass("follow_1_hover");
			            $(this).find("span").text("未关注");
						return false;
					}else{
						$(this).find(".fa-heart-o").animate({top:"-12px"},500);
		                $(this).find(".fa-heart").animate({top:"6px"},500);
					    $(this).addClass("follow_1_hover");
						$(this).find("span").text("已关注");
						return false;
					}
		
		})
		
		//触摸事件隐藏返回按钮
		$(document).on('touchstart',function(e) {
			//event.preventDefault();
			$(".backhome").hide();
		});
		
		$(document).on('touchmove',function(e) {
			//event.preventDefault();
			$(".backhome").hide();
		});
		 
		$(document).on('touchend',function(e) {
			//event.preventDefault();
			$(".backhome").show();
		});

}) 

//透明度
		var opacity=1.0;
		//定时秒数
		var time=1;
		//定时器id
		var timeId;
		function touming(){
			timeId=window.setInterval(function(){
				//透明度-0.1
				opacity=opacity-0.1;
				//设置div透明度
				$(".btn-hamburger").css("opacity",opacity);
				//如果已经变半透明停止定时器
				if(time==5){
				  window.clearInterval(timeId);	
				}
				time++;
			},1000);
		}

// 键盘换行
/*$(document).keydown(function (event) {
            //alert(event.keyCode);
            //判断当event.keyCode 为37时（即左方面键），执行函数to_left();
            //判断当event.keyCode 为39时（即右方面键），执行函数to_right();
            if (event.keyCode == 13) {
                //alert('回车键');
				window.location.href='search_list.html';
            }
  });*/
  
  
//状态栏  
  document.addEventListener('plusready',function(){
			plus.navigator.setStatusBarBackground("#ac812e");
			plus.navigator.setStatusBarStyle( "UIStatusBarStyleBlackOpaque" );
		},false);
		

//加载后弹窗
	
	function tanchuang(x,y){
		if(y>=1){
			$(x).html(y+"跳过");
			y--;
			setTimeout(function(){tanchuang(x,y)},1000);
			//alert(y)
			}else{
			$(x).html("跳过");
			$(".login_bg").hide();
	        $(".box").removeClass(".boxdw");
				}
		}