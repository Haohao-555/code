/*
*
* ajax 编程（异步编程）
* 封装过程中调用回调函数 beforeSend success error complete
*
* 1. url        接口地址
* 2. type       请求方式
* 3. data       提交的参数（对象转字符串）
* 4. async      是否异步（布尔值）
* 5. dataType   响应的数据格式/跨域（jsonp）

* 6. beforeSend 请求之前被调用的回调函数
* 7. success    请求成功被调用的回调函数
* 8. error      请求失败被调用的回调函数
* 9. complete   请求完成被调用的回调函数
*
*/ 

// 封装ajax函数
function ajax(option) {
    // 记录接口地址
    var url = option.url;
    // 记录请求方式
    var type = option.type || "get";
    // 记录提交的参数
    var data = option.data ;
    // 记录异步的布尔值(true)
    var async = option.async == false ? option.async : true;
    // var async = true ;
    // 记录响应的数据格式/表示跨域的标记
    var dataType = option.dataType;

    // 处理data对象（把对象转成指定格式的字符串）
    var str = "";
    if(typeof data == "object"){
        for(var key in data){
            str += key+"="+data[key]+"&"
        }
        str = str.slice(0,str.length -1);
    }
    // console.log(str);

    // 判断是否执行 XMLHttpRequest 逻辑（不是jsonp就是执行XMLHttpRequest的逻辑）
    if(dataType != "jsonp"){
        // 定义变量 记录实例
        var xhr ;
        // 判断当前浏览器是否支持XMLHttpRequest对象
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");// 低版本IE5/6
        }
        // console.log(xhr);
        // 监听客户端请求和服务端响应的状态
        xhr.onreadystatechange = function(){
            // console.log("监听请求和响应....");
            // 根据请求状态码调用相关的回调函数
            if(xhr.readyState <= 1){
                // 请求之前执行的回调函数
                // 判断是否存在当前的回调函数 beforeSend
                if(option.beforeSend) option.beforeSend();
            }
            // 判断请求是否完成
            if(xhr.readyState == 4 ){
                // 响应是否成功 xhr.responseText
                if(xhr.status == 200){
                    // 处理响应报文
                    var _type = xhr.getResponseHeader("content-type");//
                    // console.log(_type);
                    // 定义变量 接收处理结果
                    var res ;
                    // 判断响应回来的数据格式  > -1 表示存在json字符串
                    if(_type.indexOf("json") > -1){
                        // JSON 是个对象
                        // JSON.parse 把json格式字符串转json对象
                        res = JSON.parse(xhr.responseText);
                    }else if(_type.indexOf("xml") > -1){
                        // xml 是一种储存数据的标记语言
                        res = xhr.responseXML;
                    }else {
                        // 普通文档内容
                        res = xhr.responseText;
                    }
                    // 调用success回调函数
                    // if(option.success) option.success("数据xxxx");
                    if(option.success) option.success(res);
                }
                // 请求失败
                else {
                    // 调用error回调函数
                    if(option.error) option.error("请求失败...");
                }

                // 当状态码等于4的时 调用complete回调函数
                if(option.complete) option.complete();
            }
        }

        // 判断请求方式是否为get
        if(type == "get" || type == "GET"){
            // 发起请求
            if(str.length == 0){
                xhr.open(type,url,async);
            }else {
                // get方式提交参数，参数是拼接在url的后面（地址栏）
                xhr.open(type,url+"?"+str,async);
            }
            // 发送请求
            xhr.send();

        }else if(type == "post" || type == "POST"){
            // 发起请求
            xhr.open(type,url,async);
            // 设置请求头信息(post提交方式指定的文档格式类型)
            xhr.setRequestHeader("content-type","application/x-www-form-urlendcoded");
            // 发送请求主体
            xhr.send(str);
        }

    }
    // 判断执行jsonp的逻辑
    else {
        //....
        
    }
}

// 封装get函数
function get(url,success,error){
    var str = "";
    if(typeof data ==="object"){
        for(var key in data){
            str += key+"="+data[key]+"&"
        }
        str = str.slice(0,str.length-1);
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(success) success(xhr.responseText);
            }else {
                if(error) error("请求失败");
            }
        }
    }
    xhr.open("get",url+"?"+str,true);
    xhr.send();
}

// 封装post函数
function post(url,data,success,error){
    var str = "";
    if(typeof data ==="object"){
        for(var key in data){
            str += key+"="+data[key]+"&"
        }
        str = str.slice(0,str.length-1);
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(success) success(xhr.responseText);
            }else {
                if(error) error("请求失败");
            }
        }
    }
    xhr.open("post",url,true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send(str);
}


// 定义$对象
var $ = {};
// 添加ajax / get / post 函数到$对象中
$.ajax = ajax;
$.get = get;
$.post = post;

