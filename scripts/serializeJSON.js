/**
 * Created by zhaoyang on 2017/11/6.
 */
/*$.fn.serializeJSON=function () {
    var dataJSON={};
    var paramArr=$(this).serializeArray();
    for(var i=0;i<paramArr.length;++i){
        var num=paramArr[i].name;
        dataJSON[num]=paramArr[i].value;

    }

    return dataJSON
}*/

// 封装插件
/*需求:应用在表单form上,目前加入三个功能:
1 提取表单数据获取一个json对象

2 使用AJAX方式提交表单
$form.jqFrom('ajaxSubmit',function(){})
url :  直接使用form元素的action属性
data:  自动从表单中收集
3 根据一个json数据,进行表单回填
$form.jqFrom('load',data);
data:  自动从表单中收集
    使用方式:
    jq对象.插件名(方法名,参数1,参数2,参数n...)*/

$.fn.jqform=function (methodName) {
    var form=$(this);
    var key={

        // 1提取表单数据获取一个json对象
        serializeJSON:function () {
            var dataJSON={};
            var paramArr=$(this).serializeArray();
            $(paramArr).each(function (index,obj) {
                dataJSON[obj.name]=obj.value;
            })
            return dataJSON
        },

        // 2 发送ajax请求
        takeAjax:function (callback) {
            var url=form.attr('action');
            var data=key.serializeJSON.call(form);
            console.log(url,data)
            $.post(url,data,callback,'json')
        }


    };
// 参数是从第二个开始（第一个参数是方法名）
    var arg = arguments[1];
    // 根据传入的参数进行方法的调用(根据名称调方法)
    key[methodName](arg)

}