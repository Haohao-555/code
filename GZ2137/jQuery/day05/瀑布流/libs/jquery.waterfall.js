;(function($){
    /*
    *
    * 封装瀑布流插件
    * V1.0.0 （免费版）
    * 2021-09-03 发布
    */ 
    $.fn.waterFall = function() {
        // console.log("瀑布流布局");
        // console.log($(this)); // $("#waterfall")
        // 定义变量
        // 记录每个列的宽度
        var w = $(this).find("li")[0].offsetWidth;
        // console.log(w);
        // 记录列数
        var count = 5;
        // 记录容器container的宽度
        var containerWidth = $(this).find(".container").width();
        // console.log(containerWidth);
        // 记录列与列之间间距
        var space = (containerWidth - w * count) / (count - 1);
        // var space = 10;
        // console.log(space);
        // 定义数组 记录5个高度
        var arrHeight = [];
        // 循环所以的li标签
        $(this).find("li").each(function(index,dom){
            // 打印每一个li标签的高度
            // console.log(dom.offsetHeight);
            var h = dom.offsetHeight;
            // 判断索引值 如果小于5，就是列表中的前5个Li标签 0,1,2,3,4
            if(index < 5){
                // 记录li标签的高度
                arrHeight[index] = h ;
                // 设置前5个li标签的left属性值 index * (w + space)
                // 1 * (232 + 10) 
                // 2 * (232 + 10) 
                // 3 * (232 + 10) 
                $(dom).css({ 
                    left: index * (w + space)
                })
            }else {
                // 找arrHeight数组中最小值
                // 定义变量 假设为最小值
                var minV = arrHeight[0];
                var minIndex = 0;
                // 循环arrHeight数组
                for(var i = 1 ; i < arrHeight.length ; i ++){
                    // 如果数组的有一项小于假设变量，那么这个假设变量就不是最小的值
                    if(minV > arrHeight[i]){
                        // 把数组的最小值赋值给假设变量
                        minV = arrHeight[i];
                        // 最小值所对应的索引值
                        minIndex = i;
                    }
                }
                // console.log("最小值:", minV);
                // console.log("最小值索引:", minIndex);
                // 设置第六个以上的li标签的位置（包括第六个li标签）
                $(dom).css({
                    left: minIndex *  (w + space),
                    top: minV + space + 50
                })
                // 更新arrHeight数组的高度数据（若不更新，第七个以及后续的li标签都叠在一起）
                arrHeight[minIndex] += h + space;
            }   
        })
        // console.log(arrHeight); //存放5个高度
    }
})(jQuery)