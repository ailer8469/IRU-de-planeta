$(function(){ 
    $('.svg_button').click(function() {
        $('.nav_model').css('display', 'block');
        gsap.fromTo('.nav_model', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' });
        // 逐步显示内容
        gsap.fromTo('.nav_list', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: 'power1.out' });
        gsap.fromTo('.nav_list li:nth-child(1)', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.5, ease: 'power1.out' });
        gsap.fromTo('.nav_list li:nth-child(2)', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: 'power1.out' });
        gsap.fromTo('.nav_contact', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 1.5, ease: 'power1.out' });
        gsap.fromTo('.nav_circle', { opacity: 0 }, { opacity: 1, duration: 1, delay: 2, ease: 'power1.out' });
    });
    $('.nav_circle').click(function() {
        $('.nav_model').fadeOut(800);
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.svg_button, .nav_model').length) {
            $('.nav_model').fadeOut(800);
        }
    });
    $('.goToSomewhere').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
        if($('.nav_model').is(':visible')){
            $('.nav_model').fadeOut();
        }
    });
});
