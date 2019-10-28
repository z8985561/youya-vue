<template>
  <div>
    <ul class="order-list">
      <li class="order-item">
        <div class="flex flex-align-center mb-15">
          <img class="thumb" :src="detail.course_image" alt="">
          <div class="fz-15 c3 ml-10">{{detail.course_title}}</div>
        </div>
        <div class="bar-1 mb-10"></div>
        <van-cell :border="false" title-class="c9" value-class="text-price text-left" title="订单状态" :value="detail.status == 0 ? '待核销':'已核销'" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="昵称" :value="detail.with_guest.nick_name " />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="姓名" :value="detail.with_guest.real_name" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="手机号" :value="detail.with_guest.phone_contact" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="订单编号" value="456788909867556" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="下单时间" :value="detail.updated_at" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="核销时间" :value="detail.off_time" />
        <div class="flex flex-end pt-10">
          <div v-if="detail.status == 0" class="btn-youya" :data-id="detail.id" @click="verification">确认核销</div>
          <div @click="produce" class="btn-youya-o ml-10">生成学员牌</div>
        </div>
      </li>
    </ul>
    <van-popup v-model="isShowImg">
      <div class="student-container" style="background-image: url(../../img/bg-001.png);">
        <img :src="studentImg" alt="">
        <div class="close" @click="close">
          <van-icon name="close" size="30px" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import MCanvas,{MCrop} from 'mcanvas'
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowImg:false,
        studentImg:"",
        detail:{}
      };
    },
    watch: {},
    computed: {},
    methods: {
      close(){
        this.isShowImg = false
      },
      produce(){
        this.isShowImg = true
        this.compoundImg(this.detail)
      },
      /**
       * 生成学员牌
       */
      compoundImg(params) {
        console.log(params)
        new Promise((resolve,reject)=>{
          MCrop(params.with_guest.avatar, {
            // cropper shape
            type: 'circle',
            // crop by pos
            x: 'center',
            y: '0',
            // radius
            r: "50%",
            // the success callback
            success(b64) {
                resolve(b64)
            },
          })
        })
        .then(avatar=>{
        let mc = new MCanvas({
          width: 690,
          height: 834,
          backgroundColor: 'white',
        });
        // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
        mc.background("../../img/bg-001.png", {
            left: 0,
            top: 0,
            color: '#ffffff',
            type: 'crop',
          })
          .rect({
            x: 0,
            y: 0,

            // 矩形尺寸；
            width: '100%',
            height: '100%',

            // 矩形填充颜色
            fillColor: '#fff',
          })
          // 模板背景图连接
          .add("../../img/bg-002.png", {
            width: 300,
            height: 154,
            pos: {
              x: 197,
              y: 400,
              scale: 1
            },
          })
          .add("../../img/logo-2.png", {
            width: 130,
            height: 165,
            pos: {
              x: 280,
              y: 90,
              scale: 1
            },
          })
          .circle({
            // 圆形圆心位置，支持多种值；
            // x: 250 / '250px' / '100%' / 'left:250' / 'center',
            x: 260,
            y: 400,

            // 圆形半径； 100 / '100%' / '100px'
            r: '85px',
            // 圆形填充颜色
            fillColor: '#ffffff',
          })
          // 用户头像 params.with_guest.avatar
          .add(avatar, {
            width: 164,
            height: 164,
            pos: {
              x: 263,
              y: 403,
              scale: 1
            }
          })
          // text 添加文字数据基础函数；
          .text(params.course_title, {
            width: 450,
            align: 'center',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 120,
              y: 288,
            },
          })
          // text 添加文字数据基础函数；
          .text('姓名', {
            width: 70,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 186,
              y: 610,
            },
          })
          // text 添加文字数据基础函数；
          .text(params.with_guest.real_name || '王萌萌', {
            width: 120,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 350,
              y: 610,
            },
          })
          // text 添加文字数据基础函数；
          .text('手机号', {
            width: 120,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 186,
              y: 670,
            },
          })
          // text 添加文字数据基础函数；
          .text(params.with_guest.phone_contact||'13544445555', {
            width: 250,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 350,
              y: 670,
            },
          })
          .draw(b64 => {
            // console.log(b64);
            this.studentImg = b64
          });
        })
      },
      async getUserInfo(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user/off");
        if(code == 0){
          this.$toast.clear()
          this.getData()
        }else if (code == 401){
          this.$toast.fail(message)
          setTimeout(()=>{
            window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(window.location.href)}`
          },2000)
        }
      },
      async getData() {
        this.$toast.loading({
          message: "加载中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.get(`/user/off/reservation-order/detail?code=${this.$route.query.code}`);
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      },
      // 核销
      async verification(e){
        let {id} = e.currentTarget.dataset;
         var b = await this.$dialog.confirm({
          title: '提示',
          message: '确认核销？'
        }).then(() => {
          return true;
          // this.$router.push('/verification/feedback')
        }).catch(() => {
          return false;
        });
        if(b){
          this.$toast.loading({message: '加载中...'});
          let {code,data,message} = await axios.post("/user/off/reservation-order/off",{
            order_id:id
          });
          if(code == 0){
            this.$toast.clear()
            this.$router.push('/verification/feedback')

          }else{
            this.$toast.fail(message)
          }
        }
      }
    },
    created() {
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .order-list {
    background-color: #f8f8f8;

    .order-item {
      margin-bottom: 10px;
      padding: 15px;
      background-color: #fff;

      .thumb {
        width: 100px;
        height: 55px;
        border-radius: 5px;
      }
    }
  }
  .student-container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    >img{
      width: 345px;
      box-shadow:0px 0px 10px 0px rgba(238,238,238,1);
    }
    .close{
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .van-cell {
    padding: 0 12px;
  }

  .van-cell__title {
    flex: 0 1 80px;
  }

  .btn-youya,
  .btn-youya-o {
    width: 85px;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }

  .btn-youya {
    color: #fff;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
  }

  .btn-youya-o {
    border: 1px solid #8DB9DF;
    color: #8DB9DF;
  }
</style>