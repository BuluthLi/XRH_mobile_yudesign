<template>
  <div class="header">
    <div class="blank-block"></div>
    <div class="normal">
      <div class="logo-box">
        <img src="./LOGO.png" alt />
      </div>
      <div class="menu-box" @click="onChangeShowItem(true)">
        <img src="./icon-menu.png" alt />
      </div>
    </div>
    <div class="show" v-show="showItem">
      <div class="normal">
        <div class="logo-box">
          <img src="./LOGO.png" alt />
        </div>
        <div class="menu-box" style="width:0.36rem;height:auto;" @click="onChangeShowItem(false)">
          <img src="./XX.png" alt />
        </div>
      </div>
      <div class="item-box">
        <div
          class="item"
          :class="{'active':index==current}"
          v-for="(item,index) in itemList"
          :key="index"
          @click="onChangePath(item.path)"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showItem: false,
      height: 0,
      itemList: [
        {
          name: "HOME",
          path: "/home",
          id: 0
        },
        {
          name: "COLLECTIONS",
          path: "/productlist",
          id: 1
        },
        {
          name: "ABOUT US",
          path: "/about",
          id: 2
        },
        {
          name: "JOIN US",
          path: "/join",
          id: 3
        }
      ]
    };
  },
  computed: {
    current: function() {
      // console.log(this.$route.path);
      for (let i = 0; i < this.itemList.length; i++) {
        if (this.itemList[i].path == this.$route.path) {
          return i;
        }
        if (this.$route.path == "/vrdetail") {
          return 1;
        }
      }
      return 0;
    }
  },
  mounted: function() {
    let target = document.documentElement || document.body;
    let targetHeight = window.innerHeight || target.clientHeight;
    this.height = targetHeight;
  },
  methods: {
    onChangeShowItem: function(flag) {
      this.showItem = flag;
      this.$store.dispatch("user/acChangeValue", !flag);
    },
    onChangePath: function(path) {
      if (this.$route.path == path) return;
      if (path == "/home") {
        this.$store.dispatch("user/acChangeValue", true);
      }
      this.showItem = false;
      window.scrollTo(0, 0);
      this.$router.push({
        path: path,
        query: {}
      });
    }
  }
};
</script>

<style scoped lang="less">
.header {
  .blank-block {
    width: 100%;
    height: 0.88rem;
  }
  .normal {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    background: #24653f;
    display: flex;
    padding: 0 0.4rem;
    align-items: center;
    justify-content: space-between;
    .logo-box {
      width: 2.16rem;
      height: 0.48rem;
      img {
        vertical-align: middle;
        width: 100%;
      }
    }
    .menu-box {
      width: 0.4rem;
      height: auto;
      cursor: pointer;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
  .show {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    background: #2d2d2d;
    animation: fade 300ms ease-in-out;
    animation-fill-mode: forwards;
    .item-box {
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      padding-top: 1.2rem;
      .item {
        margin: 0.74rem 0;
        width: 100%;
        text-align: center;
        font-size: 0.48rem;
        font-weight: 300;
        color: rgba(153, 153, 153, 1);
        cursor: pointer;
        position: relative;
        &.active {
          color: white;
        }
        &.active::before {
          content: "";
          position: absolute;
          top: -14px;
          left: 50%;
          width: 2px;
          height: 10px;
          background: white;
        }
        &.active::after {
          content: "";
          position: absolute;
          bottom: -14px;
          left: 50%;
          width: 2px;
          height: 10px;
          background: white;
        }
      }
    }
    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
