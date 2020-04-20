<template>
  <div id="app">
    <Header></Header>
    <div class="review-content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
#app {
  font-size: 0.24rem;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: #666666;
  * {
    word-break: normal !important;
  }
}
@media only screen and (max-width: 360px) {
  #app {
    font-size: 12px;
  }
}
/* iview默认样式修改 */
.ivu-input {
  width: 100%;
  height: 0.6rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(128, 128, 128, 1);
  font-size: 0.24rem;
  border-radius: 4px;
}
.ivu-input::placeholder {
  font-size: 0.24rem;
  /* line-height: 0.6rem; */
}

.swiper-pagination .swiper-pagination-bullet {
  width: 0.34rem;
  height: 0.06rem;
  display: inline-block;
  background: #9e9e9e;
  border-radius: 0;
  margin: 0 -0.1rem;
  border: 0;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 0.68rem;
  background: #2e2e2e;
  border: transparent;
  outline: none;
}
.swiper-container-horizontal.address-swiper {
  .swiper-pagination-bullets {
    top: 1.2rem;
    left: auto;
    right: 0.2rem;
    width: 100%;
    text-align: right;
    .swiper-pagination-bullet {
      width: 0.2rem;
      height: 0.06rem;
      margin: 0 0.1rem;
      &.swiper-pagination-bullet-active {
        width: 0.34rem;
        background: white;
      }
    }
  }
}
.vrdetail .pswp__button.pswp__button--arrow--left,
.vrdetail .pswp__button.pswp__button--arrow--right {
  display: none !important;
}
.pswp__button.pswp__button--arrow--left,
.pswp__button.pswp__button--arrow--right {
  display: none !important;
}
</style>
