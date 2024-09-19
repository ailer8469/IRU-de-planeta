$(function(){ 
    $('.svg_button').click(function(){
        $('.nav_model').fadeIn(); 
    })

    $('.nav_circle').click(function(){
        $('.nav_model').fadeOut();
    })

    $(document).click(function(event) {
        if (!$(event.target).closest('.svg_button, .nav_model').length) {
            $('.nav_model').fadeOut();
        }
    });


    $('.goToSomewhere').click(function(e) {
          e.preventDefault();
          $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          }, 750);
    });
});
