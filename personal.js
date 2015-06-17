(function () {
  if (typeof Personal === "undefined") {
    window.Personal = {};
  }


var View = Personal.View = function () {
  var that = this;
  this.$el = $('body');
};


View.prototype.scam = function () {
};




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
