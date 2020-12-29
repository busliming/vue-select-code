<template>
  <div class="left">
    <template v-for="(letters, key) in letterCode">
      <div class="list" v-if="key !== 'undefined'" :ref="key" :key="key">
        <div class="letter">{{ key }}</div>
        <template v-for="(item, index) in letters">
          <div class="item" :key="`letter-${index}`" @click="handleClickLetter(item)">
            <div class="item-left">{{ item.name }} ({{ item.pinyin }})</div>
            <div class="item-right">+ {{ item.tel }}</div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    letterCode: {
      type: Object,
      required: true,
    },
    letter: {
      type: String,
    },
  },
  methods: {
    handleClickLetter(val){
      console.log(val.tel)
      this.$router.push({
        name: 'login',
        params: {
          code: val.tel
        }
      })
    }
  },
  watch: {
    letter(val) {
      if (val) {
        const ele = this.$refs[this.letter][0];
        const target = ele.offsetTop - 54;
        window.scrollTo({
          top: target,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.left {
  width: 100vw;
  // height: calc(100vh - 54px);
  height: 100%;
  background: #f6f7fa;
}
.list {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.list .letter {
  padding: 10px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.list .item {
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 14px;
  background: #fff;
  line-height: 24px;
  color: #323233;
  padding: 10px 40px 10px 16px;
}
.list .item::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>