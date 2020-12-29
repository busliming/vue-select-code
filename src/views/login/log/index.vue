<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="default" native-type="submit">
          提交
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" @click="handleSelectArea">
          选择区号  {{areaCode}}
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" @click="handleSelectArea1">
          选择区号  {{telCode}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      areaCode: '86',
      telCode: '+ 86'
    }
  },
  created() {
    this.areaCode = this.$route.params.id? this.$route.params.id: '86';
    this.telCode = this.$route.params.code? '+ '+this.$route.params.code: '+ 86';
  },
  methods: {
    onSubmit(){
      this.$router.push({name: 'select'})
    },
    handleSelectArea(){
      this.$router.push({name: 'select'})
    },
    handleSelectArea1(){
      this.$router.push({name: 'code'})
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  font-size: 16px;
  padding-top: 100px;
}
</style>