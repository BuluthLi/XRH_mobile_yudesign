<template>
  <div class="footer" id="footer" v-show="show">
    <div style="position:relative;" v-show="showMap">
      <div id="map"></div>
      <div class="swiper-container address-swiper" style="height:125px;">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in locations" :key="index">
            <div class="shade-box">
              <div class="location">
                <img src="./add@2x.png" class="icon-add" alt />
                <span>{{item.shop_name}}</span>
              </div>
              <div class="split-line"></div>
              <div class="full-address">Address:{{item.address}}</div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination address-pagination"></div>
      </div>
    </div>
    <div class="message-box">
      <div class="title">INTERESTED? CONTACT US</div>
      <div class="item">
        <div class="name">Name :</div>
        <Input
          v-model="name"
          type="text"
          placeholder="Please Enter Your Name(Required Filed)"
          class="inputinput"
        />
      </div>
      <div class="item">
        <div class="name">Phone :</div>
        <Input
          v-model="phone"
          type="text"
          placeholder="Please Enter Your Phone(Required Filed)"
          class="inputinput"
        />
      </div>
      <!-- <div class="security">
        <img :src="securityImg" alt @click="onChangeSecurity" />
        <span>By using this form you agree with the storage and handling of your data by this Yudezign.</span>
      </div>-->
      <Button type="primary" long class="submit" @click="onSubmit">SUBMIT</Button>
      <!-- <Button type="primary" long class="submit">SUBMIT</Button> -->
    </div>
    <div class="contact-box">
      <div class="title">CONTACT US</div>
      <div class="item">
        <img src="./icon-floor-tel.png" alt class="icon icon-phone" />
        <span class="text">1-281-208-0000</span>
      </div>
      <div class="item">
        <img src="./icon-floor-mail.png" alt class="icon icon-mail" />
        <span class="text">orders@yudezign.com</span>
      </div>
      <div class="item">
        <img src="./icon-floor-add.png" alt class="icon icon-add" />
        <span class="text">13246 Murphy Road, Suite 400 Stafford, TX 77477</span>
      </div>
      <div class="split-line"></div>
      <div class="about">About our company | Contact us | FAQ | Support | Blog</div>
      <div class="copyright">©2019 Yudezign GmbH</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import get from "./get.png";
import no from "./no.png";
import add from "./add-flag.png";
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      phone: "",
      mailbox: "",
      address: "",
      content: "",
      show: true,
      addressSwiper: null,
      security: 1,
      // 地图相关数据
      showMap: true,
      locations: [],
      map: null,
      markers: []
    };
  },
  // 监测路由变化
  watch: {
    $route(to, from) {
      // console.log(to, from);
      if (to.path == "/apply" || to.path == "/vrdetail") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  },
  computed: {
    securityImg() {
      return this.security == 1 ? get : no;
    }
  },
  mounted: function() {
    let input = document.getElementsByClassName("inputinput");
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("blur", () => {
        setTimeout(function() {
          var scrollHeight =
            document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
      });
    }
    this.initMap();
  },
  methods: {
    initAddressSwiper: function() {
      let _this = this;
      this.addressSwiper = new Swiper(".swiper-container.address-swiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination.address-pagination",
          clickable: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        on: {
          slideChangeTransitionEnd: function() {
            let index =
              parseInt(this.activeIndex) % parseInt(_this.locations.length);
            _this.changeLocation(index);
          }
        }
      });
    },
    onChangeSecurity() {
      this.security = !this.security;
    },
    onSubmit: function() {
      let name = this.name.trim();
      let phone = this.phone.trim();
      let mailbox = this.mailbox.trim();
      let address = this.address.trim();
      let content = this.content.trim();
      if (!phone || !name) {
        this.$Notice.error({
          title: "Notice Error",
          desc: "Please enter the correct information"
        });
        return;
      }
      let params = {
        name: name,
        phone: phone,
        email: mailbox,
        address: address,
        content: content
      };
      this.$http
        .jsonp("http://admin.yudezign.com/contactUs", params)
        .then(res => {
          let data = res;
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          if (data.status == 1) {
            this.$Notice.success({
              title: data.msg || "Notice Success",
              desc: "Submit Successfully!"
            });
          } else {
            this.$Notice.success({
              title: "Notice Error",
              desc: "Please enter the correct information"
            });
          }
        });
    },
    // 谷歌地图初始化
    initMap() {
      let _this = this;
      try {
        _this.map = new google.maps.Map(document.getElementById("map"), {
          center: new google.maps.LatLng(55.378051, -3.435973),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoom: 10,
          // gestureHandling: "greedy"
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        });

        let params = {};
        _this.$http
          .get("http://admin.yudezign.com/index.php/shopAddress", params)
          .then(res => {
            console.log(res.data.data);
            if (res.data.status == 1) {
              _this.locations = res.data.data;
              _this.initAddressSwiper();
              _this.changeLocation(0);
            }
          });
      } catch (e) {
        console.log("google map is display none");
        this.showMap = false;
      }
    },
    // 改变地图位置
    changeLocation(index) {
      let _this = this;
      _this.currentIndex = index;
      this.$Message.config({
        top: 50,
        duration: 2
      });
      this.$Message.info("Position switching, please  wait for a moment");
      var image = {
        // 最好先import
        url: add,
        scaledSize: new google.maps.Size(22, 32)
      };
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: _this.locations[index].address },
        (results, status) => {
          console.log(results, status, results[0].geometry.location);
          if (status === "OK") {
            _this.setMapOnAll(null);
            _this.markers = [];
            var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: _this.map,
              title: _this.locations[index].shop_name,
              icon: image,
              animation: google.maps.Animation.DROP
            });
            _this.markers.push(marker);
            _this.map.setCenter(results[0].geometry.location);
            marker.addListener("click", function() {
              _this.map.setZoom(10);
              _this.map.setCenter(marker.getPosition());
            });
          } else {
            alert(
              "Geocode Maps was not successful for the following reason: " +
                status
            );
          }
        }
      );
    },
    setMapOnAll(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }
  }
};
</script>

<style scoped lang="less">
.footer {
  margin-top: 0.6rem;
  width: 100%;
  box-sizing: border-box;
  #map {
    margin: 0.2rem auto 0rem auto;
    width: 100%;
    height: 300px;
  }
  .address-swiper {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 34;
    .swiper-slide {
      .address-img {
        width: 100%;
        height: auto;
      }
      .shade-box {
        position: absolute;
        z-index: 6;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0rem 0.4rem 0.14rem 0.4rem;
        background: rgba(48, 48, 48, 0.9);
        .location {
          width: 70%;
          font-size: 0.28rem;
          font-family: Roboto;
          font-weight: 300;
          color: white;
          margin-top: 0.1rem;
          .icon-add {
            width: 10px;
            height: 12.5px;
            vertical-align: bottom;
          }
          span {
            display: inline-block;
            vertical-align: bottom;
            line-height: 0.8;
            margin-left: 0.06rem;
          }
        }
        .split-line {
          width: 0.7rem;
          height: 1px;
          margin: 0.18rem 0;
          background: #c9c9c9;
        }
        .full-address {
          font-size: 12px;
          font-family: Roboto;
          font-weight: 300;
          color: white;
          word-break: break-all;
          @media screen and (max-width: 360px) {
            font-size: 12px;
          }
        }
      }
    }
    .swiper-button-prev {
      outline: none;
      width: 0.26rem;
      height: 0.26rem;
      background-size: 0.26rem 0.26rem;
      background-image: url(./prolist-list-l.png);
      right: 0.44rem;
      left: auto;
      top: 3.6rem;
    }

    .swiper-button-next {
      outline: none;
      width: 0.26rem;
      height: 0.26rem;
      background-size: 0.26rem 0.26rem;
      background-image: url(./prolist-list-r.png);
      right: 0.1rem;
      left: auto;
      top: 3.6rem;
    }

    .swiper-container-horizontal.address-swiper > .swiper-pagination-bullets {
      color: white;
      bottom: 60px;
    }
  }
  .title {
    text-align: center;
    font-size: 0.32rem;

    font-weight: 300;
    color: rgba(51, 51, 51, 1);
  }

  .message-box {
    padding: 0.5rem 0.4rem;
    background: #f2f2f2;
    .item {
      margin-top: 0.3rem;
      .name {
        font-size: 0.24rem;

        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        margin-bottom: 0.2rem;
      }
    }
    .security {
      margin-top: 6px;
      display: flex;
      align-items: flex-start;
      img {
        width: 7px;
        height: 7px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 5px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        font-family: Roboto;
        font-weight: 100;
        margin-left: 4px;
        color: rgba(153, 153, 153, 1);
      }
    }
    .submit {
      outline: none;
      margin-top: 1rem;
      border-color: transparent;
      width: 100%;
      font-size: 0.24rem;

      font-weight: 100;
      color: rgba(255, 255, 255, 1);
      background: #32b67a;
    }
  }
  .contact-box {
    background: #272727;
    padding: 0.4rem 0.4rem 0.2rem 0.4rem;
    .title {
      color: white;
      margin-bottom: 0.2rem;
    }
    .item {
      text-align: center;
      margin-top: 0.24rem;
      .icon {
        vertical-align: middle;
        margin-right: 0.12rem;
      }
      .icon-phone {
        width: 0.2rem;
        height: 0.2rem;
      }
      .icon-mail {
        width: 0.24rem;
        height: 0.16rem;
      }
      .icon-add {
        width: 0.18rem;
        height: 0.24rem;
      }
      .text {
        vertical-align: middle;
        font-size: 0.22rem;

        font-weight: 100;
        color: rgba(153, 153, 153, 1);
        line-height: 0.28rem;
      }
    }
    .split-line {
      width: 80%;
      height: 0.04rem;
      background: rgba(57, 57, 57, 1);
      margin: 0.4rem auto 0.2rem auto;
    }
    .about {
      text-align: center;
      width: 100%;
      font-size: 0.24rem;

      font-weight: 100;
      color: rgba(153, 153, 153, 1);
      line-height: 0.28rem;
    }
    .copyright {
      text-align: center;
      width: 100%;
      margin-top: 0.2rem;
      font-size: 0.18rem;

      font-weight: 100;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>
