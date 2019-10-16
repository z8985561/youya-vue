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
      detail:{},
      createShareImage:{},
      imgUrl:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/course/detail",{params:{id:this.$route.params.id}})
        if(code == 0){
          this.$toast.clear()
          this.detail = data
          this.getPosters()
        }else{
          this.$toast.fail(message)
        }
    },
    async getPosters(){
      let {code,data,message} = await axios.get("/course/share-temp",{params:{id:this.$route.params.id}})
      if(code == 0){
        if(data.length){
          this.list = data
        }else{
          this.$toast.fail("该商品暂无可用模板！")
          this.$router.go(-1)
        }
      }else{
        this.$toast.fail(message)
      }
    },
    async getShareImage(){
      this.$toast.loading({message: '生成中...'});
      let {code,data,message} = await axios.get("/course/create-share-image",{params:{course_id:this.$route.params.id}})
      if(code == 0){
        this.$toast.clear()
        this.createShareImage = data
      }else{
        // this.$toast.fail(message)
      }
    },
    onChangePoster(e){
      let {id,index} = e.currentTarget.dataset;
      this.active = index
      this.compoundImg()
    },
    async compoundImg(){
      let mc = new MCanvas({
        width: 375,
        height: 667,
        backgroundColor: 'white',
      });
      // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
      mc.background(this.list[this.active].image,{
          left:0,
          top:0,
          color:'#000000',
          type:'crop',
      })
      // 模板背景图连接
      .add("../img/poster-bg.png",{
          width:305,
          height:320,
          pos:{
              x:35,
              y:80,
              scale:1
          },
      })
      // 二维码连接 this.createShareImage.share_qr ../img/erweima.png
      .add(this.createShareImage.share_qr,{
          width:63,
          height:63,
          pos:{
              x:55,
              y:318,
              scale:1
          },
      })
      // 产品图连接 this.detail.image ../img/banner2-01.png
      .add(this.detail.image,{
          width:285,
          height:161,
          pos:{
              x:45,
              y:90,
              scale:1
          },
      })
      .add("../img/logo.png",{
          width:81,
          height:84,
          pos:{
              x:243,
              y:310,
              scale:1
          },
      })
      // text 添加文字数据基础函数；
      .text(this.detail.name,{
          width:270,
          align:'left',
          normalStyle:{
            font : `15px Microsoft YaHei,sans-serif`,
            lineHeight: 16,
          },
          pos:{
              x:55,
              y:262,
          },
      })
      // text 添加文字数据基础函数；
      .text('加入学习',{
          width:48,
          align:'left',
          normalStyle:{
            font : `12px Microsoft YaHei,sans-serif`,
            lineHeight: 14,
             color: '#999',
          },
          pos:{
              x:128,
              y:330,
          },
      })
       // text 添加文字数据基础函数；
      .text('长按识别二维码',{
          width:100,
          align:'left',
          normalStyle:{
            font : `12px Microsoft YaHei,sans-serif`,
            lineHeight: 14,
             color: '#999',
          },
          pos:{
              x:128,
              y:360,
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
    this.getData()
    this.getShareImage()
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