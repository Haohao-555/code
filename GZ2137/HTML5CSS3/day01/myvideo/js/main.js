/*
* H5-视频播放器
* 需求：
*  1. 可以播放视频，可以暂停视频
*  2. 显示视频文件的时长
*  3. 设置视频播放的进度条
*  4. 设置视频播放的倍速
*  5. 设置视频的音量
*
*
*
*/ 
// 编码方式： 面向对象
// 1. 构造函数
function Player () {
    // 添加属性
    this.video = document.querySelector(".video-box-content video");
    this.buttons = document.querySelectorAll(".video-box-bottom .btns button");
    this.btnPlay = this.buttons[0];
    this.btnPause = this.buttons[1];
    this.progress = document.querySelector(".progress");
    this.spans = document.querySelectorAll(".time span");
    this.curTime = this.spans[0];
    this.durTime = this.spans[0];
    this.btnSpeed = document.querySelector(".speed > div");
    this.boxSpeed = document.querySelector(".speed > ul");
    this.itemsSpeed = document.querySelectorAll(".speed > ul li");
    this.range = document.querySelector(".range")
    this.boxRange = document.querySelector(".range ul");
    this.liRange = document.querySelector(".range ul li");
    this.barRange = document.querySelector(".range ul li .bar");
}

// 2. 原型对象
// 添加方法 初始化
Player.prototype.init = function(){
    // 播放和暂停视频
    this.addClickEvent();
}

// 添加方法 添加点击事件 控制视频的播放和暂停
Player.prototype.addClickEvent = function(){// 作用域1
    // 记录当前函数作用域的this
    var _this = this;
    // 点击播放视频
    this.btnPlay.onclick = function() {// 作用域2
        _this.video.play();
        _this.btnPlay.className = "active";
        _this.btnPause.className = "";
    }   
    // 点击暂停视频
    this.btnPause.onclick = function() {
        _this.video.pause();
        _this.btnPlay.className = "";
        _this.btnPause.className = "active";
    }   
}

// 3. 实例对象
// var p1 = new Player();

//实例对象
// console.log(p1); 
// p1.init();
new Player().init();
