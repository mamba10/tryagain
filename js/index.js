/**
 * Created by hrh on 2016/11/2.
 */
$(function() {

    var w = $(window).width();
    var h = $(window).height();
    $('.main-bg').height(h);

    $('.main').css({
        'width': w + 'px',
        'height': h + 'px'
    });

    $('.main-db button').click(function(){
    	window.location.href="lucky.html";
    });

});
