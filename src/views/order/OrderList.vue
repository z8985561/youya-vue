<template>
  <div>
    <van-sticky>
      <van-tabs v-model="active" line-height="2px" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" :sticky="true">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
        <van-tab title="已退款"></van-tab>
        <van-tab title="已取消"></van-tab>
      </van-tabs>
    </van-sticky>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <ul class="order-list">
        <li v-for="(item,index) in list" :key="item.id" :title="item" class="order-item">
          <div class="p-10 flex flex-jus">
            <div class="fz-13 c9">订单号：{{item.number}}</div>
            <div v-if="item.status==0" class="fz-12 text-price">待付款</div>
            <div v-if="item.status==1" class="fz-12 text-price">待发货</div>
            <div v-if="item.status==2" class="fz-12 text-price">待收货</div>
            <div v-if="item.status==3" class="fz-12 text-price">已完成</div>
            <div v-if="item.status==4" class="fz-12 text-price">已退款</div>
            <div v-if="item.status==5" class="fz-12 c9">已取消</div>
          </div>
          <router-link v-for="goods in item.with_detail" :key="item.id" :to="{name:'order_detail',query:{id:item.id}}">
            <div class="flex p-10">
              <img class="thumb" :src="goods.goods_image" alt="">
              <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
                <div class="fz-15 c3 text-hide2">{{goods.goods_title}}</div>
                <div class="flex flex-jus">
                  <div class="fz-15 c3">¥{{goods.goods_price}}</div>
                  <div class="fz-14 c9">x{{goods.quantity}}</div>
                </div>
              </div>
            </div>
          </router-link>
          <div class="plr-10 mb-10 fz-14 c3 text-right">共{{item.product_quantity}}件商品 合计<span class="text-price">¥{{item.pay_price}}</span></div>
          <div class="bar-1"></div>
          <div class="flex flex-end p-10">
            <div v-if="item.status==0" @click="cancel" :data-index="index" :data-id="item.id" class="btn-youya-o">取消订单</div>
            <router-link :to="{name:'order_detail',query:{id:item.id}}">
              <div v-if="item.status==1 || item.status==2" class="btn-youya-o">申请退款</div>
            </router-link>
            <router-link :to="{name:'order_detail',query:{id:item.id}}">
              <div v-if="item.status==0" class="btn-youya">去付款</div>
            </router-link>
            <div v-if="item.status==2" @click="complete" class="btn-youya">确认收货</div>
          </div>
        </li>
      </ul>
    </van-list>
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
        page: 1
      };
    },
    watch: {
      active(n, o) {
        if (n != o) {
          this.page = 1;
          this.loading = false;
          this.finished = false;
          this.list = []
        }
      }
    },
    computed: {},
    methods: {
      async complete(e){
        let flag = await this.$dialog.confirm({
            title: '提示',
            message: '是否要确认收货？'
          })
          .then(() => {
            return true
          })
          .catch(() => {
            return false
          })
        if (!flag) {
          return
        }
        this.$toast.loading({
          message: "确认收货中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.post(`/user/mall-order/complete`, {
          id: e.target.dataset.id
        });
        if (code == 0) {
          this.$toast.success("确认收货成功")
        } else {
          this.$toast.fail(messege)
        }
      },
      async cancel(e) {
        let flag = await this.$dialog.confirm({
            title: '提示',
            message: '是否要取消订单？'
          })
          .then(() => {
            return true
          })
          .catch(() => {
            return false
          })
        if (!flag) {
          return
        }
        this.$toast.loading({
          message: "取消中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.post(`/user/mall-order/cancel`, {
          id: e.target.dataset.id
        });
        if (code == 0) {
          this.$toast.success("取消成功")
          this.list[e.target.dataset.index].status = 5
        } else {
          this.$toast.fail(messege)
        }
      },
      async getList() {
        this.$toast.loading({
          message: "加载中..."
        })
        if (this.active - 1 >= 0) {
          var {
            code,
            data,
            messege
          } = await axios.get(`/user/mall-order/list?page=${this.page++}&status=${this.active-1}`);
        } else {
          var {
            code,
            data,
            messege
          } = await axios.get(`/user/mall-order/list?page=${this.page++}`);
        }
        if (code == 0) {
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          if (data.current_page == data.last_page) {
            // 如果没有更多数据停止加载
            this.finished = true;
          }
        } else {
          this.$toast.fail(messege)
        }
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .order-list {
    background-color: #f8f8f8;

    .order-item {
      margin-bottom: 10px;
      background-color: #fff;

      .thumb {
        width: 90px;
        height: 90px;
      }
    }
  }

  .btn-youya,
  .btn-youya-o {
    margin-left: 5px;
    width: 85px;
    height: 27px;
    line-height: 27px;
    border-radius: 14px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }

  .btn-youya {
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    color: #fff;
  }

  .btn-youya-o {
    border: 1px solid #999;
    color: #999;
  }
</style>