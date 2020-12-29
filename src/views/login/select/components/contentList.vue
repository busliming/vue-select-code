<template>
  <div class="content" ref="wrapper">
    <!-- 热门区域 -->
    <van-list>
      <div class="city">热门区域{{ letter }}</div>
      <div v-if="hotCities.length > 0">
        <van-cell v-for="city in hotCities" :key="city.id" @click="handleClickItem(city)">
          <div>{{ city.name }}({{ city.spell }})</div>
          <div class="city-id">+ {{ city.id }}</div>
        </van-cell>
      </div>
      <van-empty v-else image="search" description="暂无数据" />
    </van-list>
    <!-- 常用区域 -->
    <!-- <div ref=""></div> -->
    <van-list v-for="(cityItem, index) in cities" :ref="index" :key="index">
      <div class="city">{{ index }}</div>
      <div v-if="cityItem.length>0">
        <van-cell v-for="item in cityItem" :key="item.id" @click="handleClickItem(item)">
          <div>{{ item.name }} ({{ item.spell }})</div>
          <div class="city-id">+ {{ item.id }}</div>
        </van-cell>
      </div>
      <van-empty v-else image="search" description="暂无数据" />
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    hotCities: {
      type: Array,
      required: true,
    },
    cities: {
      type: Object,
      required: true,
    },
    letter: {
      type: String,
    },
  },
  methods: {
    handleClickItem(city){
      // console.log(city)
      this.$router.push({
        name: 'login',
        params: {
          id: city.id
        }
      })
    }
  },
  watch: {
    letter(val) {
      if (val) {
        const ele = this.$refs[this.letter][0].$el;
        const target = ele.offsetTop - 52;
        console.log(ele.offsetTop - 55);
        // ele.scrollIntoView({ behavior:"smooth", block: "center", inline: "start"});
        window.scrollTo({
          top: target,
          // 'behavior': 'smooth'
        });

        // document.body.scrollTop = target;
      }
    },
  },
};
</script>

<style lang="less" scoped>
// .city{

// }
.city {
  width: 100%;
  height: 44px;
  background: #28303f;
  color: white;
  font-size: 16px;
  line-height: 44px;
  padding-left: 15px;
  font-weight: bold;
}
.van-cell {
  background: #1b212c;
}
.van-cell__value--alone {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  .city-id {
    margin-right: 25px;
  }
}

.van-empty {
  background: #1b212c;
}
</style>