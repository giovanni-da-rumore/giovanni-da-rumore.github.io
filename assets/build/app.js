
$(document).ready(function(){
    var navHeight = 80;
    var stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    $(document).on('click', '.js-info', function () {
        var pos = $('#contact').position().top;
        $('html, body').animate({scrollTop: stopPoint}, 500);
    })
    
    $(window).on('resize', function () {
        stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
    })
  
    $(window).scroll(function() {
        var heightProperty = (window.innerWidth < 768) ? 'auto' : '100%';
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
    
    setTimeout(function () {
        $('.black-screen').addClass('hidden');
    }, 400);
    
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgbmF2SGVpZ2h0ID0gODA7XG4gICAgdmFyIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWluZm8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb3MgPSAkKCcjY29udGFjdCcpLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnR9LCA1MDApO1xuICAgIH0pXG4gICAgXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICB9KVxuICBcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGVpZ2h0UHJvcGVydHkgPSAod2luZG93LmlubmVyV2lkdGggPCA3NjgpID8gJ2F1dG8nIDogJzEwMCUnO1xuICAgICAgICB2YXIgYWZmaXhlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgY3VyUG9pbnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGlmIChjdXJQb2ludCA+IHN0b3BQb2ludCAmJiAhYWZmaXhlZCkge1xuICAgICAgICAgICAgJCgnLm1haW4tY29udGVudCcpLmNzcyh7J2hlaWdodCc6IHdpbmRvd0hlaWdodCAtIG5hdkhlaWdodCwgJ292ZXJmbG93LXknOiAnc2Nyb2xsJ30pXG4gICAgICAgICAgICB2YXIgYWZmaXhlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9pbnQgPCBzdG9wUG9pbnQgLSAxNSkge1xuICAgICAgICAgICAgJCgnLm1haW4tY29udGVudCcpLmNzcyh7J2hlaWdodCc6ICcxMDAlJywgJ292ZXJmbG93LXknOiAnaW5pdGlhbCd9KSAgICBcbiAgICAgICAgICAgIGFmZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYmxhY2stc2NyZWVuJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0sIDQwMCk7XG4gICAgXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
