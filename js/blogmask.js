(function() {
    $('.section1').on('mouseenter mouseleave', function() {
        $('.section1 .sec1-mask').stop().fadeToggle();
        $('.section1 .sec-icon').stop().fadeToggle();
        $('.section1 .sec-time').stop().fadeToggle();
    });
})();