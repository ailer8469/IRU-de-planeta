// mouseWheel
$(window).on("mousewheel", _.throttle(function(event, delta) {
    if (delta < 0) {
        if (currentItem < numItems) {
            currentItem++;
        }
    } else {
        if (currentItem > 1) {
            currentItem--;
        }
    }
    // item click-> chose to currentItem
    item.click(function(){
        $(this).index(currentItem - 1);
    })
    let nowItem=$('.item').eq(currentItem - 1);
    if(!nowItem.hasClass('clk_item')){
        nowItem.addClass('clk_item').siblings('.item').removeClass('clk_item');
    }
    let index = nowItem.index(); 
    li_rotate.eq(index).addClass('clk_date').siblings(li_rotate)
    .removeClass('clk_date');
    // switch context
    context.eq(index).show().siblings(context).hide();
    // nowPage
    var nowPage= Math.ceil(currentItem / perPage);
    // nowPage switch context
    $('#nowPage').bind("input",function(){ 
        item.eq(currentItem-1-1).addClass('prev').siblings(item).removeClass('prev');
        item.eq(currentItem).addClass('next').siblings(item).removeClass('next');
        li_rotate.eq(currentItem-1-1).addClass('prev').siblings(li_rotate).removeClass('prev');
        li_rotate.eq(currentItem).addClass('next').siblings(li_rotate).removeClass('next');
    // down
    if(delta <0){
        if(currentItem <= perPage){ 
        // firstPage
            $('.current-page').eq(0).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
        }else if( currentItem > perPage){
            $('.current-page').eq(nowPage-1).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
            item.eq(currentItem-1-6).addClass('first').siblings(item).removeClass('first');
            li_rotate.eq(currentItem-1-6).addClass('first').siblings(li_rotate).removeClass('first');
            // 'first' will hide
            $('.item.first,.rotate_date .first').hide();
            $('.item.clk_item').show();
            li_rotate.eq(currentItem-1).addClass('clk_date').siblings(li_rotate)
            .removeClass('clk_date');
            li_rotate.eq(currentItem-1).show();
            // push to another
            item.eq(currentItem-1).css({
                'left':'-35%',
                'top':'135px'
            });
            item.eq(currentItem-2).css({
                'left':'-30%',
                'top':'67px'
            });
            item.eq(currentItem-3).css({
                'left':'-25%',
                'top':'-3px'
            });
            item.eq(currentItem-4).css({
                'left':'-20%',
                'top':'-73px'
            });
            item.eq(currentItem-5).css({
                'left':'-25%',
                'top':'-142px'
            });
            item.eq(currentItem-6).css({
                'left':'-30%',
                'top':'-210px'
            });
            li_rotate.eq(currentItem-1).css({
                'right':'62px',
                'top':'350px'
            });
            li_rotate.eq(currentItem-2).css({
                'right':'1px',
                'top':'283px'
            });
            li_rotate.eq(currentItem-3).css({
                'right':'-23px',
                'top':'213px'
            });
            li_rotate.eq(currentItem-4).css({
                'right':'-22px',
                'top':'145px'
            });
            li_rotate.eq(currentItem-5).css({
                'right':'12px',
                'top':'75px'
            });
            li_rotate.eq(currentItem-6).css({
                'right':'90px',
                'top':'8px'
            });
        
        };
    }else if(delta >0){ 
        item.eq(currentItem-6).addClass('first').siblings(item).removeClass('first');
        li_rotate.eq(currentItem-6).addClass('first').siblings(li_rotate).removeClass('first');
        item.eq(currentItem+5).addClass('final').siblings(item).removeClass('final');
        li_rotate.eq(currentItem+5).addClass('final').siblings(li_rotate).removeClass('final');

        li_rotate.eq(currentItem-1).addClass('clk_date').siblings(li_rotate).removeClass('clk_date');
        
        // last Page
        if( nowPage == totalPages){
            if($('.item:visible').length == perPage){
                $('.current-page').eq(nowPage-1).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
                li_rotate.eq(currentItem-1).addClass('clk_date').siblings(li_rotate).removeClass('clk_date');
                $('.rotate_date .first').show();
                $(".item.first").show();
                $('.item.next').hide();
                $('.rotate_date .next').hide();
            }else{
                $('.current-page').eq(nowPage-1).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
                $('.item.clk_item').show();
                li_rotate.eq(currentItem-1).show();
                $('.item.final').hide();
                $('.rotate_date .final').hide();

                item.eq(currentItem-1).css({
                    'left':'-30%',
                    'top':'-210px'
                });
                item.eq(currentItem).css({
                    'left':'-25%',
                    'top':'-142px'
                });
                item.eq(currentItem+1).css({
                    'left':'-20%',
                    'top':'-73px'
                });
                item.eq(currentItem+2).css({
                    'left':'-25%',
                    'top':'-3px'
                });
                item.eq(currentItem+3).css({
                    'left':'-30%',
                    'top':'67px'
                });
                item.eq(currentItem+4).css({
                    'left':'-35%',
                    'top':'135px'
                });
                li_rotate.eq(currentItem-1).css({
                    'right':'90px',
                    'top':'8px'
                });
                li_rotate.eq(currentItem).css({
                    'right':'12px',
                    'top':'75px'
                });
                li_rotate.eq(currentItem+1).css({
                    'right':'-22px',
                    'top':'145px'
                });
                li_rotate.eq(currentItem+2).css({
                    'right':'-23px',
                    'top':'213px'
                });
                li_rotate.eq(currentItem+3).css({
                    'right':'1px',
                    'top':'283px'
                });
                li_rotate.eq(currentItem+4).css({
                    'right':'62px',
                    'top':'350px'
                })

            }
        // second page~last Page
        }else if(nowPage > 1 && nowPage < totalPages){
            $('.current-page').eq(nowPage-1).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
            $('.item.next').hide();
            $('.rotate_date .next').hide();
            $('.item.first').show();
            $('.rotate_date .first').show();
            item.eq(currentItem-6).css({
                'left':'-30%',
                'top':'-210px'
            });
            item.eq(currentItem-5).css({
                'left':'-25%',
                'top':'-142px'
            });
            item.eq(currentItem-4).css({
                'left':'-20%',
                'top':'-73px'
            });
            item.eq(currentItem-3).css({
                'left':'-25%',
                'top':'-3px'
            });
            item.eq(currentItem-2).css({
                'left':'-30%',
                'top':'67px'
            });
            item.eq(currentItem-1).css({
                'left':'-35%',
                'top':'135px'
            });
            li_rotate.eq(currentItem-6).css({
                'right':'90px',
                'top':'8px'
            });
            li_rotate.eq(currentItem-5).css({
                'right':'12px',
                'top':'75px'
            });
            li_rotate.eq(currentItem-4).css({
                'right':'-22px',
                'top':'145px'
            });
            li_rotate.eq(currentItem-3).css({
                'right':'-23px',
                'top':'213px'
            });
            li_rotate.eq(currentItem-2).css({
                'right':'1px',
                'top':'283px'
            });
            li_rotate.eq(currentItem-1).css({
                'right':'62px',
                'top':'350px'
            })
        }else if(nowPage == 1){
            $('.current-page').eq(nowPage-1).addClass('clk_page').siblings($(".current-page")).removeClass('clk_page');
            $('.item.clk_item').show();
            li_rotate.eq(currentItem-1).show();
            $('.item.final').hide();
            $('.rotate_date .final').hide();
        } 
    }; 
});
    $('#nowPage').val(nowPage).trigger("input");
    $('#curItem').val(currentItem).trigger("input"); 
}, 600, { "leading": true, "trailing": false }));