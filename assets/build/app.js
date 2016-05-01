
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
    }
    
    function browserIsMobile () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);    
    };

});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgbmF2SGVpZ2h0ID0gODA7XG4gICAgdmFyIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICBpZiAoYnJvd3NlcklzTW9iaWxlKCkpIHtcbiAgICAgICAgJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKHsnYmFja2dyb3VuZC1hdHRhY2htZW50JzogJ3Njcm9sbCcsICdoZWlnaHQnOiAnYXV0byd9KTtcbiAgICAgICAgJCgnLmhlYWRlci1pbmZvJykuYWRkQ2xhc3MoJ2lzLW1vYmlsZScpO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSAkKCcjY29udGFjdCcpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnR9LCA1MDApO1xuICAgIH0pO1xuICAgIFxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wUG9pbnQgPSBwYXJzZUludCgkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKSkgLSBuYXZIZWlnaHQ7XG4gICAgfSk7XG4gIFxuICAgIGlmICghYnJvd3NlcklzTW9iaWxlKCkpIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHRQcm9wZXJ0eSA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkgPyAnYXV0bycgOiAnMTAwJSc7XG4gICAgICAgICAgICB2YXIgYWZmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGN1clBvaW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGlmIChjdXJQb2ludCA+IHN0b3BQb2ludCAmJiAhYWZmaXhlZCkge1xuICAgICAgICAgICAgICAgICQoJy5tYWluLWNvbnRlbnQnKS5jc3MoeydoZWlnaHQnOiB3aW5kb3dIZWlnaHQgLSBuYXZIZWlnaHQsICdvdmVyZmxvdy15JzogJ3Njcm9sbCd9KVxuICAgICAgICAgICAgICAgIHZhciBhZmZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyUG9pbnQgPCBzdG9wUG9pbnQgLSAxNSkge1xuICAgICAgICAgICAgICAgICQoJy5tYWluLWNvbnRlbnQnKS5jc3MoeydoZWlnaHQnOiBoZWlnaHRQcm9wZXJ0eSwgJ292ZXJmbG93LXknOiAnaW5pdGlhbCd9KSAgICBcbiAgICAgICAgICAgICAgICBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGJyb3dzZXJJc01vYmlsZSAoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7ICAgIFxuICAgIH07XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
