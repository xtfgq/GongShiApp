// JavaScript Document

 window.addEventListener('load',function(){
            var initX;
            var moveX;
            var X = 0;
            var objX = 0;
            window.addEventListener('touchstart',function(event){
//              event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "list-li"){
                    initX = event.targetTouches[0].pageX;
                    objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
                }
                if( objX == 0){
                    window.addEventListener('touchmove',function(event) {
//                      event.preventDefault();
                        var obj = event.target.parentNode;
                        if (obj.className == "list-li") {
                            moveX = event.targetTouches[0].pageX;
                            X = moveX - initX;
                            if (X > 0) {
                                obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                            }
                            else if (X < 0) {
                                var l = Math.abs(X);
                                obj.style.WebkitTransform = "translateX(" + -l + "px)";
                                if(l>80){
                                    l=80;
                                    obj.style.WebkitTransform = "translateX(" + -l + "px)";
                                }
                            }
                        }
                    });
                }
                else if(objX<0){
                    window.addEventListener('touchmove',function(event) {
//                      event.preventDefault();
                        var obj = event.target.parentNode;
                        if (obj.className == "list-li") {
                            moveX = event.targetTouches[0].pageX;
                            X = moveX - initX;
                            if (X > 0) {
                                var r = -80 + Math.abs(X);
                                obj.style.WebkitTransform = "translateX(" + r + "px)";
                                if(r>0){
                                    r=0;
                                    obj.style.WebkitTransform = "translateX(" + r + "px)";
                                }
                            }
                            else {     //向左滑动
                                obj.style.WebkitTransform = "translateX(" + -80 + "px)";
                            }
                        }
                    });
                }

            })
            window.addEventListener('touchend',function(event){
//              event.preventDefault();
                var obj = event.target.parentNode;
                if(obj.className == "list-li"){
                    objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
                    if(objX>-40){
                        obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                    }else{
                        obj.style.WebkitTransform = "translateX(" + -80 + "px)";
                    }
                }
             })

        })
 
var render = template('attentionScript');
loadDataList();
//加载关注列表数据
function loadDataList() {
	var attentions = localStorage.getItem("attentions");
	if(attentions == null || attentions == undefined || attentions == "[]") {
		$("#attentionContainer").html('<li class="list_none">无</li>');
		return;
	} else {
		attentions = JSON.parse(attentions);
	}

	var html = render(attentions);
	$("#attentionContainer").append(html);
}

//根据cat18获取跳转地址
function getUrlByCat18(cat18){
	if (cat18 == 1 || cat18 == 10){
		return "xq_jcxx.html";
	}else if(cat18 == 2 || cat18 == 4 || cat18 == 6 || cat18 == 8 || cat18 == 9 || cat18 == 11 || cat18 == 13 || cat18 == 14){
		return "xq_jcxx_2_4_6_8_9_11_13_14.html";
	}else if(cat18 == 3){
		return "xq_jcxx_3.html";
	}else if(cat18 == 5 || cat18 == 12){
		return "xq_jcxx_5_12.html";
	}else if(cat18 == 7){
		return "xq_jcxx_7.html";
	}else if(cat18 == 15){
		return "xq_jcxx_15.html";
	}else if(cat18 == 16){
		return "xq_jcxx_16.html";
	}else if(cat18 == 17){
		return "xq_jcxx_17.html";
	}else{
		//处理CAT18 ==18的情况
		return "xq_jcxx_18.html";
	}
}

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

//点击关注项，跳转到详情页
function attentionToUrl(pripid,exception,nodenumber,enttype,cat18){
	sessionStorage.setItem("exception", exception);
	sessionStorage.setItem("enttype", enttype);
	sessionStorage.setItem("pripid", pripid);
	sessionStorage.setItem("nodenumber", nodenumber);
	sessionStorage.setItem("cat18", cat18);
	var url = getUrlByCat18(cat18);
	//修改该数据的关注时间
	var attentions = localStorage.getItem("attentions");
	if(attentions != null && attentions != undefined){
		attentions = JSON.parse(attentions);
		for(var i = 0; i < attentions.length; i++){
			if($.trim(attentions[i].pripid) == $.trim(pripid)){
				attentions[i].atteDate = new Date().formatDateToStr("yyyy-MM-dd");
				attentions[i].chgCount = 0;
				localStorage.setItem("attentions",JSON.stringify(attentions));
				break;
			}
		}
	}
	
	window.location = url;
}

//取消关注
function cancelAttention(pripid){
	var attentions = localStorage.getItem("attentions");
	if(attentions == null || attentions == undefined){
		return;
	}else{
		attentions = JSON.parse(attentions);
	}
	for (var i = 0; i < attentions.length; i++) {
		if($.trim(attentions[i].pripid) == $.trim(pripid)){
			attentions.splice(i,1);
			localStorage.setItem("attentions",JSON.stringify(attentions));
			$("#"+pripid).remove();
			if(attentions.length < 1){
				$("#attentionContainer").html('<li class="list_none">无</li>');
			}
			return;
		}
	}
}

