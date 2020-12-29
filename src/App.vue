<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "1213",
      count: 0,
      isLoading: false,
      active: 1,
    };
  },
  created() {
    // this.forbiddenDo()
  },
  mounted(){
    window.onresize = () => {
      console.log('窗口发生变化')
      this.set_window_size_info({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
  },
  methods: {
    ...mapActions(['set_window_size_info']),
    forbiddenDo() {
      document.body.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)
        },
        { passive: false }
      );
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}

ul,
li {
  list-style: none;
}

// .text {
//   width: 300px;
//   height: 300px;
//   background: red;
//   font-size: 36px;
// }

.text1 {
  width: 100px;
  height: 100px;
  background: blue;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.van-nav-bar .van-icon {
  color: black;
  font-weight: bold;
}
</style>
