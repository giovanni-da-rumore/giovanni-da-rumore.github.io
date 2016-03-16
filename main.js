$(document).ready(function(){
  var video = document.getElementById("header-video")
  video.currentTime = 8;
  video.muted = true;
  var endtime = 110;
  video.addEventListener("timeupdate", function() {
       if (this.currentTime >= endtime) {
            this.pause();
            this.currentTime = 8;
            this.play();
        }
    }, false);
});

$(window).scroll(function() {
  var position = $(window).scrollTop();
  $sideBar = $('.left-sidebar');
  if (position > 398) {
    $sideBar.addClass("fixed");
  } else if ($sideBar.hasClass("fixed")) {
    $sideBar.removeClass("fixed");
  }
});
