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
      imgUrl:"",
      code:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    readyCode(){
      this.code = this.$route.query.code
      this.compoundImg()
    },
    compoundImg(){
      this.$toast.loading()
      let mc = new MCanvas({
        width: 750,
        height: 1334,
        backgroundColor: 'white',
      });
      // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
      mc.background("../img/bg-003.png",{
          left:0,
          top:0,
          color:'#ffffff',
          type:'crop',
      })
      // 模板背景图连接
      .add("../img/bg-003.png",{
          width:750,
          height:1334,
          pos:{
              x:0,
              y:0,
              scale:1
          },
      })
      // 模板背景图连接
      .add("../img/bg-005.png",{
          width:534,
          height:124,
          pos:{
              x:108,
              y:210,
              scale:1
          },
      })
      // text 添加文字数据基础函数；
      .text("商品兑换码",{
          width:190,
          align:'left',
          normalStyle:{
            font : `38px Microsoft YaHei,sans-serif`,
            lineHeight: 40,
            color: '#333333',
          },
          pos:{
              x:280,
              y:114,
          },
      })
      // text 添加文字数据基础函数；
      .text(this.code,{
          width:500,
          align:'center',
          normalStyle:{
            font : `bold 68px Microsoft YaHei,sans-serif`,
            lineHeight: 70,
             color: '#8DB9DF',
          },
          pos:{
              x:125,
              y:230,
          },
      })
       // text 添加文字数据基础函数；
      .text("使用说明：此券为商城的商品兑换券，请在下单的时候使用",{
          width:570,
          align:'center',
          normalStyle:{
            font : `26px Microsoft YaHei,sans-serif`,
            lineHeight: 30,
             color: '#999999',
          },
          pos:{
              x:90,
              y:376,
          },
      })
      .draw( b64 =>{
        // console.log(b64);
        this.imgUrl = b64;
        this.$toast.clear()
      });
    },
  },
  created() {
    this.readyCode()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>