<template>
  <div class="p-15">
      <div class="cell-group">
        <router-link v-for="item in list" :key="item.with_course.id" :to="{ name: 'video_detail', query: { id: item.with_course.id }}">
          <div class="cell">
            <div class="cell__image" :style="{backgroundImage: 'url('+item.with_course.image+')'}">
              <div class="sets">全{{item.with_course.period}}集</div>
            </div>
            <div class="ml-10 fz-14 c3 flex flex-column flex-jus" style="flex:1;">
              <div>{{item.with_course.name}}</div>
              <div class="fz-12 c9" v-if="item.status==1">有效期：{{item.expire_date}}</div>
              <div class="fz-12 c9" v-else>已过期</div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="list.length" class="text-center fz-15 c9">暂无视频课程~</div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [],
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getList(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await window.axios.get(`/user/course-order/list`);
        if(code == 0){
          this.$toast.clear()
          this.list = data
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getList()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
.cell-group .cell{
  padding-bottom:16px;
  border-bottom: 1px solid #F0F0F0;
}
  .cell__image{
    .sets{
      position: absolute;
      right: 5px;
      bottom: 3px;
      font-size: 10px;
      color: #fff;
    }
  }
</style>