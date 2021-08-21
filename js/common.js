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
            left: 990
        }, 350, function() {
            $(this).children('i').html('×');
        });
        $('.mask').stop().fadeIn();
        $('.loading').hide();
    }

    function disappear() {
        $('.relate').animate({
            left: 1550
        }, 350, function() {
            $(this).children('i').html('-')
        });
        $('.mask').stop().fadeOut();
    }

    $('.relate-nav .socialist').on('click', function() {
        $('.relate-socialist').stop().slideToggle();
    });
})();