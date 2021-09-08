 // 定义字符串
 var str = "?code=utf-8&q=yifu&_ksTS=1631092227707_294&callback=jsonp295&k=1&area=c2c&bucketid=17";
 // 去掉 "?" 字符
 str = str.slice(1);
 // 把字符串切割成数组
 var arr = str.split("&");
 // 定义对象
 var obj = {};
 // 循环数组
 for(var i = 0 ; i < arr.length; i ++){
         // 键 
         var key = arr[i].split("=")[0];
         // 值
         var v1 = arr[i].split("=")[1];
         // 设置对象
         obj[key] = v1;
 }
 // 打印对象
 console.log(obj);