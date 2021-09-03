/*
*
* 功能： 满屏滚动
* v2.0.0 (升级版)
*
*
*/
// var foo = function(){ console.log("test");}
// ; 分割点,表示当前的代码结束
; (function () {
    // 拓展一个方法
    $.fn.fullPage = function (params) {
        // 记录相关的参数
        // 颜色
        var arrColor = params.sectionColor;
        // 高度
        var winHeight = window.innerHeight;
        // 索引值
        var index = 0;
        // 定义延迟函数变量
        var delay = null;
        // 记录有多少屏
        var len = $(this).find(".section").length;
        // 记录.layout容器标签
        var $layout = $(this).find(".layout");
        // 记录导航点
        var $point = $(this).find(".point span");
        // 记录当前函数作用域的this
        var _this = $(this);
        // 定义函数 初始化页面
        var init = function () {
            // console.log($(_this)); // jquery对象
            _this.find(".section").each(function (index, dom) {
                // console.log(dom);// dom 对象
                // 设置每一屏的颜色
                $(dom).css("backgroundColor", arrColor[index]);
                // 设置每一屏的高度
                $(dom).css("height", winHeight);
            })
        }
        // 初始化
        init();

        // 事件处理
        // 鼠标滚轮滚动的事件
        $(document).on("mousewheel", function (event) {
            // 记录事件对象
            // var _event = event;
            // 判断延迟变量是否有值，若有值，表示正在执行
            // 事件再次频繁触发，就需要清除延迟函数
            if (delay) clearTimeout(delay);
            // 事件没有频繁触发了，再执行延迟函数
            delay = setTimeout(function () {
                // 根据当前的字段判断滚轮滚动的方向(向后/向前)
                // console.log(event.originalEvent.wheelDelta);
                var wheelDelta = event.originalEvent.wheelDelta;
                // 判断滚轮滚动的方向
                // 向后（负数）
                // 向前（正数）
                if (wheelDelta < 0) {
                    // console.log("后");
                    index++;
                    if (index > len - 1) {
                        index = len - 1;
                    }
                } else {
                    // console.log("前");
                    index--;
                    if (index < 0) {
                        index = 0;
                    }
                }
                // 切换下一屏内容
                $layout.animate({
                    marginTop: -index * winHeight
                }, 300, function () {
                    // 判断是否存在afterLoad回调函数
                    // if( params.aferLoad) params.aferLoad(index);
                    params.afterLoad && params.afterLoad(index);
                })
                // 设置导航点跟随切换
                $point.eq(index)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                // 重置delay的值
                delay = null;
            }, 100)
        })

        // 鼠标移入导航点事件(mouseenter)
        $(this).find(".point span").on("click", function () {
            // 获取索引值
            index = $(this).index();
            // console.log(index);
            // 切换下一屏内容
            $layout.animate({
                marginTop: -index * winHeight
            }, 300, function () {
                // 判断是否存在afterLoad回调函数
                // if( params.aferLoad) params.aferLoad(index);
                params.afterLoad && params.afterLoad(index);
            })
            // 设置导航点跟随切换
            $point.eq(index)
                .addClass("active")
                .siblings()
                .removeClass("active")
        })
    }
})()