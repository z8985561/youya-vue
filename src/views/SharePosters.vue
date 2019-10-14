<template>
  <div>
    <img :src="imgUrl" alt="">
    <div class="footer-bar">
      <ul class="posters-list">
        <li v-for="(item,index) in list" :key="item.id" @click="onChangePoster" :data-id="item.id" :data-index="index" class="posters-item">
          <img class="mb-5" :src="item.image" alt="">
          <div class="fz-12 text-center" :class="active == index ? 'text-primary':'c9'">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MCanvas from 'mcanvas'
export default {
  components: {},
  props: {},
  data() {
    return {
      active:0,
      list:[],
      createShareImage:{},
      imgUrl:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getPosters(){
      let {code,data,message} = await axios.get("/course/share-temp",{params:{id:this.$route.params.id}})
      if(code == 0){
        this.list = data
        this.getShareImage(data[0].id)
      }else{
        this.$toast.fail(message)
      }
    },
    async getShareImage(id){
      this.$toast.loading({message: '生成中...'});
      let {code,data,message} = await axios.get("/course/create-share-image",{params:{course_id:id}})
      if(code == 0){
        this.$toast.clear()
        this.createShareImage = data
        this.compoundImg(data)
      }else{
        // this.$toast.fail(message)
      }
    },
    onChangePoster(e){
      let {id,index} = e.currentTarget.dataset;
      this.active = index
      this.getShareImage(id)
    },
    async compoundImg(params){

      // let bgImg = await this.loadImage(params.with_course.image)
      // let qrImg = await this.loadImage(params.share_qr)
      let mc = new MCanvas({
        width: 375,
        height: 667,
        backgroundColor: 'white',
      });
      // add 添加图片素材基础函数；
      mc.background("../img/poster-psd.jpg",{
          left:0,
          top:0,
          color:'#000000',
          type:'origin',
      })
      // add 添加图片素材基础函数；
      .add("../img/poster-bg.png",{
          width:610,
          height:640,
          pos:{
              x:70,
              y:160,
              scale:1,
              rotate:1,
          },
      })
      // add 添加图片素材基础函数；
      .add("../img/erweima.png",{
          width:126,
          pos:{
              x:110,
              y:636,
              scale:1,
              rotate:1,
          },
      })
      .add("../img/banner2-01.png",{
          width:570,
          height:320,
          pos:{
              x:90,
              y:180,
              scale:1,
              rotate:1,
          },
      })
      .add("../img/logo.png",{
          width:162,
          height:168,
          pos:{
              x:485,
              y:620,
              scale:1,
              rotate:1,
          },
      })
      // text 添加文字数据基础函数；
      .text('香港皇家优雅形体礼仪初级课程',{
          width:530,
          align:'left',
          normalStyle:{
            font : `30px Microsoft YaHei,sans-serif`,
            lineHeight: 40,
          },
          pos:{
              x:110,
              y:530,
          },
      })
      // text 添加文字数据基础函数；
      .text('加入学习',{
          width:96,
          align:'left',
          normalStyle:{
            font : `24px Microsoft YaHei,sans-serif`,
            lineHeight: 30,
             color: '#999',
          },
          pos:{
              x:255,
              y:660,
          },
      })
       // text 添加文字数据基础函数；
      .text('长按识别二维码',{
          width:200,
          align:'left',
          normalStyle:{
            font : `24px Microsoft YaHei,sans-serif`,
            lineHeight: 30,
             color: '#999',
          },
          pos:{
              x:255,
              y:708,
          },
      })
      .draw( b64 =>{
        // console.log(b64);
        this.imgUrl = b64
      });
    },
    loadImage(url){
      let IMG = new Image()
      IMG.src = url;
      return new Promise((resovle,reject)=>{
        IMG.onload = res=>{
          resovle(res.path[0].currentSrc)
        }
      })
    }
  },
  created() {
    this.getPosters()
    // console.log(MCanvas)
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
  .posters-list{
    width: 100vw;
    padding: 10px 0 13px;
    overflow-x: scroll;
    white-space: nowrap;
    .posters-item{
      display: inline-block;
      width: 60px;
      margin-left: 10px;
    }
  }
</style>