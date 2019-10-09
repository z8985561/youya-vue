<template>
  <div class="p-15">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <div class="cell-group">
        <router-link v-for="item in list" :key="item.id" :to="{ name: 'video_detail', params: { id: item.id }}">
          <div class="cell">
            <div class="cell__image" :style="{backgroundImage: 'url('+item.image+')'}">
              <div class="sets">全{{item.period}}集</div>
            </div>
            <div class="ml-10 fz-14 c3" style="flex:1;">{{item.name}}</div>
          </div>
        </router-link>
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        page:1
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getList(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/user/course-order/list?page=${this.page++}`);
        if(code == 0){
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ]
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (data.current_page == data.last_page) {
            this.finished = true;
          }
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {

    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
.cell-group .cell{
  align-items: center;
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