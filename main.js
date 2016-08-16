
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    if (browserIsMobile()) {
        $('.header-wrapper').css({'background-attachment': 'scroll', 'height': 'auto'});
        $('.header-info').addClass('is-mobile');
    }
    $(document).on('click', '.js-info', function () {
        if (window.innerWidth > 835 && window.innerHeight > 500) {
            $('html, body').animate({scrollTop: stopPoint + 10}, 500);
        } else {
            $('html, body').animate({scrollTop: stopPoint + navHeight}, 500);
        }
    });
    
    $(window).resize(function () {
        // stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
        var heightProperty = (window.innerWidth < 800 || innerHeight < 450) ? 'auto' : '100%';
        var windowHeight = $(window).height();
        if (!browserIsMobile() && window.innerWidth > 835 && window.innerHeight > 500) {
            $('.body-wrapper').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'});
        } else {
            $('.body-wrapper').css({'height': heightProperty, 'overflow-y': 'initial'}); 
        }

    });
  $(window).trigger('resize');
    // if (!browserIsMobile()) {
        // $(window).scroll(function() {
            // var heightProperty = (window.innerWidth < 800) ? 'auto' : '100%';
            // var affixed = false;
            // var curPoint = $(window).scrollTop();
            // var windowHeight = $(window).height();
            // // if (curPoint > stopPoint && !affixed && window.innerWidth > 835 && window.innerHeight > 500) {
            //     $('.body-wrapper').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'})
            //     var affixed = true;
            // } else if (curPoint < stopPoint - 15) {
            //     $('.body-wrapper').css({'height': heightProperty, 'overflow-y': 'initial'})    
            //     affixed = false;
            // }        
        // });
    // }
    
    function browserIsMobile () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);    
    };

});
