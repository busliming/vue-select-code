<template>
  <div class="letter">
    <li
      :class="activeKey === index ? 'active' : ''"
      :ref="item"
      v-for="(item, index) in letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick(item, index)"
    >
      {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  name: "rightLetter",
  props: {
    cities: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeKey: '',
      startY: 40,
      touchStatus: false,
      timer: null,
    };
  },
  computed: {
    letters() {
      return Object.keys(this.cities);
    },
  },
  // 生命周期函数
  // updated() {
  //   console.log("-----------------");
  //   this.startY = this.$refs["A"][0].offsetTop; // A字母距离滚动条顶部距离
  //   console.log("updated---> ", this.startY);
  // },
  methods: {
    handleLetterClick(item, index) {
      this.activeKey = index;
      console.log(item);
      this.$emit('change',item)
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - this.startY;
          const index = Math.floor((touchY - this.startY) / 24); // 滑动到当前第几个字母的下标
          if (index >= 0 && index <= this.letters.length) {
            // console.log(this.letters[index]);
            this.activeKey = index;
            this.$emit('change',this.letters[index])
          }
        }, 20);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="less" scoped>
.letter {
  margin-top: 54px;
  position: fixed;
  width: 30px;
  height: calc(100% - 54px);
  background: #404758;
  color: #ffffff;
  right: 0;
  top: 0;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding-top: 40px;
}

li {
  font-size: 12px;
  width: 30px;
  height: 24px;
  line-height: 24px;
  padding: 0px 4px;
  background-color: #404758;
  color: #ffffff;
  &.active {
    background-color: white;
    color: #404758;
    border-left: 3px solid red;
  }
}
.van-sidebar-item {
  font-size: 12px;
  width: 30px;
  height: 24px;
  line-height: 24px;
  padding: 0px 4px;
  background-color: #404758;
  color: #ffffff;
}

.van-sidebar-item--select,
.van-sidebar-item--select:active {
  background-color: white;
  color: #404758;
}
</style>