
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    $(document).on('click', '.js-info', function () {
        var pos = $('#contact').position().top;
        $('html, body').animate({scrollTop: stopPoint}, 500);
    });
    
    $(window).resize(function () {
        stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    });
  
    $(window).scroll(function() {
        var heightProperty = (window.innerWidth < 768) ? 'auto' : '100%';
        var affixed = false;
        var curPoint = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (curPoint > stopPoint && !affixed) {
            $('.main-content').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'})
            var affixed = true;
        } else if (curPoint < stopPoint - 15) {
            $('.main-content').css({'height': heightProperty, 'overflow-y': 'initial'})    
            affixed = false;
        }
    });
    
    setTimeout(function () {
        $('.black-screen').addClass('hidden');
    }, 400);
    
});
