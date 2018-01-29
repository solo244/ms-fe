(function ($) {
  var path;

  $(".gif").on('click', function() {
    path = $(this).find("img").attr('src');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(path.select());
    console.log($temp);
    document.execCommand("copy");
    $temp.remove();
  });

  var gifs = Gifffer();

})(jQuery);
