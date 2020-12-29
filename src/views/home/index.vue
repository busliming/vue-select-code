<template>
  <div class="home">
    <navBar></navBar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item.id"
        ><img v-lazy="item.img" alt="" srcset=""
      /></van-swipe-item>
    </van-swipe>
    <section class="server">
      <div class="server-bg"></div>
      <div class="server-title">
        <div class="server-title-left">
          <div class="server-title-left-en">Service Advantage</div>
        </div>
        <!-- <div class="server-title-right"></div> -->
        <div class="server-title-right-space"></div>
        <div class="server-title-right-title">我们的服务特点</div>
        <div class="server-title-right-space1"></div>
      </div>
      <div class="server-ad">
        <div
          class="server-ad-list"
          v-for="(item, index) in serversList"
          :key="index"
        >
          <div class="server-ad-title">
            <div class="left"><img :src="item.img" alt="" srcset="" /></div>
            <div class="right">
              <div class="zh">{{ item.zh }}</div>
              <div class="en">{{ item.en.toUpperCase() }}</div>
            </div>
          </div>
          <div class="server-ad-text">{{ item.text }}</div>
        </div>
      </div>
    </section>
    <section class="company">
      <div class="company-bg"></div>
      <div class="company-content">
        <div class="company-title">
          <div class="top">
            <img src="../../../public/img/com/ln_ys_1@2x.png" alt="" />
            <div class="space"></div>
          </div>
          <div class="middle">公司理念</div>
          <div class="bottom">
            <div class="space"></div>
            <div class="text">About Us</div>
          </div>
        </div>
        <div class="company-circle">
          <img src="../../../public/img/com/ln_ys_5@2x.png" alt="" srcset="" />
        </div>
        <div class="company-center">
          <img src="../../../public/img/com/ys_7@2x.png" alt="" srcset="" />
        </div>
        <div class="company-left">
          <img
            class="company-left-animation"
            src="../../../public/img/com/ln_ys_2@2x.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="company-right">
          <img src="../../../public/img/com/ln_ys_3@2x.png" alt="" srcset="" />
        </div>
        <div class="company-text">
          <div class="company-text-zh">
            OB游戏立足亚洲，面向全球市场，构建夯实基础，将亚博游戏打造成行业内的服务领导者，技术标杆企业。
          </div>
          <div class="company-text-zh">
            致力成为亚洲最佳的综合IT技术服务合作伙伴。我们将秉承以高品质、高素质、高效率的服务，把公司建设成为全球公认的综合型IT技术旗舰企业，更好地回馈客户、股东、公司员工及广大社会公众。
          </div>
          <div class="company-text-en">
            The industry elite team is built to create professional leading
            technology. Through the ultimate aesthetics, customer trust and
            diversity of game API integration are the industry's forefront.?
          </div>
        </div>
        <div class="company-btn">联系我们 →</div>
      </div>
      <div class="company-bg1"></div>
    </section>
    <section class="game">
      <div class="game-title">
        <div class="game-left">
          <div class="game-space"></div>
          <div class="game-cn">六大游戏介绍</div>
          <div class="game-en">Gaming Introduction</div>
          <div class="game-space game-space-right"></div>
        </div>
        <div class="game-right">
          <img src="../../../public/img/com/game_ys_2@2x.png" />
        </div>
      </div>
      <div class="game-body-bg">
        <div class="game-bg-cricle"></div>
        <div class="game-bg-cricle-left"></div>
        <div class="game-body">
          <van-swipe
            class="my-swipe-game"
            :autoplay="5000"
            :show-indicators="false"
            ref="swipe"
            @change="onChange"
          >
            <van-swipe-item
              :name="item.id"
              :key="`games-img-carousel_${index}`"
              v-for="(item, index) in games_carousel_list"
            >
              <div class="game-body-content">
                <div class="game-body-left">
                  <div class="game-body-logo">
                    <img :src="item.img_logo" alt="" />
                  </div>
                  <div class="game-body-text">
                    <div
                      v-for="(it, ind) in item.text_list"
                      :key="'text_list' + ind"
                    >
                      <img
                        src="../../../public/img/com/game_ys_3@2x.png"
                        width="10"
                      />
                      <span class="text">{{ it }}</span>
                    </div>
                  </div>
                  <div class="game-body-play">
                    <img
                      v-if="item.id === 'games_1'"
                      src="../../../public/img/com/zr_ys_2@2x.png"
                      alt=""
                      class="circle"
                    />
                    <img
                      v-if="item.id === 'games_2'"
                      src="../../../public/img/com/ty_ys_2@2x.png"
                      alt=""
                      class="circle"
                    />
                  </div>
                  <div class="game-body-play-cp" v-if="item.id === 'games_5'">
                    <img
                      src="../../../public/img/com/cp_ys_2@2x.png"
                      alt=""
                      class="circle"
                    />
                  </div>
                </div>
                <div class="game-body-right">
                  <img
                    :src="item.img_right"
                    alt=""
                    :class="`game_body_right_img` + index"
                  />
                </div>
                <div class="now_play">
                  <a>
                    <van-button type="default"
                      >立即试玩<span class="circle-blue">→</span></van-button
                    >
                  </a>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="games_btn_group">
          <div class="btn_group_right">
            <van-button
              type="default"
              class="left"
              :class="games_slide != 'games_1' ? 'active' : ''"
              @click="changeSwipe(1)"
              ><span class="circle-blue">←</span></van-button
            >
            <van-button
              type="default"
              class="right"
              :class="games_slide != 'games_6' ? 'active' : ''"
              @click="changeSwipe(2)"
              ><span class="circle-blue">→</span></van-button
            >
          </div>
        </div>
        <div class="games-img-circle-left">
          <img
            src="../../../public/img/com/hz_ys_1@2x.png"
            width="37px"
            class="games-img-circle-left-square"
          />
        </div>
      </div>
    </section>
    <!-- 联系我们 -->
    <contact></contact>
    <!-- 底部模板 -->
    <bottom></bottom>
  </div>
</template>

<script>
import navBar from "@/components/navBar/nav.vue";
import bottom from "@/components/bottom/index.vue";
import contact from "@/components/contact/index.vue";
export default {
  data() {
    return {
      swipeList: [
        { id: 1, img: require("../../../public/img/banner1.png") },
        { id: 2, img: require("../../../public/img/banner2.png") },
        { id: 3, img: require("../../../public/img/banner3.png") },
      ],
      serversList: [
        {
          id: 1,
          img: require("../../../public/img/icon_1.svg"),
          zh: "市场领导者",
          en: "Market leader",
          text:
            "OB游戏同时是亚洲最大的网络博彩业行业产品研发及产品分发的权威机构，已与数百家客户和上千种品牌建立了品牌互信，诚信至上的良好伙伴关系",
        },
        {
          id: 2,
          img: require("../../../public/img/icon_2.svg"),
          zh: "全球化视野",
          en: "Global perspective",
          text:
            "全球经济一体化给我们带来了巨大优势，为我们的客户提供最有价值的市场反馈，以此来提高、革新更好的产品，为客户精准获取商业利润。",
        },
        {
          id: 3,
          img: require("../../../public/img/icon_3.svg"),
          zh: "顶尖的技术",
          en: "Security System",
          text:
            "安全 / 快速 / 可靠 是我们的宗旨。我们拥有亚洲最优质的服务平台、技术团队以及研发设备与场所，全程致力于服务市场与客户运营。",
        },
        {
          id: 4,
          img: require("../../../public/img/icon_4.svg"),
          zh: "7*24小时客服",
          en: "7*24 hours customer service",
          text:
            "我们公司的客服以及技术专员24小时坚守岗位，静候您的佳音，全年无休。",
        },
        {
          id: 5,
          img: require("../../../public/img/icon_5.svg"),
          zh: "一站式服务",
          en: "One-stop service",
          text:
            "不论是新创立的公司，还是行业顶级的老牌公司，我们都将提供一站式一体化服务，将产品与服务有效结合，为您带来最好的服务体验。",
        },
        {
          id: 6,
          img: require("../../../public/img/icon_6.svg"),
          zh: "一站式服务",
          en: "One-stop service",
          text:
            "探索研发新的收入数据流，解锁新的竞技增长潜在模式，全天候使用大数据追踪您的需求，为您打造专属解决方案。",
        },
      ],
      games_carousel_list: [
        {
          id: "games_1",
          text_list: ["自主研发", "权威认证", "精准风控", "创新多元"],
          img_right: require("../../../public/img/com/zr_ys_1@2x.png"),
          img_logo: require("../../../public/img/com/ZR1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "zr",
        },
        {
          id: "games_2",
          text_list: [
            "超全赛事",
            "多终端支持",
            "安全加密",
            "准确即时赔率",
            "独立后台",
          ],
          img_right: require("../../../public/img/com/TY_YS_1@2x.png"),
          img_logo: require("../../../public/img/com/TY1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "ty",
        },
        {
          id: "games_3",
          text_list: [
            "赛事最全",
            "滚球多样",
            "赔率最高",
            "提前结算",
            "实时聊天",
            "派奖迅速",
          ],
          img_right: require("../../../public/img/com/DJ_YS_1@2x.png"),
          img_logo: require("../../../public/img/com/DJ1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "dj",
        },
        {
          id: "games_4",
          text_list: [
            "游戏品类齐全",
            "模式多玩法新",
            "自主研发设计",
            "拟真游戏体验",
            "拟真AI陪玩",
            "智能风控策略",
          ],
          img_right: require("../../../public/img/com/QP_YS_1@2x.png"),
          img_logo: require("../../../public/img/com/QP1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "qp",
        },
        {
          id: "games_5",
          text_list: [
            "彩种齐全",
            "开奖快速",
            "盈利自主",
            "美艳开彩",
            "免转钱包",
            "高效风控",
          ],
          img_right: require("../../../public/img/com/CP_YS_1@2x.png"),
          img_logo: require("../../../public/img/com/CP1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "cp",
        },
        {
          id: "games_6",
          text_list: [
            "3D引擎技术领先",
            "jackpot奖金池",
            "良好的视觉动效",
            "玩法丰富多样",
            "专业算法",
            "双重认证",
          ],
          img_right: require("../../../public/img/com/DY_YS_1@2x.png"),
          img_logo: require("../../../public/img/com/DY1_LOGO.svg"),
          href: "https://www.baidu.com/",
          game: "dy",
        },
      ],
      games_slide: "games_1",
    };
  },
  components: {
    navBar,
    bottom,
    contact,
  },
  mounted() {
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll);
    },
    onChange(index) {
      // this.current = index;
      this.games_slide = this.games_carousel_list[index].id;
      console.log(this.games_slide);
    },
    changeSwipe(val) {
      if (val == 1) {
        this.$refs.swipe.prev();
      } else {
        this.$refs.swipe.next();
      }
    },
  },
};
</script>

<style lang="less">
// .home{
//   width: 100vw;
//   height: 100vh;
//   background-color: red;
// }
.my-swipe .van-swipe-item {
  // margin-top: 64px;
  color: #fff;
  font-size: 20px;
  line-height: 400px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}
.server {
  .server-bg {
    position: absolute;
    margin-top: -55px;
    width: 100%;
    height: 80px;
    z-index: 2;
    background: url("../../../public/img/bg.png") no-repeat center/cover;
    // background-size: cover;caij
    // object-fit: cover;
  }
  .server-title {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 50px;
    // background-color: hotpink;
    &-left-en {
      position: absolute;
      top: 36px;
      left: 40px;
      font-size: 12px;
      color: #464549;
      letter-spacing: 1.2px;
      line-height: 14px;
    }
    &-left-small {
      position: absolute;
      top: 68px;
      left: 40px;
    }
    &-right-space {
      position: absolute;
      top: 0;
      right: 20px;
      width: 45px;
      height: 4px;
      background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
      border-radius: 2px;
    }
    &-right-title {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #464549;
      letter-spacing: 2.08px;
      line-height: 20px;
    }
    &-right-space1 {
      position: absolute;
      top: 40px;
      right: 140px;
      width: 68px;
      height: 4px;
      background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
      border-radius: 2px;
    }
  }

  .server-ad {
    width: 300px;
    margin: 0 auto;
    &-list {
      margin-top: 30px;
      .server-ad-title {
        display: flex;
        .left {
          width: 40px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .right {
          margin-left: 20px;
          .zh {
            margin-top: 2px;
            font-size: 18px;
            font-weight: bold;
            color: #00aeff;
            letter-spacing: 1.88px;
            line-height: 20px;
          }
          .en {
            margin-top: 3px;
            font-family: Helvetica-Light;
            font-size: 12px;
            color: #00aeff;
            letter-spacing: 1.25px;
            line-height: 20px;
          }
        }
      }
      .server-ad-text {
        margin-top: 20px;
        font-size: 12px;
        color: #000000;
        letter-spacing: 1px;
        line-height: 20px;
      }
    }
  }
}

.company {
  .company-bg {
    // position: absolute;
    // margin-top: -55px;
    width: 100%;
    height: 49px;
    // z-index: 2;
    background: url("../../../public/img/bg1.png") no-repeat center/cover;
  }
  .company-content {
    width: 100%;
    height: 650px;
    background-color: #effbff;
    padding-top: 15px;
    position: relative;
    .company-title {
      margin-left: 20px;
      .top {
        display: flex;
        img {
          width: 61px;
          height: 4px;
        }
        .space {
          margin-left: 15px;
          width: 45px;
          height: 4px;
          background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
          border-radius: 2px;
        }
      }
      .middle {
        margin-top: 10px;
        font-weight: bold;
        font-size: 20px;
        color: #464549;
        letter-spacing: 2.08px;
        line-height: 20px;
        margin-left: 90px;
      }
      .bottom {
        margin-top: 10px;
        margin-left: 126px;
        display: flex;
        .space {
          width: 45px;
          height: 4px;
          background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
          border-radius: 2px;
        }
        .text {
          font-size: 12px;
          color: #464549;
          letter-spacing: 1.2px;
          line-height: 14px;
          margin-left: 10px;
        }
      }
    }
    .company-circle {
      position: absolute;
      width: 212px;
      height: 180px;
      right: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .company-left {
      position: absolute;
      left: 30px;
      top: 64px;
      width: 30px;
      height: 30px;
      animation: company-left-animation 2s linear infinite;
      @keyframes company-left-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }
    }
    .company-center {
      width: 330px;
      height: 300px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .company-right {
      position: absolute;
      right: 40px;
      top: 260px;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      animation: company-right-animation 2s linear infinite alternate both;
      @keyframes company-right-animation {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, 15px);
        }
      }
    }
    .company-text {
      margin-left: 20px;
      margin-right: 20px;
      &-zh {
        opacity: 0.8;
        font-weight: bold;
        margin-top: 20px;
        font-size: 12px;
        color: #1b1b1d;
        letter-spacing: 1.25px;
      }
      &-en {
        opacity: 0.48;
        margin-top: 20px;
        font-size: 12px;
        color: #1b1b1d;
        letter-spacing: 1px;
        line-height: 20px;
      }
    }
    .company-btn {
      width: 148px;
      height: 40px;
      margin: 0 auto;
      margin-top: 30px;
      line-height: 40px;
      text-align: center;
      vertical-align: middle;
      background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
      border-radius: 25px;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 2px;
    }
  }
  .company-bg1 {
    width: 100%;
    height: 60px;
    background-image: linear-gradient(180deg, #effbff 0%, #ffffff 100%);
  }
}

.game {
  .game-title {
    margin-left: 20px;
    display: flex;
    .game-left {
      width: 250px;
      .game-space {
        width: 45px;
        height: 4px;
        background-image: linear-gradient(90deg, #00aeff 0%, #7427e2 100%);
        border-radius: 2px;
      }
      .game-cn {
        margin-top: 10px;
        font-size: 20px;
        color: #464549;
        letter-spacing: 2.08px;
        line-height: 20px;
        font-weight: bold;
      }
      .game-en {
        font-size: 12px;
        color: #464549;
        letter-spacing: 1.2px;
        margin-left: 92px;
        line-height: 14px;
        margin-bottom: 10px;
        margin-top: 7px;
      }
      .game-space-right {
        margin-left: 175px;
      }
    }
    .game-right {
      height: 65px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .game-body-bg {
    margin-top: -20px;
    width: 100vw;
    height: 700px;
    background: url("../../../public/img/com/game_bg_1@3x.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .game-bg-cricle {
      position: absolute;
      right: 0;
      top: 60px;
      width: 100px;
      height: 200px;
      background: url("../../../public/img/com/game_circle.png") no-repeat
        center/contain;
    }
    .game-bg-cricle-left {
      position: absolute;
      left: 0;
      bottom: 90px;
      width: 100px;
      height: 200px;
      background: url("../../../public/img/com/game_circle.png") no-repeat
        center/contain;
    }
    .game-body {
      // padding-top: 110px;
      width: 335px;
      height: 500px;
      position: absolute;
      left: 50%;
      transform: translateX(-167.5px);
      top: 70px;
      background: url("../../../public/img/com/game_bg@2x.png") no-repeat;
      background-size: 100% 100%;
      .games-img-carousel {
        height: 500px;
        overflow: hidden;
      }
      .game-body-content {
        padding-top: 30px;
        width: 83%;
        height: 500px;
        margin: 0 auto;
        display: flex;
        position: relative;
        overflow: hidden;
        .game-body-left {
          position: absolute;
          left: 20px;
          top: 50px;
          .game-body-logo {
            width: 110px;
            height: 40px;
            margin-bottom: 34px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .game-body-text {
            div {
              margin-bottom: 15px;
              .text {
                margin-left: 10px;
                font-size: 12px;
                color: #ffffff;
                letter-spacing: 1.71px;
                line-height: 12px;
              }
            }
          }
          .game-body-play {
            width: 65.4px;
            height: 63.5px;
            margin-top: 30px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .game-body-play-cp {
            width: 70px;
            height: 60px;
            position: absolute;
            top: 30px;
            left: 100px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
        .game-body-right {
          position: absolute;
          top: 40px;
          right: 0px;
          z-index: -1;
          .game_body_right_img0 {
            width: 200px;
            height: 410px;
            object-fit: contain;
          }
          .game_body_right_img1 {
            width: 200px;
            height: 470px;
            object-fit: contain;
          }
          .game_body_right_img2 {
            width: 200px;
            height: 500px;
            object-fit: contain;
          }
          .game_body_right_img3 {
            width: 200px;
            height: 460px;
            object-fit: contain;
          }
          .game_body_right_img4 {
            width: 240px;
            height: 510px;
            object-fit: contain;
          }
          .game_body_right_img5 {
            width: 225px;
            height: 470px;
            object-fit: contain;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .van-button {
          width: 115px;
          height: 40px;
          border-radius: 20px;
          font-size: 14px;
          color: #1da0ff;
          line-height: 14px;
          .circle-blue {
            display: inline-block;
            background-color: #1da0ff;
            color: #fff;
            width: 18px;
            height: 18px;
            line-height: 18px;
            margin-left: 6px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        .now_play {
          width: 120px;
          height: 40px;
          position: absolute;
          left: 10px;
          bottom: 50px;
          z-index: 12;
          .now_play_btn {
            background: #fff;
            font-size: 14px;
            color: #1da0ff;
            .circle-blue {
              display: inline-block;
              background-color: #1da0ff;
              color: #fff;
              width: 20px;
              height: 20px;
              line-height: 20px;
              margin-left: 10px;
              border-radius: 50%;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .games_btn_group {
      position: absolute;
      width: 120px;
      left: 50%;
      transform: translateX(-60px);
      bottom: 80px;
      .van-button {
        width: 57.2px;
        height: 34px;
        outline: none;
        border: none;
        background: #e0f2ff;
        color: #32c5ff;
      }
      .left {
        border-radius: 2px 0 0 2px;
      }
      .right {
        margin-left: 1px;
        border-radius: 0 2px 2px 0;
      }
      .active {
        background: #32c5ff;
        color: white;
      }
      // .
    }
    .games-img-circle-left {
      position: absolute;
      left: 40px;
      bottom: 30px;
      .games-img-circle-left-square {
        animation: games-img-circle-left-square 2.5s linear infinite alternate
          both;
      }
      @keyframes games-img-circle-left-square {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, -13px);
        }
      }
    }
    .games-title {
      width: 100%;
      margin: 0 auto;
      position: relative;
      top: -55px;
      .games-top {
        contain: content;
        clear: both;
        margin-left: 25px;
      }
      .games-img-left {
        width: 270px;
        float: left;
        .games-eli-bottom {
          contain: content;
          img {
            margin-left: 190px;
            margin-top: 10px;
            float: left;
          }
          .min-title {
            margin-left: 100px;
            margin-top: 5px;
            float: left;
            img {
              margin-left: 103px;
              margin-top: 10px;
            }
          }
        }
      }
      .eli-bar {
        float: left;
        margin-top: 25px;
      }
    }
  }
}

.van-swipe__indicators {
  left: 20%;
  bottom: 30px;
}
</style>