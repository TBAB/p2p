/**
 * Created by zhaoyang on 2017/11/3.
 */
$(function () {
    $('.tab').click(function () {
        var tab=$('.offcanvas').hasClass('active');
        if(tab){
            $('.offcanvas').removeClass('active');
            $(this).find('i').removeClass('fa-hand-o-left')
        }else {
            $('.offcanvas').addClass('active');
            $(this).find('i').addClass('fa-hand-o-left')
        }

    })

    // 滑动效果
    // 定义开始时的X轴位置,结束时的X轴位置,X轴偏移量
    var startX,endX,moveX;
    var minMove=50;
    // 找到开始时的X轴位置
    $(document).on('touchstart',function (e) {
        startX=e.originalEvent.changedTouches[0].pageX;
    });

    // 找到结束时的X轴位置
  $(document).on('touchend',function (e) {
          var tab=$('.offcanvas').hasClass('active');
            endX=e.originalEvent.changedTouches[0].pageX;
            moveX=endX-startX;
            if(moveX>minMove&&!tab){
                    $(document).trigger('moveRight')
            };
            if(moveX<!minMove&&tab){
                    $(document).trigger('moveRight')
            }
        });

    $(document).on('moveRight',function () {
        $('.tab').trigger('click')
    })


    })







