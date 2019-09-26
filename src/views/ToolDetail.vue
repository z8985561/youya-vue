<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      content:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData(){
      this.$toast.loading({messages:"加载中..."})
      let {code,data,messages} = await axios.get(`/home/tool-detail?id=${this.$route.params.id}`);
      if(code==0){
          this.$toast.clear();
          this.content = data.detail;
          document.title = data.title
        }else{
          this.$toast.fail(messege)
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
</style>