$(document).ready(function() {
    var $click = $('#openAboutme');
    let $model = $('.about_model');
    var $exit = $('#about_exit');

    // 按鈕點擊事件，顯示模態框
    $click.on('click', function() {
        $model.toggleClass("animate").css('pointerEvents','auto');
        $('body').css('overflow', 'hidden'); 
    });

    // 關閉按鈕點擊事件，隱藏模態框
    $exit.on('click', function() {
        $model.toggleClass("animate").css('pointerEvents','none');
        $('body').css('overflow', ''); 
    });

    // 當點擊窗口以外的區域時，隱藏模態框
    $(window).on('click', function(event) {
        if ($(event.target).is($model)) {
            $model.toggleClass("animate").css('pointerEvents','none');
            $('body').css('overflow', ''); 
        }
    });

    $('.see_all_works').on('click', function() {
        $('.allWords_page').fadeIn(1000);
        $(this).fadeOut(1000);
    });
    
    $('#project_exit').on('click', function() {
        $('.allWords_page').fadeOut(1000, function() {
            $('.see_all_works').fadeIn(1000);
        });
    });
});