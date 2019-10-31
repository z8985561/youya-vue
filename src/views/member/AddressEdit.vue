<template>
  <div>
    <van-cell-group>
      <van-field label="收货人" v-model="name" />
      <van-field v-model="phone" label="手机号" />
      <van-cell @click="show = true" title="选择省/市/区" :value="province+' '+city+' '+area" is-link />
      <van-field v-model="address" label="详细地址" />
    </van-cell-group>
    <div class="bar-10"></div>
    <van-cell :border="false" title="设置为默认地址">
      <van-switch slot="default" v-model="is_default" />
    </van-cell>
    <div class="footer-bar">
      <div v-if="id" class="p-15">
        <div @click="editAddress" class="btn-youya mb-10">修改</div>
        <div @click="deleteAddress" class="btn-youya-o ">删除</div>
      </div>
      <div v-else class="p-15">
        <div @click="getWXAddress" class="btn-youya-o mb-10">一键获取微信位置</div>
        <div @click="addAddress" class="btn-youya">保存</div>
      </div>

    </div>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="chooseArea" @cancel="show = false"/>
    </van-popup>

  </div>
</template>

<script>

  import wx from "weixin-js-sdk";
  import areaList from "../../assets/js/city-data.js"
  import core from "../../assets/js/my-core.js"
  export default {
    components: {},
    props: {},
    data() {
      return {
        areaList,
        id:"",
        show: false,
        name: '',
        phone: "",
        province:"",
        city:"",
        area: "",
        address: "",
        is_default: true
      };
    },
    watch: {},
    computed: {},
    methods: {
      // 新增地址
      async addAddress(){
        if(!this.name){
          this.$toast.fail("请输入姓名")
          return
        }
        if(!core.checkPhone(this.phone)){
          this.$toast.fail("手机号输入错误")
          return
        }
        if(!this.province){
          this.$toast.fail("请选择省市区")
          return
        }
        if(!this.address){
          this.$toast.fail("请输入详细地址")
          return
        }
        let {code,data,message} = await axios.post("/user/address-add",{
          name:this.name,
          phone:this.phone,
          province:this.province,
          city:this.city,
          area:this.area,
          address:this.address,
          is_default:this.is_default ? 1 : 0
        })
        if(code==0){
          this.$toast("添加地址成功")
          setTimeout(()=>{
            this.$router.go(-1)
          },1500)
        }else{
          this.$toast.fail(message||"添加地址失败")
        }
      },
      async getAddress(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user/address-detail",{params:{id:this.id}})
        if(code==0){
          this.$toast.clear()
          this.name = data.name;
          this.phone = data.phone;
          this.province = data.province;
          this.city = data.city;
          this.area = data.area;
          this.address = data.address;
          this.is_default = data.is_default==1 ? true : false;
        }else{
          this.$toast.fail(message|| "获取定制失败！")
          setTimeout(()=>{
            this.$router.go(-1)
          },1500)
        }
      },
      async editAddress(){
        if(!this.name){
          this.$toast.fail("请输入姓名")
          return
        }
        if(!core.checkPhone(this.phone)){
          this.$toast.fail("手机号输入错误")
          return
        }
        if(!this.province){
          this.$toast.fail("请选择省市区")
          return
        }
        if(!this.address){
          this.$toast.fail("请输入详细地址")
          return
        }
        let {code,data,message} = await axios.post("/user/address-edit",{
          id:this.id+"",
          name:this.name,
          phone:this.phone,
          province:this.province,
          city:this.city,
          area:this.area,
          address:this.address,
          is_default:this.is_default ? 1 : 0
        })
        if(code==0){
          this.$toast("修改地址成功")
        }else{
          this.$toast.fail(message||"修改失败")
        }
      },
      async deleteAddress(){
        let {code,data,message} = await axios.post("/user/address-delete",{
          id:this.id + ""
        })
        if(code==0){
          this.$toast("操作成功")
          setTimeout(()=>{
            this.$router.go(-1)
          },1500)
        }else{
          this.$toast.fail(message||"操作失败")
        }
      },
      async getWXAddress() {
        let that = this;
        wx.ready(() => {
          wx.openAddress({
            success: function(res) {
              that.name = res.userName; // 收货人姓名
              // var postalCode = res.postalCode; // 邮编
              that.province = res.provinceName; // 国标收货地址第一级地址（省）
              that.city = res.cityName; // 国标收货地址第二级地址（市）
              that.area = res.countryName; // 国标收货地址第三级地址（国家）
              that.address = res.detailInfo; // 详细收货地址信息
              // var nationalCode = res.nationalCode; // 收货地址国家码
              that.phone = res.telNumber; // 收货人手机号码
            }
          });
        })
      },
      chooseArea(e){
        this.province = e[0].name;
        this.city = e[1].name;
        this.area = e[2].name;
        this.show = false
      },
      async getSDK() {
        // alert(location.href)
        let href = encodeURIComponent(window.location.href)
        let {
          data,
          code,
          message
        } = await axios.get('/config/jsjdk?url=' + href)
        if (code == 0) {
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: Number(data.timestamp), // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
              'chooseWXPay',
              'onMenuShareTimeline',
              'onMenuShareAppMessage', //1.0分享到朋友圈
              'updateAppMessageShareData', //1.4 分享到朋友
              'updateTimelineShareData'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        } else {
          // $weui.topTips(message, 3000);
        }
      },
    },
    created() {
      this.id = this.$route.query.id || "";
      if(this.id){
        this.getAddress()
      }
      this.getSDK()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .btn-youya,
  .btn-youya-o {
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
  }

  .btn-youya {
    width: 100%;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    color: #fff;
  }

  .btn-youya-o {
    border: 1px solid rgba(141, 185, 223, 1);
    color: #8DB9DF;
  }
</style>