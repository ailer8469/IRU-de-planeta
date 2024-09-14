$(document).ready(function() {
  $('body').append('<div class="cursor"></div>');

  $(document).on('mousemove', function(e) {
    $('.cursor').css({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    });

    var $trail = $('<div class="trail"></div>').appendTo('body');
    $trail.css({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    });

    setTimeout(function() {
      $trail.css('opacity', '0');
      setTimeout(function() {
        $trail.remove();
      }, 500);
    }, 0);
  });
});