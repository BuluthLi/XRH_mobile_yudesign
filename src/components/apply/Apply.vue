<template>
  <div class="apply" :style="{height:height+'px',minHeight:height+'px'}">
    <img src="./apply-bg.jpg" alt class="bg" />
    <div class="input-box">
      <div class="input-item">
        <div class="item-name">Name:</div>
        <input
          type="text"
          class="real-input"
          name="name"
          v-model="name"
          placeholder="enter the name(Required Filed)"
        />
      </div>
      <div class="input-item">
        <div class="item-name">Phone:</div>
        <input
          type="text"
          name="phone"
          v-model="phone"
          class="real-input"
          placeholder="enter the phone(Required Filed)"
        />
      </div>
      <div class="input-item">
        <div class="item-name">Province:</div>
        <input
          type="text"
          class="real-input"
          name="province"
          v-model="province"
          placeholder="enter the province"
        />
      </div>
      <div class="security">
        <img :src="securityImg" alt @click="onChangeSecurity" />
        <span>By using this form you agree with the storage and handling of your data by this Yudezign.</span>
      </div>
      <div class="submit-btn" @click="onApply">SUBMIT</div>
      <!-- <div class="submit-btn">SUBMIT</div> -->
    </div>
  </div>
</template>
<script>
import get from "./get.png";
import no from "./no.png";
export default {
  data() {
    return {
      height: 0,
      name: "",
      phone: "",
      province: "",
      security: 1
    };
  },
  computed: {
    securityImg() {
      return this.security == 1 ? get : no;
    }
  },
  mounted() {
    let target = document.documentElement || document.body;
    let targetHeight = window.innerHeight || target.clientHeight;
    let header = document
      .getElementsByClassName("header")[0]
      .getBoundingClientRect().height;
    this.height = targetHeight - header;
  },
  methods: {
    onChangeSecurity() {
      this.security = !this.security;
    },
    onApply: function() {
      let phone = this.phone.trim();
      let name = this.name.trim();
      let province = this.province.trim();
      if (!phone || !name) {
        this.$Notice.error({
          title: "Notice Error",
          desc: "Please enter the correct information"
        });
        return;
      }
      // let params = new window.FormData();
      // params.append("name", name);
      // params.append("phone", phone);
      // params.append("province", province);

      let params = {
        name: name,
        phone: phone,
        province: province
      };

      this.$http
        .jsonp("http://admin.yudezign.com/appoint", params)
        .then(res => {
          console.log(res);
          let data = res;
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          console.log(data);
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
    }
  }
};
</script>
<style lang="less" scoped>
.apply {
  background: #2d2d2d;
  overflow: hidden;
  .bg {
    width: 100%;
    height: auto;
    display: block;
  }
  .input-box {
    width: 100%;
    position: absolute;
    z-index: 18;
    left: 0;
    top: 4rem;
    height: 200px;
    padding: 0 0.4rem;
    .input-item {
      margin-top: 0.3rem;
      .item-name {
        font-size: 0.24rem;

        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      .real-input {
        width: 100%;
        height: 0.6rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(128, 128, 128, 1);
        border-radius: 0.04rem;
        margin-top: 0.1rem;
        padding-left: 0.1rem;
        outline: none;
        &::placeholder {
          color: #cdcdcd;
        }
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
    .submit-btn {
      margin-top: 1.4rem;
      font-size: 0.24rem;
      font-weight: 100;
      color: rgba(255, 255, 255, 1);
      height: 0.6rem;
      line-height: 0.6rem;
      background: #32b67a;
      border-radius: 0.04rem;
      text-align: center;
    }
  }
}
</style>