<template>
  <div>
    <img :src="createShareImage.poster_qr" alt="">
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
export default {
  components: {},
  props: {},
  data() {
    return {
      active:0,
      list:[],
      createShareImage:{}
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
      let {code,data,message} = await axios.get("/course/create-share-image",{params:{id:id}})
      if(code == 0){
        this.$toast.clear()
        this.createShareImage = data
      }else{
        this.$toast.fail(message)
      }
    },
    onChangePoster(e){
      let {id,index} = e.currentTarget.dataset;
      this.active = index
      this.getShareImage(id)
    }
  },
  created() {
    this.getPosters()
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