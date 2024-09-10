$(document).ready(function() {
    $('body').append('<div class="cursor"></div>');
  
    $(document).on('mousemove', function(e) {
      $('.cursor').css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
      });
  
      var $trail = $('<div class="trail"></div>').appendTo('body');
      $trail.css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
      });
  
      setTimeout(function() {
        $trail.css('opacity', '0');
        setTimeout(function() {
          $trail.remove();
        }, 500);
      }, 0);
    });
  });