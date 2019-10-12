<template>
  <div>
    <div v-html="content"></div>
    <div class="footer-bar flex flex-center flex-align-center">
      <div class="btn-youya" @click="showPopup">预约体验课程</div>
    </div>
    <van-popup v-model="show">
      <div class="prompt-box">
        <h2 class="fz-17 c3 fw-700 text-center mb-15">请输入联系信息</h2>
        <input class="input-item mb-10" type="text" placeholder="姓名" v-model="username">
        <input class="input-item mb-20" type="number" placeholder="手机号" v-model="phone">
        <div>
          <button class="btn-primary mr-10" @click="hidePopup">取消</button>
          <button class="btn-info" @click="submit">确认</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Core from "../assets/js/my-core"
  export default {
    components: {},
    props: {},
    data() {
      return {
        show:false,
        username:"",
        phone:"",
        content:""
      };
    },
    watch: {},
    computed: {},
    methods: {
      showPopup(){
        this.show = true
      },
      hidePopup(){
        this.show = false
      },
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/home/experience")
        if(code == 0){
          this.$toast.clear()
          this.content = data.value;
        }else{
          this.$toast.fail(message)
        }
      },
      // 提交信息
      async submit(){
        let username = Core.trim(this.username);
        let phone = Core.trim(this.phone);
        if(!username){
          this.$toast('请输入用户名');
          return;
        }
        if(!phone || !Core.checkPhone(phone)){
          this.$toast('手机号码输入错误');
          return;
        }
        this.$toast.loading({message: '提交中...'});
        let {code,data,message} = await axios.post("/user/experience-apply",{name:username,phone:phone})
        if(code == 0){
          this.$toast.success("预约成功")
          console.log(data);
          this.hidePopup()
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getData()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .btn-youya{
    width:260px;
    height:40px;
    line-height: 40px;
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    border-radius:20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131,179,219,.2);
  }
  .prompt-box{
    padding-top:15px;
    width:305px;
    min-height:200px;
    text-align: center;
    .input-item{
      padding: 0 10px;
      width:260px;
      height:35px;
      line-height: 35px;
      border-radius:5px;
      border:1px solid rgba(221,221,221,1);
      color: #666;
      font-size: 14px;
      box-sizing: border-box;
    }
  }
  .btn-primary{
    width:100px;
    height:30px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    border:1px solid rgba(238,238,238,1);
    font-size: 12px;
    color:#999;
    box-sizing: border-box;
  }
  .btn-info{
    width:100px;
    height:30px;
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    border-radius:5px;
    font-size: 12px;
    color:#fff;
  }
  .van-popup--center{
    border-radius:5px;
  }
</style>