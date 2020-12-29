<template>
  <div class="select">
    <van-search
      v-model="value"
      shape="round"
      background="#171D28"
      placeholder="请输入搜索关键词"
    />
    <div class="wrap">
      <div class="loading" v-if="loading">
        <van-loading  size="24px" vertical>加载中...</van-loading>
      </div>
      <template v-else>
        <contentList
          :letter="letter"
          :hotCities="hotCities"
          :cities="cities"
        ></contentList>
        <rightLetter :cities="cities" @change="handleTouchLetter"></rightLetter>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import rightLetter from "@/views/login/select/components/rightLetter";
import contentList from "@/views/login/select/components/contentList";
export default {
  data() {
    return {
      value: "",
      hotCities: [],
      cities: {},
      letter: "",
      copyHotCities: [],
      copyCities: {},
      loading: false,
    };
  },
  components: {
    rightLetter,
    contentList,
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "select" });
    },
    getCityInfo() {
      this.loading = true;
      axios.get("/mock/city.json").then(this.handleNeedData);
    },
    handleNeedData(res) {
      this.loading = false;
      let { ret, data } = res.data;
      console.log(ret, data);
      if (ret) {
        this.hotCities = data.hotCities;
        this.copyHotCities = [...data.hotCities];
        this.cities = data.cities;
        this.copyCities = { ...data.cities };
      }
    },
    handleTouchLetter(val) {
      console.log(val);
      this.letter = val;
    },
  },
  watch: {
    value(val) {
      console.log(val);
      if (val) {
        // this.copyHotCities = [...this.hotCities]
        // this.hotCities = this.hotCities.filter(item => item.spell.includes(val))
        const newObj = {};
        for (const key in this.cities) {
          if (this.cities.hasOwnProperty(key)) {
            const element = this.cities[key];
            const filterList = element.filter((item) =>
              item.spell.includes(val)
            );
            if (filterList.length > 0) {
              newObj[key] = filterList;
            } else {
              // newObj[key] = []
            }
          }
        }
        this.cities = newObj;
      } else {
        console.log("ww");
        this.hotCities = this.copyHotCities;
        this.cities = this.copyCities;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.van-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.wrap {
  padding-top: 54px;
}
.login {
  font-size: 16px;
}

.loading{
  width: 100vw;
  height: calc(100vh - 54px);
  // background: red;
  display: flex;
  align-items: center;
  justify-content: center;
}

// .van-loading--vertical{
//   width: 100%;
//   height: calc(100% - 54px);
// }
</style>