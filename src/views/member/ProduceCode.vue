<template>
  <div>
    <img v-if="imgUrl" :src="imgUrl" alt="">
  </div>
</template>

<script>
import MCanvas from 'mcanvas'
export default {
  components: {},
  props: {},
  data() {
    return {
      imgUrl:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    async compoundImg(){
      let mc = new MCanvas({
        width: 750,
        height: 1334,
        backgroundColor: 'white',
      });
      // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
      mc.background("../img/bg-003.png",{
          left:0,
          top:0,
          color:'#000000',
          type:'crop',
      })
      // 模板背景图连接
      .add("../img/poster-bg.png",{
          width:610,
          height:642,
          pos:{
              x:70,
              y:160,
              scale:1
          },
      })
      // 二维码连接 this.createShareImage.share_qr ../img/erweima.png
      .add(this.createShareImage.share_qr,{
          width:126,
          height:126,
          pos:{
              x:110,
              y:635,
              scale:1
          },
      })
      // 产品图连接 this.detail.image ../img/banner2-01.png
      .add(this.detail.image,{
          width:570,
          height:321,
          pos:{
              x:90,
              y:180,
              scale:1
          },
      })
      .add("../img/logo.png",{
          width:162,
          height:168,
          pos:{
              x:487,
              y:620,
              scale:1
          },
      })
      // text 添加文字数据基础函数；
      .text(this.detail.name,{
          width:530,
          align:'left',
          normalStyle:{
            font : `30px Microsoft YaHei,sans-serif`,
            lineHeight: 32,
          },
          pos:{
              x:110,
              y:525,
          },
      })
      // text 添加文字数据基础函数；
      .text('加入学习',{
          width:96,
          align:'left',
          normalStyle:{
            font : `24px Microsoft YaHei,sans-serif`,
            lineHeight: 28,
             color: '#999',
          },
          pos:{
              x:254,
              y:660,
          },
      })
       // text 添加文字数据基础函数；
      .text('长按识别二维码',{
          width:168,
          align:'left',
          normalStyle:{
            font : `24px Microsoft YaHei,sans-serif`,
            lineHeight: 28,
             color: '#999',
          },
          pos:{
              x:254,
              y:708,
          },
      })
      .draw( b64 =>{
        // console.log(b64);
        this.imgUrl = b64
      });
    },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>