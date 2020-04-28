<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <div class="live-list">
        <router-link
          v-for="(item , index) in list"
          :key="index"
          :to="{name:'live_detail',query:{id:item.id}}"
        >
          <div class="live-item">
            <img :src="item.image" alt />
            <div class="fz-14 c3">{{item.name}}</div>
            <div class="fz-14 text-price">¥{{item.price}}</div>
          </div>
        </router-link>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      list: [],
      loading: false,
      finished: false,
      class_id: ""
    };
  },
  created() {
    this.class_id = this.$route.query.id;
  },
  methods: {
    async getList() {
      let { code, data, message } = await window.axios.get("/live/goods", {
        params: {
          class_id: this.class_id,
          page: this.page++
        }
      });
      if (code == 0) {
        this.list = [...this.list, ...data.data];
        this.loading = false;
        if (this.page >= data.last_page) {
          this.finished = true;
        }
      } else {
        window.console.log(message);
        this.$toast.fail(message);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.live-list {
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .live-item {
    margin-bottom: 10px;
    width: 167.5px;
    height: auto;
    line-height: 1.3;
    border: none;
    text-align: left;
    border-radius: 0;
  }
}
</style>