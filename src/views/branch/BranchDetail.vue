<template>
  <div class="p-10" v-html="content">
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
    methods: {},
    created() {
      this.$toast.loading({messages:"加载中..."})
      axios.get(`/branch/detail?id=${this.$route.params.id}`)
        .then(res=>{
          if(res.code==0){
            this.$toast.clear();
            this.content = res.data.text;
            document.title = res.data.title
          }else{
            this.$toast.fail(messege)
          }
        })
    },
    mounted() {
      console.log(this.$route.params.id);

    }
  };
</script>
<style lang="less" scoped>
</style>