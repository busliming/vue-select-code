<template>
  <div class="right">
    <template v-for="(letter, i) in lettes">
      <div
        class="list"
        v-if="letter !== 'undefined'"
        @click="handleClickLetter(letter)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="i"
        :key="i"
      >
        {{ letter }}
      </div>
    </template>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  props: {
    letterCode: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showTouch: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    lettes() {
      return Object.keys(this.letterCode);
    },
  },
  updated() {
    if(this.lettes.length > 0){
      this.startY =  this.$refs[0][0].offsetTop;
    }  
  },
  methods: {
    handleClickLetter(letter) {
      Toast(letter);
      this.$emit("clickLetter", letter);
    },
    handleTouchStart() {
      this.showTouch = true;
    },
    handleTouchMove(e) {
      if (this.showTouch) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      }
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - this.startY;
        const index = Math.floor((touchY - this.startY) / 24);
        if (index >= 0 && index <= this.lettes.length) {
          this.$emit('clickLetter',this.lettes[index])
          Toast(this.lettes[index]);
        }
      },20);
    },
    handleTouchEnd() {
      this.showTouch = false;
    },
  },
};
</script>

<style lang="less" scoped>
.right {
  width: 30px;
  height: calc(100vh - 54px);
  background: #242b38;
  color: white;
  position: fixed;
  right: 0;
  top: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  font-size: 12px;
  line-height: 24px;
}
</style>