 // loading
$(function(){
    const totalLoads = $('.load').length;
    const fadeInDuration = 100;
    const waitDuration = 300;
    $('body').waitForImages({
        waitForAll: true, 
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            $('#loadpage').find('#progress').text(pNum+'%');

            // $('.load').each(function(index) {
            //     const currentLoad = $(this);
            //     currentLoad.delay(index * (fadeInDuration + waitDuration)).fadeTo(fadeInDuration, 1).delay(waitDuration).fadeTo(fadeInDuration, 0);
            // });
        }, 
        finished: function() {
            // 等待所有元素完成後隱藏 loading 頁面
            setTimeout(function() {
                $('#loading').fadeOut(500);
            }, totalLoads * (fadeInDuration + waitDuration)); // 計算總時間
            }
        });
});