
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgbmF2SGVpZ2h0ID0gODA7XG4gICAgdmFyIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSAkKCcjY29udGFjdCcpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnR9LCA1MDApO1xuICAgIH0pXG4gIFxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJQb2ludCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgaWYgKGN1clBvaW50ID4gc3RvcFBvaW50ICYmICFhZmZpeGVkKSB7XG4gICAgICAgICAgICAkKCcubWFpbi1jb250ZW50JykuY3NzKHsnaGVpZ2h0Jzogd2luZG93SGVpZ2h0IC0gbmF2SGVpZ2h0LCAnb3ZlcmZsb3cteSc6ICdzY3JvbGwnfSlcbiAgICAgICAgICAgIHZhciBhZmZpeGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb2ludCA8IHN0b3BQb2ludCAtIDE1KSB7XG4gICAgICAgICAgICAkKCcubWFpbi1jb250ZW50JykuY3NzKHsnaGVpZ2h0JzogJzEwMCUnLCAnb3ZlcmZsb3cteSc6ICdpbml0aWFsJ30pICAgIFxuICAgICAgICAgICAgYWZmaXhlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
