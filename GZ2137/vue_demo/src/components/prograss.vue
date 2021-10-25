<!--
 * @Date: 2021-10-25 16:24:03
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue_demo\src\components\prograss.vue
-->
<template>
    <div id="prograss">
        <div class="left">
            <div class="iconfont item icon-shangyishouge"></div>
            <div :class="['item','iconfont',play? 'icon-zanting': 'icon-bofang']" @click="play=!play"></div>
            <div class="iconfont item icon-kuaijin"></div>
        </div>
        <div class="right">
            <div class="prograss-container">
                <div class="current-time"></div>
                <div
                    class="bar"
                    @mousedown="down=true"
                ></div>
        </div>
        <div class="time">{{dt}}</div>
    </div>
    </div>
</template>
<script>
export default {
  name: "prograss",
  props: {
    // 歌曲 id
    songId: Number,
   
  },
  data() {
    return {
      // 时长
      dt: 200, // 01:40
      // 是否按下
      down: false,
      // 音频 url
      audioUrl: "http://m8.music.126.net/20211025201850/d64945df0bcbec676021762122cba3ab/ymusic/ec15/654d/978d/18e47baaf81561f18f2d6e2e966c8bf8.mp3",
      // 进度条长度
      prograssDistance: 0,
      // 当前进度条滑动的距离
      currentDistance: 0,
       // 是否播放
      play: true,
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
        // 保存进度条长度
      this.prograssDistance =
        document.querySelector(".prograss-container").offsetWidth -
        document.querySelector(".bar").offsetWidth;
        
      document.onmousemove = e => {
        let bar = document.querySelector(".bar");
        let prograss = document.querySelector(".prograss-container");
        let current = document.querySelector(".current-time");
        let prograss_left = prograss.offsetLeft;
        let prograss_width = prograss.offsetWidth;
        let bar_width = bar.offsetWidth;

        let x = e.pageX;
        if (this.down) {
          // 移动的距离
          let distance = x - prograss_left - bar_width / 2;

          // 判断是否超出范围
          distance = distance < 0 ? 0 : distance;
          distance = distance > prograss_width - bar_width ? prograss_width - bar_width : distance;
          bar.style.left = distance + "px";
          current.style.width = distance + "px";
          // 保存当前滑动的距离
          this.currentDistance = distance;
        }
      };
      document.onmouseup = () => {
        this.down = false;
        this.currentTime();
      };
    },
    
    currentTime() {
      let x = Math.floor(this.currentDistance *(this.dt / this.prograssDistance));
      console.log(x);
    }
  },
};
</script>
<style lang="scss">
@import "../assets/icons.scss";
#prograss {
  user-select: none;
  width: 1220px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 40px;
  margin: 100px auto;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  .left {
    display: flex;
    justify-content: flex-start;
    margin-right: 20px;
    .item {
      width: 100px;
      height: 40px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-size: 40px 40px;
      background-position: 10px 10px;
      &:hover {
          color: #31c27c;
      }
      &:last-child {
        margin-right: 0;
        padding-top: 5px;
        box-sizing: border-box;
        margin-left: -30px;
      }
      &:nth-child(2) {
          font-size: 40px;
      }
      &:nth-child(1) {
        padding-top: 5px;
        box-sizing: border-box;
        padding-left: 40px;
      }
    }
   
  }
  .right {
    display: flex;
    align-items: center;
    .prograss-container {
      position: relative;
      width: 600px;
      height: 6px;
      background-color: #ffffff;
      border-radius: 40px;
      //   overflow: hidden;
      .current-time {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 100%;
        background-color: #31c27c;
      }
      .bar {
        position: absolute;
        top: -5px;
        left: 0px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #31c27c;
      }
    }
    .time {
      color: #ffffff;
      margin-left: 12px;
    }
  }
}
</style>
