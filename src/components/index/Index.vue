<template>
  <div class="index">
    <div class="banner">
      <!-- 视频兼容太乱了，建议使用vue视频播放插件(其实视频video本身存在很多兼容问题，一些细节问题可以忽略) -->
      <div class="video-box" :style="{height:height+'px',transform:transform}" v-show="showVideo">
        <img
          :src="videoList[current-1].poster"
          alt
          :style="{height:height+'px',width:'50%',left:(current-1)*50+'%'}"
          class="poster"
          v-show="videoList[current-1].paused"
        />
        <img
          src="./bofang.png"
          alt
          class="play-btn"
          @click="onPlay"
          v-show="videoList[current-1].paused"
        />
        <img
          src="./bofang.png"
          alt
          class="play-btn"
          @click="onPlay"
          style="left: 75%;"
          v-show="videoList[current-1].paused"
        />
        <video
          :src="videoList[current-1].src"
          :style="{height:height+'px',width:'50%'}"
          controls="false"
          autoplay="false"
          objectFit="contain"
          @play="onPlay"
          v-show="!videoList[current-1].paused"
          :poster="videoList[0].poster"
        ></video>
        <video
          :src="videoList[current-1].src"
          :style="{height:height+'px',width:'50%'}"
          controls="false"
          autoplay="false"
          objectFit="contain"
          @play="onPlay"
          v-show="!videoList[current-1].paused"
          :poster="videoList[1].poster"
        ></video>
      </div>
      <div class="video-intro">
        <div class="text">{{current==1?'KITCHEN DESIGENS':'CLOSET DESIGNS'}}</div>
        <div class="change">
          <img src="./right.png" v-show="current==2" alt @click="trans" />
          <img src="./right_no.png" v-show="current==1" alt />
          <img src="./left.png" v-show="current==1" alt @click="trans" />
          <img src="./left_no.png" v-show="current==2" alt />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-item">
        <div class="title">ABOUT US</div>
        <div
          class="text"
        >In 2007, Yukon Group was founded with the ideals and values of providing impeccable customer service while supplying beautiful, high-end products for residential as well as commercial projects. We are proud to announce the establishment of a sister-company: Yudezign. Identical to Yukon regarding vision and values, Yudezign additionally offers vast and versatile custom cabinetry design options. Our US-based manufacturing site is equipped with the most advanced manufacturing equipment and talented professionals utilizing integrated design-to-completion software, ensuring delivery of consistently high quality products.</div>
        <div class="intro-img">
          <img src="./index_ab.jpg" alt />
        </div>
      </div>
      <div class="box-item vr-item">
        <div class="title">VR EXPERIENCE</div>
        <div class="intro-img">
          <img src="./index_VR.jpg" alt />
          <div class="intoVR-btn" @click="intoVR">Enter the VR</div>
          <img src="./360.png" alt class="icon-vr" />
        </div>
      </div>
    </div>
    <!-- <img src="./apply.png" alt class="float-apply" @click="onIntoApply"/> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import kitchen from "./KITCHEN.jpg";
import closet from "./CLOSET.jpg";
export default {
  name: "HelloWorld",
  data() {
    return {
      height: "",
      current: 1,
      transform: "translateX(0%)",
      autoplay: true,
      videoList: [
        {
          src: "http://downloads-bim-en.yfway.com/yudezign/kitsun30s.mp4",
          poster: kitchen,
          paused: true
        },
        {
          src: "http://downloads-bim-en.yfway.com/yudezign/wardrobesun30s.mp4",
          poster: closet,
          paused: true
        }
      ]
    };
  },
  computed: {
    ...mapGetters("user", {
      showVideo: "value"
    })
  },
  mounted() {
    let target = document.documentElement || document.body || window;
    let targetWidth = window.innerWidth || target.clientWidth;
    this.height = (404 * targetWidth) / 702;
    // target.addEventListener("touchstart", this.onPlay);
  },
  destroyed() {
    this.autoplay = false;
  },
  methods: {
    onIntoApply() {
      this.$router.push({
        path: "/apply",
        query: {}
      });
    },
    intoVR() {
      window.open(
        "http://bimosscdn.yfway.com/project/pano/32762724/index.html"
      );
    },
    trans() {
      let current = this.current;

      if (current == 1) {
        this.transform = "translateX(-50%)";
        this.current = 2;
      } else if (current == 2) {
        this.transform = "translateX(0%)";
        this.current = 1;
      }
    },
    onPlay() {
      let video = document.getElementsByTagName("video");
      let current = this.current;
      if (current == 1) {
        video[0].play();
        video[1].pause();
        this.videoList[0].paused = false;
        this.videoList[1].paused = true;
      } else {
        video[1].play();
        video[0].pause();
        this.videoList[1].paused = false;
        this.videoList[0].paused = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
.index {
  .banner {
    width: 100%;
    height: auto;
    overflow: hidden;
    img {
      display: block;
    }
    .video-box {
      overflow: hidden;
      width: 200%;
      display: flex;
      flex-wrap: nowrap;
      transition: all 0.3s ease-in;
      .poster {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 52;
      }
      .play-btn {
        position: absolute;
        top: 50%;
        left: 25%;
        z-index: 65;
        width: 0.86rem;
        height: 0.86rem;
        transform: translate(-50%, -50%);
        display: block;
      }
      video {
        display: inline-block;
        position: relative;
        z-index: 55;
      }
    }
    .video-intro {
      display: flex;
      align-items: center;
      background: #333;
      width: 100%;
      height: 0.8rem;
      .text {
        font-size: 0.24rem;
        font-family: FZXiaoBiaoSong-B05S;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        flex: 1;
        margin-left: 0.46rem;
      }
      .change {
        display: flex;
        height: 0.8rem;
        width: 1.5rem;
        align-items: center;
        justify-content: space-around;
        background: #32b67a;
        img {
          width: 0.2rem;
          height: 0.28rem;
        }
      }
    }
  }
  .box {
    .box-item {
      width: 100%;
      padding: 0 0.4rem;
      .title {
        margin: 0.6rem auto 0.4rem auto;
        font-size: 0.32rem;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      .text {
        font-size: 0.24rem;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        word-break: break-all;
      }
      .intro-img {
        width: 100%;
        height: auto;
        margin-top: 0.4rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .vr-item {
      .intro-img {
        position: relative;

        .icon-vr {
          position: absolute;
          z-index: 64;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 0.93rem;
          height: 0.75rem;
        }
        .intoVR-btn {
          position: absolute;
          bottom: 20%;
          left: 50%;
          z-index: 2;
          transform: translateX(-50%);
          padding: 0.1rem 0.27rem;
          background: #32b67a;
          text-align: center;
          font-size: 0.24rem;
          border-radius: 0.04rem;
          color: white;
        }
      }
    }
  }
  .float-apply {
    position: fixed;
    right: 0.2rem;
    bottom: 1.3rem;
    z-index: 501;
    width: 1.34rem;
    height: 1.3rem;
  }
}
</style>
