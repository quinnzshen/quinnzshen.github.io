// window.onload = function() {
//   // document.getElementById('woodresin-compressed').style.opacity = 1;

//   // 2: load large image
//   document.getElementById('woodresin').style.background = document.querySelector('#woodresin').dataset.large; 
//   // document.getElementById('woodresin-compressed').style.opacity = 0;
// }

$(document).ready(function() {
  console.log("DOC READY");
  (function() { $('.content-preview').css('opacity', 1)})();
  // (function() { $('.content').css('background-image', $('.content ').data('large'))})();
});

$(window).on("load", function() {
  console.log("WINDOW READY");
  (function() { $('.content-preview').css('opacity', 0)})();
});