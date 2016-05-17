
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    if (browserIsMobile()) {
        $('.header-wrapper').css({'background-attachment': 'scroll', 'height': 'auto'});
        $('.header-info').addClass('is-mobile');
    }
    $(document).on('click', '.js-info', function () {
        var pos = $('#contact').position().top;
        $('html, body').animate({scrollTop: stopPoint}, 500);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgbmF2SGVpZ2h0ID0gODA7XG4gICAgdmFyIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICBpZiAoYnJvd3NlcklzTW9iaWxlKCkpIHtcbiAgICAgICAgJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKHsnYmFja2dyb3VuZC1hdHRhY2htZW50JzogJ3Njcm9sbCcsICdoZWlnaHQnOiAnYXV0byd9KTtcbiAgICAgICAgJCgnLmhlYWRlci1pbmZvJykuYWRkQ2xhc3MoJ2lzLW1vYmlsZScpO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSAkKCcjY29udGFjdCcpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnR9LCA1MDApO1xuICAgIH0pO1xuICAgIFxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wUG9pbnQgPSBwYXJzZUludCgkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKSkgLSBuYXZIZWlnaHQ7XG4gICAgfSk7XG4gIFxuICAgIGlmICghYnJvd3NlcklzTW9iaWxlKCkpIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHRQcm9wZXJ0eSA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCkgPyAnYXV0bycgOiAnMTAwJSc7XG4gICAgICAgICAgICB2YXIgYWZmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGN1clBvaW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGlmIChjdXJQb2ludCA+IHN0b3BQb2ludCAmJiAhYWZmaXhlZCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDgzNSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPiA1MDApIHtcbiAgICAgICAgICAgICAgICAkKCcuYm9keS13cmFwcGVyJykuY3NzKHsnaGVpZ2h0Jzogd2luZG93SGVpZ2h0IC0gbmF2SGVpZ2h0LCAnb3ZlcmZsb3cteSc6ICdzY3JvbGwnfSlcbiAgICAgICAgICAgICAgICB2YXIgYWZmaXhlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1clBvaW50IDwgc3RvcFBvaW50IC0gMTUpIHtcbiAgICAgICAgICAgICAgICAkKCcuYm9keS13cmFwcGVyJykuY3NzKHsnaGVpZ2h0JzogaGVpZ2h0UHJvcGVydHksICdvdmVyZmxvdy15JzogJ2luaXRpYWwnfSkgICAgXG4gICAgICAgICAgICAgICAgYWZmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBicm93c2VySXNNb2JpbGUgKCkge1xuICAgICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAgICBcbiAgICB9O1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
