(function ($) {

  //
  new Clipboard('.btn');

  //
  $(".gif").on("click", setCopy);

  function setCopy(e) {
    $(this).addClass("clicked");
    var setTime = setInterval(function () {
      $(".gif").removeClass("clicked");
      clearInterval(setTime);
      console.log("here");
    }, 800);
  }

})(jQuery);
