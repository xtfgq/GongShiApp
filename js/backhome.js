/*
jQuery返回顶部
使用方法：initTopHoverTree("tophovertree",500,30,20); }
tophovertree是返回顶部按钮的ID，500是返回顶部时间（毫秒）,30是距离右边距离，20是距离底部距离
by 何问起
hovertree.com
*/

function initTopHoverTree(hvtid, times, right, bottom) {

    $("#" + hvtid).css("right", right).css("bottmo", bottom);
    $("#" + hvtid).on("click", function () { goTopHovetree(times); })

    $(".xq_box").scroll(function () {
        if ($(".xq_box").scrollTop() > 268) {
            $("#" + hvtid).fadeIn(100);
        }
        else {
            $("#" + hvtid).fadeOut(100);
        }
    });
}

//返回顶部动画
//goTop(500);//500ms内滚回顶部
function goTopHovetree(times) {
    if (!!!times) {
        $('.xq_box').scrollTop(0);
        return;
    }

    var sh = $('.xq_box').scrollTop();//移动总距离
    var inter = 13.333;//ms,每次移动间隔时间
    var forCount = Math.ceil(times / inter);//移动次数
    var stepL = Math.ceil(sh / forCount);//移动步长
    var timeId = null;
    function aniHovertree() {
        !!timeId && clearTimeout(timeId);
        timeId = null;
        //console.log($('body').scrollTop());
        if ($('.xq_box').scrollTop() <= 0 || forCount <= 0) {//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
            $('.xq_box').scrollTop(0);
            return;
        }
        forCount--;
        sh -= stepL;
        $('.xq_box').scrollTop(sh);
        timeId = setTimeout(function () { aniHovertree(); }, inter);
    }
    aniHovertree();
}