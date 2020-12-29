<template>
  <div class="select">
    <van-search
      v-model="search"
      shape="round"
      background="#171D28"
      placeholder="请输入搜索关键词"
    />
    <div class="wrap">
      <div class="loading" v-if="loading">
        <van-loading size="24px" vertical>加载中...</van-loading>
      </div>
      <div class="wrap-content" v-else>
        <div class="wrap-component" v-if="codeList.length > 0">
          <leftCode :letterCode="letterDefineCode" :letter="letter"></leftCode>
          <rightCode
            :letterCode="letterDefineCode"
            @clickLetter="clickLetter"
          ></rightCode>
        </div>
        <div v-else class="empty">
          <div>暂无数据...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftCode from "@/views/login/code/components/leftCode";
import rightCode from "@/views/login/code/components/rightCode";
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      codeList: [],
      letterCode: {},
      letterDefineCode: {},
      letter: "",
      loading: false,
    };
  },
  created() {
    this.initCodeList();
  },
  components: {
    leftCode,
    rightCode,
  },
  methods: {
    async initCodeList() {
      this.loading = true;
      let res = await axios.get("/mock/telephone.json");
      setTimeout(() => this.loading = false, 500)
      if (res.data.ret) {
        let sortCodeList = this.computedNeedSortCodeList(res.data.data);
        this.codeList = this.computedLetterCodeList(sortCodeList);
      }
    },
    computedNeedSortCodeList(arr) {
      if (arr.length > 0) {
        return arr.sort((a, b) => a["pinyin"].localeCompare(b["pinyin"]));
      }
    },
    computedLetterCodeList(arr) {
      arr.map(
        (item) => (item.info = item.name + item.tel + item.pinyin + item.en)
      );
      for (let i = 0; i < this.letters.length; i++) {
        this.letterCode[this.letters[i]] = [];
        arr.forEach((item, index) => {
          if (
            this.letters[i].toLowerCase() === item.pinyin.substr(0, 1).toLowerCase()
          ) {
            this.letterCode[this.letters[i]].push(item);
          }
        });
        if (this.letterCode[this.letters[i]].length === 0) {
          delete this.letterCode[this.letters[i]];
        }
      }
      this.letterDefineCode = { ...this.letterCode };
      // 改变数组对象用下标形式，需要重新用$set响应页面
      // for (const key in this.letterDefineCode) {
      //   if (this.letterDefineCode.hasOwnProperty(key)) {
      //     console.log(key,'code');
      //     this.$set(this.letterDefineCode, key, this.letterDefineCode[key]);
      //   }
      // }
      return arr;
    },
    clickLetter(val) {
      this.letter = val;
    },
  },
  watch: {
    search(val) {
      if (val) {
        this.codeList = this.codeList.filter((item) =>
          item.pinyin.includes(val)
        );
        this.codeList = this.computedLetterCodeList(this.codeList);
      } else {
        this.initCodeList();
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

.loading {
  width: 100vw;
  height: calc(100vh - 54px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty {
  width: 100%;
  height: calc(100vh - 54px);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>