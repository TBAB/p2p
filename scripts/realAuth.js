/**
 * Created by zhaoyang on 2017/11/6.
 */

// 获取表单的值
$(function () {
    $('#save').on('click',function () {
/*        传统方式
        var param=$('#myform').serializeJSON()

        // 发送一个请求
        $.post('server/demo.json',param,function (data) {
                if(data){

                    $('#add').modal('hide');
                   var htmls= load(data);
                   $(".table-striped").find('tbody').html(htmls)
                }else {
                    console.log(data)
                }
        },'json')*/

        // 插件模式
        $('#myform').jqform('takeAjax',function (data) {
            if(data){
                $('#add').modal('hide');
              var htmls= load(data);
                $(".table-striped").find('tbody').html(htmls)
            }else {
                console.log('未获取')
            }
        })
    });

    // 封装函数渲染模板
    function load(datas) {

       var html= template('tmpl',{data:datas});
       return html
    }
})

