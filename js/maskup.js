// 遮罩mask上拉
(function() {
    $('.mask').css({
        display: 'block',
        opacity: 0.7
    });
    var timer = setTimeout(function() {
        $('.mask').stop().slideUp();
        $('.loading').hide();
    }, 1000);
})();