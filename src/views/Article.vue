<template>
  <div>
    <div v-html="content"></div>
    <div v-if="share_info" class="flex flex-column flex-center flex-align-center">
      <div class="fz-13 c6">联系微信</div>
      <img style="width:30vw;height:30vw;" :src="share_info.share_url" alt="">
      <div class="fz-13 c6">代理：{{share_info.with_guest.real_name}}</div>
      <div class="fz-13 c6">电话：{{share_info.with_guest.phone}}</div>
      <div class="fz-12 c9">长按识别二维码添加微信</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        content:"",
        share_id:"",
        share_info:""
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getData(){
        this.$toast.loading({messages:"加载中..."})
        let {code,data,messages} = await axios.get(`/article/detail?id=${this.$route.params.id}&share_id=${this.share_id}`);
        if(code==0){
            this.$toast.clear();
            this.content = data.text;
            document.title = data.title
            data.share_info ? this.share_info = data.share_info : "";
          }else{
            this.$toast.fail(messege)
          }
      }
    },
    created() {
      let userinfo = JSON.parse(localStorage.getItem("userinfo"));
      this.share_id = userinfo.id;
      this.getData()
    },
    mounted() {


    }
  };
</script>
<style lang="less" scoped>
</style>