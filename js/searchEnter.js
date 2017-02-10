

$(function () {
	$('.searchtext').focus();
    $('.searchtext').bind('keydown', function (e) {
            var key = e.which;
            if (key == 13) {
                e.preventDefault();
                window.location.href='search_list.html'
            }
    });
}) 