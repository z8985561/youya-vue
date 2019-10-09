<template>
  <div>
    <van-tabs v-model="active" :sticky="true" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-height="2" line-width="25">
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
          <ul class="reservation-list">
            <li class="reservation-item" v-for="(item,index) in list" :key="item.id">
              <div class="flex flex-jus mb-10">
                <div class="fz-13 c9">上课时间：{{item.course_start_time}}</div>
                <div class="fz-13 text-price">待消课</div>
              </div>
              <div class="flex mb-10">
                <img :src="item.course_image" alt="">
                <div class="ml-10 flex flex-column flex-jus">
                  <div class="fz-15 c3">{{item.course_title}}</div>
                  <div class="fz-13 c9">讲师：{{item.lecturer_name}}</div>
                </div>
              </div>
              <div class="flex flex-end">
                <div class="btn-youya">消课码</div>
                <div class="btn-default" :data-index="index" :data-id="item.id" @click="cancel">取消预约</div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="待消课">内容 2</van-tab>
      <van-tab title="已完成">内容 3</van-tab>
      <van-tab title="已过期">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        active: 0,
        list: [],
        loading: false,
        finished: false,
        page:1
      };
    },
    watch: {
      active(newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
      }
    },
    computed: {},
    methods: {
      async getList(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/reservation/list?page=${this.page++}`);
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
      },
      async cancel(e){
        let {id,index} = e.currentTarget.dataset;
        this.$dialog.confirm({
          title:"提示",
          message: '是否确认取消该课程？'
        })
        .then(()=>{
          return axios.post(`/reservation/cancel`,{id});
        })
        .then(res=>{
          let {code,data,message} = res;
          if(code == 0){
            this.$toast({message:"取消成功"})
            this.list.splice(index,1)
          }else{
            this.$toast.fail(message)
          }
        })
        .catch(()=>{
          console.log(333333);

        })
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .reservation-list{
    background-color: #F8F8F8;
    .reservation-item{
      margin-bottom: 10px;
      padding: 10px 15px 16px;
      background-color: #fff;
      img{
        width: 100px;
        height: 55px;
      }
    }
  }
  .btn-youya{
    width:85px;
    height:28px;
    line-height: 28px;
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    border-radius:14px;
    text-align: center;
    color: #fff;
  }
  .btn-default{
    margin-left: 10px;
    width:85px;
    height:28px;
    line-height: 28px;
    border-radius:14px;
    text-align: center;
    color: #999;
    border:1px solid #999;
    box-sizing: border-box;
  }
</style>