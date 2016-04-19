
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    $(document).on('click', '.js-info', function () {
        var pos = $('#contact').position().top;
        $('html, body').animate({scrollTop: stopPoint}, 500);
    })
  
    $(window).scroll(function() {
        if (window.innerWidth < 500) {
            return;
        }
        var affixed = false;
        var curPoint = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (curPoint > stopPoint && !affixed) {
            $('.main-content').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'})
            var affixed = true;
        } else if (curPoint < stopPoint - 15) {
            $('.main-content').css({'height': '100%', 'overflow-y': 'initial'})    
            affixed = false;
        }
    });
    
});
