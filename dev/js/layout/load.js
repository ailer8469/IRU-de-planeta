$(function() {
    const fadeInDuration = 100;
    let displayedImages = 0;

    function showImage(index) {
        $('.load').css('opacity', 0);
        const currentLoad = $('.load').eq(index);
        currentLoad.css('opacity',1);
    }

    $('body').waitForImages({
        waitForAll: true,
        each: function(loaded, count, success) {
            var pNum = parseInt((loaded / count) * 100);
            // 判斷當前進度並顯示圖片
            if (pNum >= 20 && displayedImages === 0) {
                showImage(0);
                displayedImages++;
            } else if (pNum >= 40 && displayedImages === 1) {
                showImage(1);
                displayedImages++;
            } else if (pNum >= 60 && displayedImages === 2) {
                showImage(2);
                displayedImages++;
            } else if (pNum >= 80 && displayedImages === 3) {
                showImage(3);
                displayedImages++;
            } else if (pNum >= 100 && displayedImages === 4) {
                showImage(4);
                displayedImages++;
            }
        },
        finished: function() {
            // 確保最後一張圖片顯示
            $('#loading').fadeOut(500); 
        },
    });
});