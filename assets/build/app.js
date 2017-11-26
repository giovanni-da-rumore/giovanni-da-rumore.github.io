
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5hdkhlaWdodCA9IDgwO1xuICAgIHZhciBzdG9wUG9pbnQgPSBwYXJzZUludCgkKCcuaGVhZGVyLXdyYXBwZXInKS5jc3MoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKSkgLSBuYXZIZWlnaHQ7XG4gICAgaWYgKGJyb3dzZXJJc01vYmlsZSgpKSB7XG4gICAgICAgICQoJy5oZWFkZXItd3JhcHBlcicpLmNzcyh7J2JhY2tncm91bmQtYXR0YWNobWVudCc6ICdzY3JvbGwnLCAnaGVpZ2h0JzogJ2F1dG8nfSk7XG4gICAgICAgICQoJy5oZWFkZXItaW5mbycpLmFkZENsYXNzKCdpcy1tb2JpbGUnKTtcbiAgICB9XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1pbmZvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4MzUgJiYgd2luZG93LmlubmVySGVpZ2h0ID4gNTAwKSB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnQgKyAxMH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzdG9wUG9pbnQgKyBuYXZIZWlnaHR9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHN0b3BQb2ludCA9IHBhcnNlSW50KCQoJy5oZWFkZXItd3JhcHBlcicpLmNzcygnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpKSAtIG5hdkhlaWdodDtcbiAgICAgICAgdmFyIGhlaWdodFByb3BlcnR5ID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwIHx8IGlubmVySGVpZ2h0IDwgNDUwKSA/ICdhdXRvJyA6ICcxMDAlJztcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgaWYgKCFicm93c2VySXNNb2JpbGUoKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDgzNSAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPiA1MDApIHtcbiAgICAgICAgICAgICQoJy5ib2R5LXdyYXBwZXInKS5jc3MoeydoZWlnaHQnOiB3aW5kb3dIZWlnaHQgLSBuYXZIZWlnaHQsICdvdmVyZmxvdy15JzogJ3Njcm9sbCd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5ib2R5LXdyYXBwZXInKS5jc3MoeydoZWlnaHQnOiBoZWlnaHRQcm9wZXJ0eSwgJ292ZXJmbG93LXknOiAnaW5pdGlhbCd9KTsgXG4gICAgICAgIH1cblxuICAgIH0pO1xuICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgLy8gaWYgKCFicm93c2VySXNNb2JpbGUoKSkge1xuICAgICAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gdmFyIGhlaWdodFByb3BlcnR5ID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwKSA/ICdhdXRvJyA6ICcxMDAlJztcbiAgICAgICAgICAgIC8vIHZhciBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB2YXIgY3VyUG9pbnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAvLyB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgLy8gLy8gaWYgKGN1clBvaW50ID4gc3RvcFBvaW50ICYmICFhZmZpeGVkICYmIHdpbmRvdy5pbm5lcldpZHRoID4gODM1ICYmIHdpbmRvdy5pbm5lckhlaWdodCA+IDUwMCkge1xuICAgICAgICAgICAgLy8gICAgICQoJy5ib2R5LXdyYXBwZXInKS5jc3MoeydoZWlnaHQnOiB3aW5kb3dIZWlnaHQgLSBuYXZIZWlnaHQsICdvdmVyZmxvdy15JzogJ3Njcm9sbCd9KVxuICAgICAgICAgICAgLy8gICAgIHZhciBhZmZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoY3VyUG9pbnQgPCBzdG9wUG9pbnQgLSAxNSkge1xuICAgICAgICAgICAgLy8gICAgICQoJy5ib2R5LXdyYXBwZXInKS5jc3MoeydoZWlnaHQnOiBoZWlnaHRQcm9wZXJ0eSwgJ292ZXJmbG93LXknOiAnaW5pdGlhbCd9KSAgICBcbiAgICAgICAgICAgIC8vICAgICBhZmZpeGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB9ICAgICAgICBcbiAgICAgICAgLy8gfSk7XG4gICAgLy8gfVxuICAgIFxuICAgIGZ1bmN0aW9uIGJyb3dzZXJJc01vYmlsZSAoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7ICAgIFxuICAgIH07XG5cbn0pO1xuIl19
