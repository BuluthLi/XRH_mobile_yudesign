<template>
  <div class="productlist">
    <div class="box">
      <div class="box-item bg-item">
        <img src="./prolist-list-titlebg.png" alt class="bg-img" />
        <div
          class="text"
          style="margin-top:0.3rem;"
        >We understand that people want unique decor for their homes and the best quality at affordable prices. No matter what our customers envision, we have a solution for every renovation project. We intentionally carry a very diverse selection to make sure that even the most complicated customizations feel effortless.</div>
        <div class="swiper-container swiperone">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in productionList" :key="index">
              <div class="img-box" @click="onIntoVR(index)">
                <img :src="item.src" alt class="cover" />
                <img src="./prolist-list-go.png" alt class="detail-img" />
              </div>
              <div class="tip">{{item.title}}</div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination swiperone-pagination"></div>
        </div>
      </div>

      <div class="box-item special-item" style="margin-bottom:0;">
        <img src="./join-3new-gen-bg.jpg" alt class="bg-img" />
        <div class="title">FASHION STYLE, LIFESTYLE</div>
        <div class="text" style="padding:0;top:2rem;">
          The layout of kitchen cabinets, affects the use of daily
          cooking, about the details of the kitchen cabinet.
        </div>
      </div>
      <div class="box-item kitchen-item gray">
        <div class="title">L-SHAPE KITCHEN</div>
        <div class="text">
          Even in small spaces,each cabinet is reasonably arranged
          to maximize the use of each foot of space.
        </div>
        <div class="intro-img">
          <img src="./L_01.jpg" alt />
          <img src="./L_02.jpg" alt />
        </div>
      </div>
      <div class="box-item kitchen-item">
        <div class="title">U-SHAPE KITCHEN</div>
        <div
          class="text"
        >The U-Shape kitchen appeals directly to customers who would like to utilize countertops and preparation space. In addition to this, it also provides the maximum area for storage purposes.</div>
        <div class="intro-img">
          <img src="./U_01.jpg" alt />
          <img src="./U_02.jpg" alt />
        </div>
      </div>
      <div class="box-item kitchen-item gray">
        <div class="title">ISLAND KITCHEN</div>
        <div
          class="text"
        >The Island Kitchen is perfect for large, interactive families or those who frequently host social events at their home. The Island Kitchen allows your guests or family members to partake in conversation in an intimate, inclusive area.</div>
        <div class="intro-img">
          <img src="./IS_01.jpg" alt />
          <img src="./IS_02.jpg" alt />
        </div>
      </div>
      <div class="box-item swiper-item">
        <div class="title">Products INSIDE that make your life easier!</div>
        <div class="text" style="text-align:center;">Racks for Selection</div>
        <div class="swiper-container swipertwo">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./prolist-chuwu-1-pic.png" class="swiper-bg" alt />
              <div class="cover-block">
                <div class="title">Stainless Steel Spice Rack:</div>
                <div class="split-line"></div>
                <div
                  class="intro"
                >This conveniently stores condiments and spices as well as frequently used kitchen tools. Perfect for a food preparation area.</div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./prolist-chuwu-2-pic.jpg" class="swiper-bg" alt />
              <div class="cover-block">
                <div class="title">Narrow Storage:</div>
                <div class="split-line"></div>
                <div class="intro">Maximize your storage; use every inch.</div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./prolist-chuwu-3-pic.jpg" class="swiper-bg" alt />
              <div class="cover-block">
                <div class="title">Corner Flying Saucer</div>
                <div class="split-line"></div>
                <div
                  class="intro"
                >Efficient use of corner space for storing pots and pans or pantry items.</div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./prolist-chuwu-4-pic.jpg" class="swiper-bg" alt />
              <div class="cover-block">
                <div class="title">Stainless Steel Full Height Pull Out:</div>
                <div class="split-line"></div>
                <div class="intro">Organize like a professional</div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination swipertwo-pagination"></div>
        </div>
      </div>
      <div class="box-item" style="padding:0">
        <div class="title">Industry-Leading Quality</div>
        <div class="text" style="text-align:center;">The 11 Technologies For Cabinets</div>
        <div class="intro-img">
          <img src="./prolist-12tedian-pic.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

import pro1 from "./prolist-list-pro1.jpg";
import pro2 from "./prolist-list-pro2.jpg";
import pro3 from "./prolist-list-pro3.jpg";
import pro4 from "./prolist-list-pro4.jpg";
import pro5 from "./prolist-list-pro5.jpg";
import pro6 from "./prolist-list-pro6.jpg";
export default {
  data() {
    return {
      swiperOne: null,
      swiperTwo: null,
      productionList: [
        {
          src: pro1,
          title: "GEMSTONE"
        },
        {
          src: pro2,
          title: "HERITAGE"
        },
        {
          src: pro3,
          title: "ALASKA"
        },
        {
          src: pro4,
          title: "EXOTIC"
        },
        {
          src: pro5,
          title: "FARMHOUSE"
        },
        {
          src: pro6,
          title: "UPTOWN"
        }
      ]
    };
  },
  mounted: function() {
    this.initSwiper();
  },
  methods: {
    initSwiper: function() {
      this.swiperOne = new Swiper(".swiper-container.swiperone", {
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        slidesPerView: 1,
        pagination: {
          el: ".swiperone-pagination",
          clickable: true
        }
      });
      this.swiperTwo = new Swiper(".swiper-container.swipertwo", {
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        slidesPerView: 1,
        pagination: {
          el: ".swipertwo-pagination",
          clickable: true
        }
      });
    },
    onIntoVR(id) {
      window.scrollTo(0, 0);
      this.$router.push({
        path: "/vrdetail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.productlist {
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
      .split-line {
        width: 1rem;
        height: 1px;
        margin: -0.2rem auto 0.2rem auto;
        &.gray {
          background: rgba(133, 133, 133, 1);
        }
      }
      .se-title {
        font-size: 0.24rem;
        font-weight: 400;
        color: #32b67a;
        text-align: center;
        margin-bottom: 0.4rem;
      }
      .th-title {
        font-size: 0.24rem;
        font-weight: 400;
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
      .advantage-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: center;
        margin-top: -0.8rem;
        .advantage-item {
          width: 45%;
          margin-top: 0.8rem;
          .icon {
            width: 1.24rem;
            height: 1.24rem;
            margin: 0 auto;
            img {
              width: 1.24rem;
              height: 1.24rem;
            }
          }
          .intro {
            font-size: 0.24rem;

            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.28rem;
            text-align: center;
            margin: 0.3rem auto 0.2rem auto;
          }
          .split-line {
            width: 0.36rem;
            height: 0.04rem;
            background: rgba(59, 217, 129, 1);
            margin: 0 auto;
            &.yellow {
              background: #f5af4b;
            }
            &.blue {
              background: #1ca9e8;
            }
            &.orange {
              background: #f5af4b;
            }
          }
          .text {
            margin-top: 0.2rem;
            font-size: 0.24rem;

            font-weight: 300;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
    .bg-item {
      background: #f7f7f5;
      .bg-img {
        position: relative;
        width: 6.8rem;
        margin: 0.4rem 0 0 -0.4rem;
      }
      .swiperone {
        padding-bottom: 0.6rem;
        margin-top: 0.3rem;
        .swiper-slide {
          .img-box {
            position: relative;
            .cover {
              width: 100%;
            }
            .detail-img {
              width: 0.76rem;
              height: 0.76rem;
              position: absolute;
              bottom: -0.2rem;
              right: 0.2rem;
            }
          }
          .tip {
            margin-top: 0.2rem;
            font-size: 0.26rem;

            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
    .special-item {
      position: relative;
      width: 100%;
      height: auto;
      padding: 0;
      margin-top: 0.68rem;
      margin-bottom: -0.4rem;
      img {
        width: 100%;
        height: auto;
      }
      .title {
        position: absolute;
        z-index: 101;
        top: 1.2rem;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
        margin: 0;
        font-size: 0.32rem;

        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      .text {
        position: absolute;
        z-index: 101;
        top: 1.4rem;
        left: 50%;
        width: 84%;
        transform: translateX(-50%);
        padding: 0 0.66rem;
        color: white;
        text-align: center;
      }
    }
    .kitchen-item {
      padding: 0.01rem 0.4rem;
      .text {
        text-align: center;
      }
      &.gray {
        background: #f7f7f5;
      }
    }
    .swiper-item {
      .swipertwo {
        margin-top: 0.4rem;
        padding-bottom: 0.6rem;
        .swiper-container-horizontal > .swiper-pagination-bullets {
          bottom: 0;
        }
        .swiper-slide {
          width: 100%;
          height: auto;
          position: relative;
          .swiper-bg {
            width: 100%;
          }
          .cover-block {
            position: absolute;
            z-index: 101;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            background: #32b67a;
            padding: 0.44rem 0.24rem;
            .title {
              font-size: 0.2ren;

              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              margin: 0;
              width: 100%;
              text-align: left;
            }
            .split-line {
              width: 0.58rem;
              height: 2px;
              background: rgba(255, 255, 255, 1);
              margin: 0.2rem 0;
            }
            .intro {
              font-size: 0.24rem;

              font-weight: 100;
              color: rgba(255, 255, 255, 1);
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>