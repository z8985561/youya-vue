<template>
  <div class="page">
    <h1 class="fz-18 c3 fw-700">为了更好的体验，请先绑定用户信息</h1>
    <van-cell-group :border="false">
      <van-field v-model="name" placeholder="请输入您的真实姓名" />
      <van-field v-model="phone" placeholder="请输入您的手机号码" />
      <van-field v-model="code" center type="number" clearable placeholder="请输入验证码">
        <van-button slot="button" @click="getSMS" size="small" :disabled="disabled" type="primary">
          <span v-if="!disabled">获取验证码</span>
          <van-count-down v-if="disabled" format="ss" @finish="reset" :time="time" />
        </van-button>
      </van-field>
    </van-cell-group>
    <footer class="footer-bar flex flex-center flex-align-center">
      <div @click="confirm" class="btn-youya">确认</div>
    </footer>
  </div>
</template>

<script>
  import core from "@/assets/js/my-core.js";
  export default {
    components: {},
    props: {},
    data() {
      return {
        name: "",
        phone: "",
        code: "",
        disabled:false,
        time:60000
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getSMS(){
        let phone = core.trim(this.phone);
        if(!core.checkPhone(phone)){
          this.$toast("手机号码输入有误")
          return
        }
        this.disabled = true;
        let {code,data,messega} = await axios.post(`/user/verify-sms`,{phone:this.phone})
        if(code==0){
          this.$toast("发送成功")
        }else{
          this.$toast(message)
        }
        this.time=60000
      },
      async confirm(){
        let name = core.trim(this.name);
        let sms = core.trim(this.code);
        let phone = core.trim(this.phone);
        if(!name){
          this.$toast("请输入真实姓名")
          return
        }
        if(!sms){
          this.$toast("请输入验证码")
          return
        }
        if(!core.checkPhone(phone)){
          this.$toast("手机号码输入有误")
          return
        }
        this.$toast.loading({
          message: '绑定中...'
        });
        let {code,data,message} = await axios.post("/user/bind",{
          phone:phone,
          name:name,
          code:sms
          })
        if(code==0){
          console.log(data);
          this.getUserInfo()
        }else{
          this.$toast(message)
        }
      },
      async getUserInfo(){
        let {
          data,
          code
        } = await axios.get('/user')
        if (code == 0) {
          data = JSON.stringify(data)
          localStorage.setItem("userinfo", data)
          this.$router.go(-1);
        }else{
          this.$toast(message)
        }
      },
      reset(){
        this.disabled = false;
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .page {
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }

  .van-cell.van-field {
    padding: 18px 0;
  }

  .van-cell:not(:last-child)::after {
    left: 0;
    border-color: #eee;
  }

  .van-cell:last-child::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 0.026667rem solid #eee;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .van-button--primary {
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border: none;
  }
</style>