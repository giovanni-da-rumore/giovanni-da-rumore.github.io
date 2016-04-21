
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    if (browserIsMobile()) {
        debugger;
        $('.header-wrapper').css({'background-attachment': 'scroll'});
    }
    $(document).on('click', '.js-info', function () {
        var pos = $('#contact').position().top;
        $('html, body').animate({scrollTop: stopPoint}, 500);
    });
    
    $(window).resize(function () {
        stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    });
  
    $(window).scroll(function() {
        if (browserIsMobile()) { return; }
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
    
    function browserIsMobile () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);    
    };

});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5hdkhlaWdodCA9IDgwO1xuICAgIHZhciBzdG9wUG9pbnQgPSBwYXJzZUludCgkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKSkgLSBuYXZIZWlnaHQ7XG4gICAgaWYgKGJyb3dzZXJJc01vYmlsZSgpKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoeydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnOiAnc2Nyb2xsJ30pO1xuICAgIH1cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSAkKCcjY29udGFjdCcpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnR9LCA1MDApO1xuICAgIH0pO1xuICAgIFxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wUG9pbnQgPSBwYXJzZUludCgkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKSkgLSBuYXZIZWlnaHQ7XG4gICAgfSk7XG4gIFxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChicm93c2VySXNNb2JpbGUoKSkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGhlaWdodFByb3BlcnR5ID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSA/ICdhdXRvJyA6ICcxMDAlJztcbiAgICAgICAgdmFyIGFmZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGN1clBvaW50ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBpZiAoY3VyUG9pbnQgPiBzdG9wUG9pbnQgJiYgIWFmZml4ZWQpIHtcbiAgICAgICAgICAgICQoJy5tYWluLWNvbnRlbnQnKS5jc3MoeydoZWlnaHQnOiB3aW5kb3dIZWlnaHQgLSBuYXZIZWlnaHQsICdvdmVyZmxvdy15JzogJ3Njcm9sbCd9KVxuICAgICAgICAgICAgdmFyIGFmZml4ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1clBvaW50IDwgc3RvcFBvaW50IC0gMTUpIHtcbiAgICAgICAgICAgICQoJy5tYWluLWNvbnRlbnQnKS5jc3MoeydoZWlnaHQnOiBoZWlnaHRQcm9wZXJ0eSwgJ292ZXJmbG93LXknOiAnaW5pdGlhbCd9KSAgICBcbiAgICAgICAgICAgIGFmZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGZ1bmN0aW9uIGJyb3dzZXJJc01vYmlsZSAoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7ICAgIFxuICAgIH07XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
