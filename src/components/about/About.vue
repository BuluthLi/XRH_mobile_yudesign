<template>
  <div class="about">
    <div class="banner">
      <img src="./about_ban.jpg" alt />
    </div>
    <div class="box">
      <div class="box-item">
        <div class="title">ABOUT US</div>
        <div
          class="text"
        >In 2007, Yukon Group was founded with the ideals and values of providing impeccable customer service while supplying beautiful, high-end products for residential as well as commercial projects. We are proud to announce the establishment of a sister-company: Yudezign. Identical to Yukon regarding vision and values, Yudezign additionally offers vast and versatile custom cabinetry design options. Our US-based manufacturing site is equipped with the most advanced manufacturing equipment and talented professionals utilizing integrated design-to-completion software, ensuring delivery of consistently high quality products.</div>
      </div>
      <div class="box-item advantage-box-item">
        <div class="title">COMPANY ADVANTAGES</div>
        <div class="advantage-box">
          <div class="advantage-item">
            <img src="./icon-about-advantage-1.png" alt class="icon" />
            <div class="tip">PROUDLY</div>
            <div class="tip" style="margin-top:0px;">MADE IN THE USA</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-2.png" class="icon" alt />
            <div class="tip">PREMIUM</div>
            <div class="tip" style="margin-top:0px;">QUALITY</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-3.png" width="110" class="icon" height="110" alt />
            <div class="tip">UNLIMITED</div>
            <div class="tip" style="margin-top:0px;">CUSTOMIZATION</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-4.png" class="icon" alt />
            <div class="tip">EXTENSIVE</div>
            <div class="tip" style="margin-top:0px;">DESIGN LIBRARY</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-5.png" alt class="icon" />
            <div class="tip">MOISTURE</div>
            <div class="tip" style="margin-top:0px;">RESISTANT*</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-6.png" class="icon" alt />
            <div class="tip">FAST 48 HOUR</div>
            <div class="tip" style="margin-top:0px;">INITIAL 3D DESIGN TURN-AROUND</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-7.png" width="110" class="icon" height="110" alt />
            <div class="tip">ECO-FRIENDLY</div>
          </div>
          <div class="advantage-item">
            <img src="./icon-about-advantage-8.png" class="icon" alt />
            <div class="tip">RELIABLE</div>
            <div class="tip" style="margin-top:0px;">AND DURABLE</div>
          </div>
        </div>
      </div>
      <!-- 发展历程 -->
      <!-- <div class="box-item special-item">
        <img src="./about-development-bg@2x.png" alt class="bg-img" />
        <div class="title">DEVELOPMENT PLAN</div>
        <img src="./about-development-pic.png" class="detail-img" alt />
      </div>-->
      <!-- 公司news -->
      <!-- <div class="box-item news-box-item">
        <div class="title">COMPANY NEWS</div>
        <div class="news-item">
          <div class="se-title">Casino Plus Collection. This is how we make 1+1 greater than 2</div>
          <div class="split-line gray"></div>
          <div class="text">
            Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration.
            The Casino Plus Collection offers the same selections as our existing Casino Collection products, while the Plus version will integrate SPC underlayment that specifically designed and engineered for our Casino Collection product. By making this innovative addition, customers will enjoy easier installation process with the same great quality of our product.
            This new offering is available now at all UFS locations. Please contact us or your local UFS dealership for more information regarding to this new introduction.
          </div>
        </div>
        <div class="news-item">
          <div class="se-title">Casino Plus Collection. This is how we make 1+1 greater than 2</div>
          <div class="split-line gray"></div>
          <div class="text">
            Casino Collection was introduced in 2018 and it was a phenomenal success thanks to its incomparable design and features. At UFS we value our customer’s feedback on our product, and this time we will provide a new feature to our best-selling collection: same great product with underlayment integration.
            The Casino Plus Collection offers the same selections as our existing Casino Collection products, while the Plus version will integrate SPC underlayment that specifically designed and engineered for our Casino Collection product. By making this innovative addition, customers will enjoy easier installation process with the same great quality of our product.
            This new offering is available now at all UFS locations. Please contact us or your local UFS dealership for more information regarding to this new introduction.
          </div>
        </div>
        <div class="view-more-btn">VIEW MORE</div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped lang="less">
.about {
  .banner {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
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
    .advantage-box-item {
      .title {
        margin-bottom: 0.6rem;
      }
      .advantage-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        .advantage-item {
          width: 45%;
          margin-top: 0.98rem;
          text-align: center;
          vertical-align: bottom;
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
    .special-item {
      position: relative;
      width: 100%;
      height: auto;
      padding: 0;
      margin-top: 0.68rem;
      img {
        width: 100%;
        height: auto;
      }
      .title {
        position: absolute;
        z-index: 101;
        top: 0.8rem;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        font-size: 0.32rem;

        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      .detail-img {
        position: absolute;
        z-index: 102;
        top: 1.8rem;
        left: 7%;
        width: 86%;
      }
    }
    .news-box-item {
      .news-item {
        padding: 0.2rem 0.4rem;
        margin-top: 0.2rem;
        border: 1px solid rgba(235, 235, 235, 1);
        .se-title {
          font-size: 0.28rem;

          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
        .split-line {
          width: 0.7rem;
          height: 1px;
          background: rgba(189, 159, 111, 1);
          margin: 0.24rem 0;
          &.gray {
            background: #bd9f6f;
          }
        }
        .text {
          font-size: 0.28rem;

          font-weight: 300;
          color: rgba(102, 102, 102, 1);
        }
      }
      .view-more-btn {
        width: 2rem;
        margin: 0.3rem auto 0.6rem auto;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.24rem;

        font-weight: 100;
        color: rgba(255, 255, 255, 1);
        background: rgba(189, 159, 111, 1);
        border-radius: 0.04rem;
      }
    }
  }
}
</style>
