(function () {
  if (typeof Personal === "undefined") {
    window.Personal = {};
  }


var View = Personal.View = function () {
  var that = this;
  this.$el = $('body');
  this.$el.on('click', this.scam.bind(this));
};


View.prototype.scam = function () {
};


// var urlParse = function () {
//   var urlInfo = window.location.href.split("#/")[1]
//    if (urlInfo == "projects") {
//      window.scroll(0, 350);
//    }
// }
// urlParse();



})();



$(document).ready(function(){
  new Personal.View();

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
