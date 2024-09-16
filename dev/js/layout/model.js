$(document).ready(function() {
    var $click = $('#openAboutme');
    let $model = $('.about_model');
    var $exit = $('.exit');

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
});