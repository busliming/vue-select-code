<template>
  <nav class="nav">
    <div class="nav-left">
      <img :src="img_menu1" alt="">
    </div>
    <div class="nav-center">
      <img :src="img" alt="">
    </div>
    <div class="nav-right">EN</div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../../public/img/logo_b.svg"), //顶部导航logo
      img1: require("../../../public/img/logo_w.svg"),
      img_menu: require("../../../public/img/icon_meun.svg"),
      img_menu1: require("../../../public/img/icon_meun1.svg"),
    }
  },
}
</script>

<style lang="less" scoped>
.nav{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 2;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-left{
    margin-left: 20px;
  }
  .nav-center{
    width: 120px;
    height: 40px;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .nav-right{
    width: 36px;
    height: 20px;
    border: 1px solid #FFFFFF;
    border-radius: 18px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 20px;
    text-align: center;
    margin-right: 20px;
  }
}
</style>