<template>
  <div id="app">
    <van-nav-bar
      title="我的套餐"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active" animated>
      <van-tab title="待使用">内容 1</van-tab>
      <van-tab title="使用记录">内容 2</van-tab>
      <van-tab title="已过期">内容 3</van-tab>
    </van-tabs>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <div class="text" style="" v-copy="'你好'">标题</div>
      <div class="text1" style="" v-copy></div>
      <div class="text" style="" v-copy="'你好'">标题</div>
      <div class="text1" style="" v-copy></div>
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
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
  methods: {
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

.text {
  width: 300px;
  height: 300px;
  background: red;
  font-size: 36px;
}

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
