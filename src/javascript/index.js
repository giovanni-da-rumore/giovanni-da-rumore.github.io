
// $(document).ready(function(){
(function () {
  var navHeight = 80;
  var stopPoint = document.querySelector('.header-wrapper').offsetHeight  - navHeight;
  // animation to replace jquery
  // $('html, body').animate({scrollTop: stopPoint}, 500);
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  function scrollToEl(element, to, duration) {
    var start = document.scrollingElement.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        // element.scrollTop = val;
        document.scrollingElement.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  // get elements that trigger scroll and add events to them
  document.querySelectorAll('.js-info').forEach(function (el) {
    el.onclick = function() {
      if (window.innerWidth > 835 && window.innerHeight > 500) {
        // $('html, body').animate({scrollTop: stopPoint + 10}, 500);
        scrollToEl(document.body, stopPoint, 500)
      } else {
        scrollToEl(document.body, stopPoint + navHeight, 500)
      }
    }
  })

  // resize scroll to point if window changes
  window.resize = function () {
    stopPoint = document.querySelector('.header-wrapper').offsetHeight  - navHeight
  }

  // onResize()

  function browserIsMobile () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
})()
// });


// old jquery stuff

// find point where to stop in header for scrolling animation
// if (browserIsMobile()) {
  // $('.header-wrapper').css({'background-attachment': 'scroll', 'height': 'auto'});
  // $('.header-info').addClass('is-mobile');
// }
// old way of scrolling
// $(document).on('click', '.js-info', function () {
//   if (window.innerWidth > 835 && window.innerHeight > 500) {
//     $('html, body').animate({scrollTop: stopPoint}, 500);
//   } else {
//     $('html, body').animate({scrollTop: stopPoint + navHeight}, 500);
//   }
// });

// alternate animation for scrolling the page
// function scrollToPI(point, duration) {
//   // cancel if already on element
//   if (document.scrollingElement.scrollTop === point) return;
//   const cosParameter =  point / 2;
//   let scrollCount = 0, oldTimestamp = null;
//   let scrollY = document.scrollingElement.scrollTop;
//   function step (newTimestamp) {
//     if (oldTimestamp !== null) {
//       // if duration is 0 scrollCount will be Infinity
//       scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
//       if (scrollCount >= Math.PI || document.scrollingElement.scrollTop >= point) return document.scrollingElement.scrollTop = point;
//       // if wanted to make element scroll to lower point as well, throw in this if statement
//       // if (point >= cosParameter * 2) {
//       //   document.scrollingElement.scrollTop += cosParameter - cosParameter * Math.cos(scrollCount);
//       // } else {
//       //   document.scrollingElement.scrollTop += cosParameter + cosParameter * Math.cos(scrollCount);
//       // }
//       document.scrollingElement.scrollTop += cosParameter - cosParameter * Math.cos(scrollCount);
//     }
//     oldTimestamp = newTimestamp;
//     window.requestAnimationFrame(step);
//   }
//   window.requestAnimationFrame(step);
// }

// $(window).resize(function () {
//   stopPoint = parseInt($('.header-wrapper').css('height').slice(0, -2)) - navHeight;
  // var heightProperty = (window.innerWidth < 800 || innerHeight < 450) ? 'auto' : '100%';
  // var windowHeight = $(window).height();
  // if (!browserIsMobile() && window.innerWidth > 835 && window.innerHeight > 500) {
  //   // $('.body-wrapper').css({'height': windowHeight - navHeight, 'overflow-y': 'scroll'});
  //   $('.body-wrapper').css({'height': windowHeight - navHeight })
  // } else {
  //   $('.body-wrapper').css({'height': heightProperty, 'overflow-y': 'initial'});
  // }
// });
