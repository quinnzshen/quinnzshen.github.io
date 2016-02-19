$(document).ready(function() {
  console.log("DOC READY");
  (function() { $('.content-preview').css('opacity', 1)})();
});

$(window).on("load", function() {
  console.log("WINDOW READY");
  (function() { $('.content-preview').css('opacity', 0)})();
});