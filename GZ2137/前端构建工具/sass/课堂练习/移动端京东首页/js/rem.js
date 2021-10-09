(function (doc, win) { // 形参 doc, win
    //获取根元素  html
    var docEl = doc.documentElement;
    //监听浏览器（页面）宽度的尺寸改变  事件名称
    // window.onresize = function(){}
    // 
    var  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // 定义设置根元素字体大小的函数
    var recalc = function () {
        // 获取页面的宽度
        var clientWidth = docEl.clientWidth;
        // 判断是否获取页面宽度 没有直接终止代码
        if (!clientWidth) return;
         // 判断页面宽度是否大于等于 640px
         if(clientWidth >= 640) clientWidth = 640; 
         // 判断页面宽度是否小于等于 320px
         if(clientWidth <= 320) clientWidth = 320; 
        // 设置根元素的字体大小
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

    // 判断浏览器是否支持 addEventListener api
    if (!doc.addEventListener) return;
    // 监听页面宽度的变化事件（resizeEvt） 执行设置根元素字体大小的处理逻辑（recalc）
    win.addEventListener(resizeEvt, recalc, false);
    // 兼容写法
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);//实参