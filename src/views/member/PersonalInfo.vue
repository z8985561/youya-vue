<template>
  <div>
    <van-cell-group :border="false">
      <van-cell title-class="flex flex-align-center c9" title="修改头像" value="内容">
        <div class="flex flex-end" slot="default">
          <van-uploader :before-read="upAvatar">
            <img class="avatar" :src="userInfo.avatar || '../../img/noface.png'" alt="">
          </van-uploader>
        </div>
      </van-cell>
      <van-cell title-class="flex flex-align-center c9" title="二维码名片" value="内容">
        <div class="flex flex-end" slot="default">
          <van-uploader :before-read="upQrCard">
            <!-- <div v-if="userInfo.qr_card" class="c3">修改</div> -->
            <img v-if="userInfo.qr_card"  class="qr_card" :src="userInfo.qr_card || '../../img/noface.png'" alt="">
            <div v-else class="c3">请上传二维码名片</div>
          </van-uploader>
        </div>
      </van-cell>
      <van-cell title-class="c9" value-class="c3" title="姓名" :value="userInfo.real_name" />
      <van-cell title-class="c9" value-class="c3" title="绑定号码" :value="userInfo.phone" />
      <van-field label="昵称" label-class="c9" input-align="right" v-model="userInfo.nick_name" placeholder="请输入昵称" />
      <van-field label="联系电话" label-class="c9" input-align="right" v-model="userInfo.phone_contact" placeholder="请输入联系电话" />
    </van-cell-group>
    <div class="footer-bar">
      <div class="btn-youya" @click="submit">确认修改</div>
    </div>
  </div>
</template>

<script>
  import core from "@/assets/js/my-core.js";
  export default {
    components: {},
    props: {},
    data() {
      return {
        userInfo: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getData() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get(`/user`)
        if (code == 0) {
          this.$toast.clear()
          this.userInfo = data
        } else {
          this.$toast.fail(message)
        }
      },
      async upAvatar(e){
        let url = await this.update(e);
        this.userInfo.avatar = url;
      },
      async upQrCard(e){
        let url = await this.update(e);
        this.userInfo.qr_card = url;
      },
      async update(file){
          let param = new FormData();
          param.append('image',file);
          let config = {
              headers:{'Content-Type':'multipart/form-data'}
          };
          this.$toast.loading({message: '加载中...'});
          let {code,data,message} = await axios.post('/user/upload-image',param,config)
          if (code == 0) {
            this.$toast.clear()
            return data.image_url
          } else {
            this.$toast.fail(message)
          }
      },
      async submit(){
        if(!core.trim(this.userInfo.phone_contact)){
          this.$toast.fail("手机号码格式错误")
          return;
        }
        if(!core.trim(this.userInfo.nick_name)){
          this.$toast.fail("请输入昵称")
          return;
        }
        if(!core.trim(this.userInfo.qr_card)){
          this.$toast.fail("请上传二维码名片")
          return;
        }
        if(!core.trim(this.userInfo.avatar)){
          this.$toast.fail("请上传头像")
          return;
        }
        this.$toast.loading({
          message: '提交中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post(`/user/edit`,{
          phone_contact:this.userInfo.phone_contact,
          nick_name:this.userInfo.nick_name,
          qr_card:this.userInfo.qr_card,
          avatar:this.userInfo.avatar
        })
        if (code == 0) {
          this.$toast.success("修改成功")
        } else {
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
  .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  .qr_card{
    width: 60px;
    height: 60px;
  }
  .footer-bar {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 5px 0px rgba(238, 238, 238, 0.5);

    .btn-youya {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }
</style>