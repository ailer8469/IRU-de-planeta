$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $(':root').css('--mouse-x', `${e.pageX}px`);
    $(':root').css('--mouse-y', `${e.pageY}px`);
  });

  $(document).on('mouseenter', function() {
    var $el = $(this);
    var fs = $el.css('font-size');
    var lh = $el.css('line-height');
    $(':root').css('--cursor-height', `calc(${fs} + (${lh}/4))`);
  });
});