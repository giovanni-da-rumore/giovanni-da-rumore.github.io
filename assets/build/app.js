
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    if (browserIsMobile) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIHZhciBuYXZIZWlnaHQgPSA4MDtcbiAgICB2YXIgc3RvcFBvaW50ID0gcGFyc2VJbnQoJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKCdoZWlnaHQnKS5zbGljZSgwLCAtMikpIC0gbmF2SGVpZ2h0O1xuICAgIGlmIChicm93c2VySXNNb2JpbGUpIHtcbiAgICAgICAgJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKHsnYmFja2dyb3VuZC1hdHRhY2htZW50JzogJ3Njcm9sbCd9KTtcbiAgICB9XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1pbmZvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9zID0gJCgnI2NvbnRhY3QnKS5wb3NpdGlvbigpLnRvcDtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc3RvcFBvaW50fSwgNTAwKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcFBvaW50ID0gcGFyc2VJbnQoJCgnLmhlYWRlci13cmFwcGVyJykuY3NzKCdoZWlnaHQnKS5zbGljZSgwLCAtMikpIC0gbmF2SGVpZ2h0O1xuICAgIH0pO1xuICBcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYnJvd3NlcklzTW9iaWxlKCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBoZWlnaHRQcm9wZXJ0eSA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkgPyAnYXV0bycgOiAnMTAwJSc7XG4gICAgICAgIHZhciBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJQb2ludCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgaWYgKGN1clBvaW50ID4gc3RvcFBvaW50ICYmICFhZmZpeGVkKSB7XG4gICAgICAgICAgICAkKCcubWFpbi1jb250ZW50JykuY3NzKHsnaGVpZ2h0Jzogd2luZG93SGVpZ2h0IC0gbmF2SGVpZ2h0LCAnb3ZlcmZsb3cteSc6ICdzY3JvbGwnfSlcbiAgICAgICAgICAgIHZhciBhZmZpeGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb2ludCA8IHN0b3BQb2ludCAtIDE1KSB7XG4gICAgICAgICAgICAkKCcubWFpbi1jb250ZW50JykuY3NzKHsnaGVpZ2h0JzogaGVpZ2h0UHJvcGVydHksICdvdmVyZmxvdy15JzogJ2luaXRpYWwnfSkgICAgXG4gICAgICAgICAgICBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBmdW5jdGlvbiBicm93c2VySXNNb2JpbGUgKCkge1xuICAgICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAgICBcbiAgICB9O1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
