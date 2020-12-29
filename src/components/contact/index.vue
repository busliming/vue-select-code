<template>
  <div class="app-btn-group">
    <div class="app-btn">
      <div
        class="img-div cursor-pointer"
        @click="window.open('tel:639516666666', '_self')"
      >
        <img src="../../../public/img/contact/icon_phone.svg" />
        <div class="text">Telephone</div>
      </div>
      <div class="img-div">
        <a
          href="https://api.whatsapp.com/send?phone=639516666666"
          target="_blank"
        >
          <img src="../../../public/img/contact/icon_whatsapp.svg" />
          <div class="text">Whatsapp</div>
        </a>
      </div>
      <div class="img-div">
        <a href="https://t.me/businessOBGM" target="_blank">
          <img src="../../../public/img/contact/icon_telegram.svg" />
          <div class="text">Telegram</div>
        </a>
      </div>
      <div class="img-div">
        <a href="skype:live:.cid.e99e564c0b9126ee?chat">
          <img src="../../../public/img/contact/icon_skype.svg" />
          <div class="text">Skype</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app-btn {
  position: fixed;
  text-align: center;
  border-radius: 33px;
  height: 66px;
  width: 280px;
  left: 50%;
  transform: translateX(-140px);
  background: linear-gradient(to right, #00aeff, #702ae2);
  z-index: 40;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 10px;
  .text {
    font-weight: 300;
    transform: scale(0.8);
    margin-top: 5px;
  }
  .img-div {
    float: left;
    width: 25%;
    // margin-top: 5px;
    img {
      width: 30px;
      height: 30px;
    }
    a {
      color: white !important;
    }
  }
}
</style>