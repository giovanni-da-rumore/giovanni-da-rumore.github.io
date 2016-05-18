
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
        stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    });
  
    if (!browserIsMobile()) {
        $(window).scroll(function() {
            var heightProperty = (window.innerWidth < 800) ? 'auto' : '100%';
            var affixed = false;
            var curPoint = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (curPoint > stopPoint && !affixed && window.innerWidth > 835 && window.innerHeight > 500) {
                $('.body-wrapper').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'})
                var affixed = true;
            } else if (curPoint < stopPoint - 15) {
                $('.body-wrapper').css({'height': heightProperty, 'overflow-y': 'initial'})    
                affixed = false;
            }        
        });
    }
    
    function browserIsMobile () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);    
    };

});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgbmF2SGVpZ2h0ID0gODA7XG4gICAgdmFyIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICBpZiAoYnJvd3NlcklzTW9iaWxlKCkpIHtcbiAgICAgICAgJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKHsnYmFja2dyb3VuZC1hdHRhY2htZW50JzogJ3Njcm9sbCcsICdoZWlnaHQnOiAnYXV0byd9KTtcbiAgICAgICAgJCgnLmhlYWRlci1pbmZvJykuYWRkQ2xhc3MoJ2lzLW1vYmlsZScpO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgzNSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPiA1MDApIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHN0b3BQb2ludCArIDEwfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHN0b3BQb2ludCArIG5hdkhlaWdodH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcFBvaW50ID0gcGFyc2VJbnQoJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKCdoZWlnaHQnKS5zbGljZSgwLCAtMikpIC0gbmF2SGVpZ2h0O1xuICAgIH0pO1xuICBcbiAgICBpZiAoIWJyb3dzZXJJc01vYmlsZSgpKSB7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0UHJvcGVydHkgPSAod2luZG93LmlubmVyV2lkdGggPCA4MDApID8gJ2F1dG8nIDogJzEwMCUnO1xuICAgICAgICAgICAgdmFyIGFmZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBjdXJQb2ludCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBpZiAoY3VyUG9pbnQgPiBzdG9wUG9pbnQgJiYgIWFmZml4ZWQgJiYgd2luZG93LmlubmVyV2lkdGggPiA4MzUgJiYgd2luZG93LmlubmVySGVpZ2h0ID4gNTAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJvZHktd3JhcHBlcicpLmNzcyh7J2hlaWdodCc6IHdpbmRvd0hlaWdodCAtIG5hdkhlaWdodCwgJ292ZXJmbG93LXknOiAnc2Nyb2xsJ30pXG4gICAgICAgICAgICAgICAgdmFyIGFmZml4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJQb2ludCA8IHN0b3BQb2ludCAtIDE1KSB7XG4gICAgICAgICAgICAgICAgJCgnLmJvZHktd3JhcHBlcicpLmNzcyh7J2hlaWdodCc6IGhlaWdodFByb3BlcnR5LCAnb3ZlcmZsb3cteSc6ICdpbml0aWFsJ30pICAgIFxuICAgICAgICAgICAgICAgIGFmZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYnJvd3NlcklzTW9iaWxlICgpIHtcbiAgICAgICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgICAgXG4gICAgfTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
