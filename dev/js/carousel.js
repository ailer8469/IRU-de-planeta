$(document).ready(function() {
    let next = $('#next');
    let prev = $('#prev');
    let carousel = $('#carousel');
    let list = $('.list');
    let items = $('.item');
    let workContainers = $('.work_container');
    let workModel = $('.index_work_model');

    let currentIndex = 1; // 目前的 active 索引（初始為第二個項目）
    const updateActive = () => {
        items.removeClass('active'); // 移除所有 active 類
        items.eq(currentIndex).addClass('active'); // 將當前項目設為 active
    };
    // 初始化
    updateActive();

    next.on('click', function() {
        showSlider('next');
    });
    prev.on('click', function() {
        showSlider('prev');
    });
    const showSlider = (type) => {
        if (type === "next") {
            currentIndex = (currentIndex + 1) % items.length; // 更新索引
            const firstItem = list.children().first(); // 獲取第一個項目
            list.append(firstItem); // 將其移到列表最後
        } else {
            currentIndex = (currentIndex - 1 + items.length) % items.length; // 更新索引
            const lastItem = list.children().last(); // 獲取最後一個項目
            list.prepend(lastItem); // 將其移到列表最前面
        }
        updateActive();
    };

    // 點擊每個 item 的事件處理
    items.on('click', function() {
        if($(this).hasClass('active')){
            // 獲取當前被點擊的 item 的索引
            $('body').css('overflow', 'hidden'); 
            workModel.fadeIn(500);
            let index = items.index(this);
            // 隱藏所有 work_container
            workContainers.hide();
            // 顯示對應的 work_container
            workContainers.eq(index).show();
        }
    });
    // 點擊關閉按鈕的事件處理
    $('.exit').on('click', function() {
        $(this).closest('.work_container').hide();
        workModel.fadeOut(500);
        $('body').css('overflow', ''); 
    });
    $(window).on('click', function(event) {
        if ($(event.target).is(workModel)) {
            workModel.fadeOut(500);
            $('body').css('overflow', ''); 
        }
    });
})