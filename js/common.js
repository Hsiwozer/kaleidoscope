// relate模块
(function() {
    $('.setting').on('click', 'img', function() {
        appear();
    });
    $('.relate').on('click', 'i', function() {
        disappear();
    });
    $('.mask').on('click', function() {
        disappear();
    });

    function appear() {
        $('.relate').animate({
            right: 0
        }, 350, function() {
            $(this).children('i').html('×');
        });
        $('.mask').stop().fadeIn();
        $('.loading').hide();
    }

    function disappear() {
        $('.relate').animate({
            right: -672
        }, 350, function() {
            $(this).children('i').html('-')
        });
        $('.mask').stop().fadeOut();
    }

    $('.relate-nav .socialist').on('click', function() {
        $('.relate-socialist').stop().slideToggle();
    });
})();