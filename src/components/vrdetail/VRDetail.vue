<template>
  <div class="vrdetail">
    <div class="banner">
      <div class="swiper-container swiperbanner">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide banner-slide"
            v-for="(item,index) in vrData[id].imgList[materialId].childImgList"
            :key="index"
          >
            <img :src="item.src" alt class="banner-detail" :preview="index" preview-text="描述文字" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiperbanner-pagination"></div>
      </div>
    </div>
    <div class="intro-box">
      <img src="./pr.png" alt class="intro-bg" />
      <div class="content">
        <div class="title">{{vrData[id].title}}</div>
        <div class="split-line black-gold"></div>
        <div class="desc-box">
          <div class="intro-title">Material</div>
          <div class="left">
            <div
              class="left-item"
              v-for="(item,index) in vrData[id].imgList"
              :key="index"
              @click="onChangeMaterial(index)"
              :class="materialId==index?'left-item-active':''"
            >
              <img class="cover" :src="item.src" />
              <div class="name">{{item.title}}</div>
            </div>
          </div>
        </div>
        <div class="split-line split"></div>
        <div class="intro-title">Description</div>

        <div
          class="text"
        >Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.</div>
      </div>
    </div>
    <!-- <div class="vr-btn" @click="intoVRUrl">→ VR PANORAMA</div> -->

    <!-- 预览图片 -->
    <!-- <vue-preview :slides="getImgList()" @close="handleClose" class="hai"></vue-preview> -->
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

// 第一组
import detail110 from "./prolist-detail110.png";
import detail120 from "./prolist-detail120.png";
import detail130 from "./prolist-detail130.png";
import detail111 from "./prolist-detail111.jpg";
import detail112 from "./prolist-detail112.jpg";
import detail113 from "./prolist-detail113.jpg";
import detail114 from "./prolist-detail114.jpg";
import detail115 from "./prolist-detail115.jpg";
import detail116 from "./prolist-detail116.jpg";
import detail121 from "./prolist-detail121.jpg";
import detail122 from "./prolist-detail122.jpg";
import detail123 from "./prolist-detail123.jpg";
import detail124 from "./prolist-detail124.jpg";
import detail125 from "./prolist-detail125.jpg";
import detail126 from "./prolist-detail126.jpg";
import detail131 from "./prolist-detail131.jpg";
import detail132 from "./prolist-detail132.jpg";
import detail133 from "./prolist-detail133.jpg";
import detail134 from "./prolist-detail134.jpg";
import detail135 from "./prolist-detail135.jpg";
import detail136 from "./prolist-detail136.jpg";

//第二组
import detail140 from "./prolist-detail140.png";
import detail150 from "./prolist-detail150.png";
import detail160 from "./prolist-detail160.png";
import detail170 from "./prolist-detail170.png";
import detail141 from "./prolist-detail141.jpg";
import detail142 from "./prolist-detail142.jpg";
import detail143 from "./prolist-detail143.jpg";
import detail144 from "./prolist-detail144.jpg";
import detail145 from "./prolist-detail145.jpg";
import detail146 from "./prolist-detail146.jpg";
import detail151 from "./prolist-detail151.jpg";
import detail152 from "./prolist-detail152.jpg";
import detail153 from "./prolist-detail153.jpg";
import detail154 from "./prolist-detail154.jpg";
import detail155 from "./prolist-detail155.jpg";
import detail156 from "./prolist-detail156.jpg";
import detail161 from "./prolist-detail161.jpg";
import detail162 from "./prolist-detail162.jpg";
import detail163 from "./prolist-detail163.jpg";
import detail164 from "./prolist-detail164.jpg";
import detail165 from "./prolist-detail165.jpg";
import detail166 from "./prolist-detail166.jpg";
import detail171 from "./prolist-detail171.jpg";
import detail172 from "./prolist-detail172.jpg";
import detail173 from "./prolist-detail173.jpg";
import detail174 from "./prolist-detail174.jpg";
import detail175 from "./prolist-detail175.jpg";
import detail176 from "./prolist-detail176.jpg";

//第三组
import detail180 from "./prolist-detail180.png";
import detail181 from "./prolist-detail181.jpg";
import detail182 from "./prolist-detail182.jpg";
import detail183 from "./prolist-detail183.jpg";
import detail184 from "./prolist-detail184.jpg";
import detail185 from "./prolist-detail185.jpg";
import detail186 from "./prolist-detail186.jpg";

//第四组
import detail190 from "./prolist-detail190.png";
import detail200 from "./prolist-detail200.png";
import detail210 from "./prolist-detail210.png";
import detail191 from "./prolist-detail191.jpg";
import detail192 from "./prolist-detail192.jpg";
import detail193 from "./prolist-detail193.jpg";
import detail194 from "./prolist-detail194.jpg";
import detail195 from "./prolist-detail195.jpg";
import detail196 from "./prolist-detail196.jpg";
import detail201 from "./prolist-detail201.jpg";
import detail202 from "./prolist-detail202.jpg";
import detail203 from "./prolist-detail203.jpg";
import detail204 from "./prolist-detail204.jpg";
import detail205 from "./prolist-detail205.jpg";
import detail206 from "./prolist-detail206.jpg";
import detail211 from "./prolist-detail211.jpg";
import detail212 from "./prolist-detail212.jpg";
import detail213 from "./prolist-detail213.jpg";
import detail214 from "./prolist-detail214.jpg";
import detail215 from "./prolist-detail215.jpg";
import detail216 from "./prolist-detail216.jpg";

//第五组
import detail220 from "./prolist-detail220.png";
import detail230 from "./prolist-detail230.png";
import detail240 from "./prolist-detail240.png";
import detail250 from "./prolist-detail250.png";
import detail260 from "./prolist-detail260.png";
import detail270 from "./prolist-detail270.png";
import detail221 from "./prolist-detail221.jpg";
import detail222 from "./prolist-detail222.jpg";
import detail223 from "./prolist-detail223.jpg";
import detail224 from "./prolist-detail224.jpg";
import detail225 from "./prolist-detail225.jpg";
import detail226 from "./prolist-detail226.jpg";
import detail231 from "./prolist-detail231.jpg";
import detail232 from "./prolist-detail232.jpg";
import detail233 from "./prolist-detail233.jpg";
import detail234 from "./prolist-detail234.jpg";
import detail235 from "./prolist-detail235.jpg";
import detail236 from "./prolist-detail236.jpg";
import detail241 from "./prolist-detail241.jpg";
import detail242 from "./prolist-detail242.jpg";
import detail243 from "./prolist-detail243.jpg";
import detail244 from "./prolist-detail244.jpg";
import detail245 from "./prolist-detail245.jpg";
import detail246 from "./prolist-detail246.jpg";
import detail251 from "./prolist-detail251.jpg";
import detail252 from "./prolist-detail252.jpg";
import detail253 from "./prolist-detail253.jpg";
import detail254 from "./prolist-detail254.jpg";
import detail255 from "./prolist-detail255.jpg";
import detail256 from "./prolist-detail256.jpg";
import detail261 from "./prolist-detail261.jpg";
import detail262 from "./prolist-detail262.jpg";
import detail263 from "./prolist-detail263.jpg";
import detail264 from "./prolist-detail264.jpg";
import detail265 from "./prolist-detail265.jpg";
import detail266 from "./prolist-detail266.jpg";
import detail271 from "./prolist-detail271.jpg";
import detail272 from "./prolist-detail272.jpg";
import detail273 from "./prolist-detail273.jpg";
import detail274 from "./prolist-detail274.jpg";
import detail275 from "./prolist-detail275.jpg";
import detail276 from "./prolist-detail276.jpg";

//第六组
import detail280 from "./prolist-detail280.png";
import detail281 from "./prolist-detail281.jpg";
import detail282 from "./prolist-detail282.jpg";
import detail283 from "./prolist-detail283.jpg";
import detail284 from "./prolist-detail284.jpg";
import detail285 from "./prolist-detail285.jpg";
import detail286 from "./prolist-detail286.jpg";

export default {
  data() {
    return {
      materialId: 0, //当前选中的材料id,默认为0
      swiperBanner: null,
      vrData: [
        {
          src: pro1,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 0, //id区分不同图片作用
          title: "GEMSTONE",
          imgList: [
            {
              src: detail110,
              title: "Crystal Slate",
              childImgList: [
                {
                  src: detail111,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail112,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail113,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail114,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail115,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail116,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail120,
              title: "Beige Moonstone",
              childImgList: [
                {
                  src: detail121,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail122,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail123,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail124,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail125,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail126,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail130,
              title: "Snow Pearl",
              childImgList: [
                {
                  src: detail131,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail132,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail133,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail134,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail135,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail136,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        },
        {
          src: pro2,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 1,
          title: "HERITAGE",
          imgList: [
            {
              src: detail140,
              title: "Ivory White",
              childImgList: [
                {
                  src: detail141,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail142,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail143,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail144,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail145,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail146,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail150,
              title: "Black Onyx",
              childImgList: [
                {
                  src: detail151,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail152,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail153,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail154,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail155,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail156,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail160,
              title: "Morning Dove",
              childImgList: [
                {
                  src: detail161,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail162,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail163,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail164,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail165,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail166,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail170,
              title: "Manila Beige",
              childImgList: [
                {
                  src: detail171,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail172,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail173,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail174,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail175,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail176,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        },
        {
          src: pro3,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 2,
          title: "ALSKA",
          imgList: [
            {
              src: detail180,
              title: "Polar White",
              childImgList: [
                {
                  src: detail181,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail182,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail183,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail184,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail185,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail186,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        },
        {
          src: pro4,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 3,
          title: "EXOTIC",
          imgList: [
            {
              src: detail190,
              title: "Natural Acacia",
              childImgList: [
                {
                  src: detail191,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail192,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail193,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail194,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail195,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail196,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail200,
              title: "Amazon Pine",
              childImgList: [
                {
                  src: detail201,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail202,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail203,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail204,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail205,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail206,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail210,
              title: "Moonlight Serenade",
              childImgList: [
                {
                  src: detail211,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail212,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail213,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail214,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail215,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail216,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        },
        {
          src: pro5,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 4,
          title: "FARMHOUSE",
          imgList: [
            {
              src: detail220,
              title: "Weathered Bark",
              childImgList: [
                {
                  src: detail221,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail222,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail223,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail224,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail225,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail226,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail230,
              title: "Ivory Tusk",
              childImgList: [
                {
                  src: detail231,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail232,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail233,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail234,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail235,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail236,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail240,
              title: "Ash Taupe",
              childImgList: [
                {
                  src: detail241
                },
                {
                  src: detail242
                },
                {
                  src: detail243
                },
                {
                  src: detail244
                },
                {
                  src: detail245
                },
                {
                  src: detail246
                }
              ]
            },
            {
              src: detail250,
              title: "Silver Gray",
              childImgList: [
                {
                  src: detail251,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail252,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail253,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail254,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail255,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail256,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail260,
              title: "Navy Gray",
              childImgList: [
                {
                  src: detail261,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail262,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail263,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail264,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail265,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail266,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            },
            {
              src: detail270,
              title: "Mossy Oak",
              childImgList: [
                {
                  src: detail271,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail272,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail273,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail274,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail275,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail276,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        },
        {
          src: pro6,
          text:
            "Mr. Zhang, with a family of five, has many requirements for thekitchen. He likes the dark wood color on the door, dark grey color on the countertop. In addition to the most basic require-ments of a reasonable layout, color matching, he hopes that the kitchen can have more storage functions. he hopes that the kitchen can have more storage functions.",
          vrUrl: "http://bimosscdn.yfway.com/project/pano/32762724/index.html",
          id: 5, //id区分不同图片作用
          title: "UPTOWN",
          imgList: [
            {
              src: detail280,
              title: "White Linen",
              childImgList: [
                {
                  src: detail281,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail282,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail283,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail284,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail285,
                  title: "",
                  w: 1431,
                  h: 954
                },
                {
                  src: detail286,
                  title: "",
                  w: 1431,
                  h: 954
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    id: function() {
      return this.$route.query.id ? this.$route.query.id : 0;
    }
  },
  watch: {
    id: function(val, oldVal) {
      this.materialId = 0;
    }
  },
  mounted() {
    this.initSwiper();
    console.log(this, this.$preview);
  },
  methods: {
    intoVRUrl() {
      console.log("进入");
      let url = this.vrData[this.id].vrUrl;
      window.open(url);
    },
    //改变材料
    onChangeMaterial(index) {
      this.materialId = index;
    },

    //预览图片
    getImgList() {
      let list = this.vrData[this.id].imgList[this.materialId].childImgList;
      let tempArr = [];
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        tempArr.push({
          src: item.src,
          msrc: item.src,
          alt: "",
          title: item.title,
          w: 1431,
          h: 954
        });
        if (i == list.length - 1) {
          return tempArr;
        }
      }
    },
    //
    onShow() {
      let hai = document.querySelector(".hai img");
      console.log(hai);
      // hai.onclick();
    },
    handleClose() {},

    initSwiper: function() {
      this.swiperBanner = new Swiper(".swiper-container.swiperbanner", {
        loop: true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 1000
        // },
        slidesPerView: 1,
        pagination: {
          el: ".swiperbanner-pagination",
          clickable: true
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.vrdetail {
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .intro-box {
    padding-top: 0.6rem;
    position: relative;
    .intro-bg {
      width: 100%;
    }
    .content {
      position: absolute;
      z-index: 21;
      top: 0.4rem;
      left: 0;
      width: 100vw;
      .title {
        font-size: 0.36rem;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.4rem;
      }
      .split-line {
        width: 1.24rem;
        height: 0.03rem;
        background: #32b67a;
        margin: 0.2rem 0 0.2rem 0.4rem;
      }
      .desc-box {
        .name {
          font-size: 0.28rem;
          font-family: "Roboto-Regular";
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 0.22rem;
        }
        .desc-img {
          margin: 0.2rem 0;
          img {
            width: 100%;
          }
        }
        .desc {
          font-size: 0.24rem;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
        }
        .left {
          width: 100vw;
          box-sizing: border-box;
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          ::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
            color: transparent;
          }
          .left-item {
            flex-shrink: 0;
            width: 1.6rem;
            height: 2.04rem;
            box-sizing: border-box;
            padding-top: 0.2rem;
            display: inline-block;
            margin-top: 0.2rem;
            vertical-align: top;
            margin-right: 0.1rem;
            .cover {
              border-radius: 50%;
              width: 0.9rem;
              height: 0.9rem;
              margin: 0 auto;
              display: block;
            }
            .name {
              width: 1.2rem;
              font-size: 0.24rem;
              font-family: "Roboto";
              font-weight: 300;
              color: rgba(102, 102, 102, 1);
              text-align: center;
              margin: 0.16rem auto 0 auto;
              line-height: 0.3rem;
            }
            &.left-item-active {
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 0.1rem 0.24rem 0px rgba(97, 97, 97, 0.28);
              border-bottom: 2px solid rgba(50, 182, 122, 1);
            }
            &:first-child {
              margin-left: 0.4rem;
            }
            &:last-child {
              margin-right: 0.4rem;
            }
          }
        }
        .right {
          display: inline-block;
          vertical-align: top;
          margin-left: 0.9rem;
        }
      }
      .split-line.split {
        margin: 0.4rem auto;
        width: 90vw;
        height: 1px;
        background: rgba(225, 225, 225, 1);
      }
      .text {
        font-size: 0.28rem;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 0.36rem;
        word-break: break-all;
        margin: 0 0.4rem;
        padding-bottom: 1rem;
        font-family: "Roboto";
      }
    }
  }
  .vr-btn {
    position: fixed;
    z-index: 41;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    background: #32b67a;
    font-size: 0.28rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
  }
  .intro-title {
    font-size: 0.28rem;
    font-family: "Roboto";
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.22rem;
    margin: 0.4rem 0 0.2rem 0.4rem;
  }
}
</style>
<style>
.vrdetail .swiper-pagination .swiper-pagination-bullet {
  width: 0.1rem;
  height: 0.1rem;
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0;
  margin: 0 0.06rem;
  border: 0;
  border-radius: 50%;
}
.vrdetail .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 0.1rem;
  height: 0.1rem;
  background: #32b67a;
  border: transparent;
  outline: none;
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