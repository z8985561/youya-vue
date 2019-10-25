<template>
  <div class="page">
    <h1 class="fz-18 c3 fw-700">请填写受赠人的信息</h1>
    <van-cell-group :border="false">
      <van-field v-model="name" placeholder="受赠人姓名" />
      <van-field v-model="phone" placeholder="受赠人手机号码" />
      <van-cell title="赠送课次">
        <van-stepper v-model="times" min="1" :max="remainder_times" />
      </van-cell>
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
        times:1,
        remainder_times:0,
        package_id:0
      };
    },
    watch: {},
    computed: {},
    methods: {
      async confirm(){
        if(!core.trim(this.name)){
          this.$toast("请输入真实姓名")
          return
        }
        if(!core.checkPhone(this.phone)){
          this.$toast("手机号码输入有误")
          return
        }
        let flag = await this.$dialog.confirm({
          title:"提示",
          message:`是否赠送该用户${this.times}课次？`
        })
        .then(() => {
          return 1;
        }).catch(() => {
          return 0;
        });
        if(!flag){
          return;
        }
        let {code,data,message} = await axios.post("/user/package-gift",{
          package_id:this.package_id,
          times:this.times,
          real_name:this.name,
          phone:this.phone
        })
        if(code==0){
          this.$toast.success("赠送成功")
          this.$router.go(-2);
        }else{
          this.$toast(message)
        }
      }
    },
    created() {
      this.remainder_times = this.$route.query.remainder_times
      this.package_id = this.$route.query.package_id
    },
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
  .van-cell {
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