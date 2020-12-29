<template>
  <div class="bottom">
    <div class="top">
      <div></div>
      <div class="circle">
        <img src="../../../public/img/bottom/hz_ys_2@2x.png" alt="" />
      </div>
    </div>
    <div class="p-content">
      <div class="p-row">
        <div class="p-list">
          <template v-for="(item, index) in comList">
            <div
              :key="'comList' + item.id"
              class="text"
              :class="index === 0 ? 'fw' : ''"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
        <div class="p-list">
          <template v-for="(item, index) in supList">
            <div
              :key="'supList' + item.id"
              class="text"
              :class="index === 0 ? 'fw' : ''"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
        <div class="p-list">
          <template v-for="(item, index) in useList">
            <div
              :key="'useList' + item.id"
              class="text"
              :class="index === 0 ? 'fw' : ''"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
      </div>
      <!-- <div class="list" v-for="(item, index) in comList" :key="'comList'+item.id">
        <div class="text" :class="index === 0 ? 'fw' : ''">{{ item.text }}</div>
      </div> -->
      <!-- <div class="list" v-for="(item, index) in comList" :key="'comList1'+item.id">
        <div class="text" :class="index === 0 ? 'fw' : ''">{{ item.text }}</div>
      </div>
      <div class="list" v-for="(item, index) in comList" :key="'comList2'+item.id">
        <div class="text" :class="index === 0 ? 'fw' : ''">{{ item.text }}</div>
      </div> -->
    </div>
    <div class="seprator"></div>
    <div class="partner">
      <template v-for="part in parterList">
        <div class="list" :key="part.id">
          <div class="icon" v-if="[1, 2, 5, 6].includes(part.id)">
            <img :src="part.img" alt="" />
          </div>
          <div class="text" v-else>
            <template v-for="(item, ind) in part.data">
              <div :key="'text' + ind">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class="seprator"></div>
    <div class="desc">
      <template v-for="(item, index) in descList">
        <div class="text" :key="'desc' + index">{{ item.text }}</div>
      </template>
      <div class="copy">Copyright © 2014-2020 OB GAME. All Rights Reserved</div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comList: [
        { id: 1, text: "COMPANY" },
        { id: 2, text: "About Us" },
        { id: 3, text: "Press" },
        { id: 4, text: "Contact" },
      ],
      supList: [
        { id: 11, text: "SUPPORT" },
        { id: 22, text: "FAQs" },
        { id: 33, text: "Press" },
        { id: 44, text: "Health&Safety" },
      ],
      useList: [
        { id: 111, text: "USEFUL LINKS" },
        { id: 222, text: "About Us" },
        { id: 333, text: "Press" },
      ],
      parterList: [
        { id: 1, img: require("../../../public/img/bottom/icon11.png") },
        { id: 2, img: require("../../../public/img/bottom/icon222.png") },
        { id: 3, data: ["欧洲马耳他博彩管理局", "MGA"] },
        { id: 4, data: ["英国GC监督委员会", "Gambling Commission"] },
        { id: 5, img: require("../../../public/img/bottom/icon333.png") },
        { id: 6, img: require("../../../public/img/bottom/icon444.png") },
        { id: 7, data: ["菲律宾政府博彩委员会", "PAGCOR"] },
        { id: 8, data: ["英属维尔京群岛认证", "BVI"] },
      ],
      descList: [
        {
          id: "a1",
          text:
            "OB游戏拥有欧洲马耳他博彩管理局、（MGA）英国GC监督委员会（Gambling Commission)、菲律宾政府博彩委员会（PAGCOR）、颁发的合法执照的",
        },
        {
          id: "a2",
          text:
            "OB游戏是受国际博彩协会认可的合法博彩公司。进行注册并娱乐前，请确保您年满18周岁！",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bottom {
  // margin: 20px;
 
  .top {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .circle {
      width: 32px;
      height: 32px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        vertical-align: top;
      }
    }
  }
  .p-content {
    width: 90%;
    margin: 0 auto;
    .p-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .p-list {
        width: 48%;
        margin-top: 20px;
        .text {
          margin-bottom: 20px;
          font-size: 14px;
          color: #737b8d;
          letter-spacing: 2px;
        }
        .fw {
          font-weight: bold;
        }
      }
    }
  }
  .seprator {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 1px;
    opacity: 0.1;
    background: #6b7284;
  }
  .partner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      width: 48%;
      text-align: center;
      vertical-align: middle;
      .icon {
        height: 56px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text {
        font-size: 10px;
        color: #737b8d;
        letter-spacing: 0.83px;
        text-align: center;
      }
    }
  }
  .desc {
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    color: #737b8d;
    letter-spacing: 1px;
    text-align: center;
    line-height: 20px;
    .text {
      margin-bottom: 15px;
    }
    .copy {
      opacity: 0.6;
      font-size: 12px;
      color: #737b8d;
      letter-spacing: 1.71px;
      text-align: center;
    }
  }
  .bg {
    width: 100%;
    margin-top: 100px;
    height: 20px;
    background: linear-gradient(103deg, #526bff 11%, #47bfff 100%);
    border-radius: 30px 30px 0 0;
  }
}
</style>