$(document).ready(function() {
    let next = $('#next');
    let prev = $('#prev');
    let carousel = $('#carousel');
    let list = $('.list');
    let items = $('.item');
    let itemActive =$('.item.active');
    let workContainers = $('.work_container');
    let workModel = $('.index_work_model');

    const updateActive = () => {
        let newActive = list.children().eq(1); 
        newActive.addClass('active'); 

        list.children().each(function(index) {
            if (index !== 1) {
                $(this).removeClass('active');
            }
        });
    };
    updateActive();

    next.on('click', function() {
        showSlider('next');
    });
    prev.on('click', function() {
        showSlider('prev');
    });
    const showSlider = (type) => {
        if (type === "next") {
            list.append(items.first());
            carousel.addClass('next');
        } else {
            list.prepend(items.last());
            carousel.addClass('prev')
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