<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <div class="live-list">
        <div v-if="detail" class="live-link">
          <div class="flex mb-10">
            <img class="thumb" :src="detail.with_info.image" alt />
            <div class="flex flex-column flex-jus">
              <div class="fz-15 c3">{{detail.with_info.name}}</div>
              <div class="fz-13 c9">¥{{detail.pay_price}}</div>
            </div>
          </div>
          <div class="flex flex-end">
            <a class="btn-youya" :href="detail.code_url">去使用</a>
          </div>
        </div>
        <div class="live-link" v-for="(item,index) in list" :key="index">
          <div class="flex mb-10">
            <img class="thumb" :src="item.goods_image" alt />
            <div class="flex flex-column flex-jus">
              <div class="fz-15 c3">{{item.goods_name}}</div>
              <div class="fz-13 c9">¥{{item.goods_price}}</div>
            </div>
          </div>
          <div class="flex flex-end">
            <div class="btn-youya" @click="jump" :data-index="index">去使用</div>
          </div>
        </div>
      </div>
    </van-list>
    <div class="footer-bar flex flex-center flex-align-center">
      <a class="youya-btn" href="https://wx5d0e0e0b94136634.h5.xiaoe-tech.com/redeem_code/redeem_list">兑换记录</a>
    </div>
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
        detail: null
      };
    },
    created() {
      this.class_id = this.$route.query.id;
    },
    methods: {
      jump(e) {
        let {
          index
        } = e.currentTarget.dataset;
        if (this.list[index].code_url) {
          window.location.href = this.list[index].code_url
        } else {
          this.$toast.fail("邀请链接不存在")
        }
      },
      async getDetail() {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/upgrade/course"
        );
        if (code == 0) {
          this.detail = data;
        } else {
          // window.console.log(message);
          // this.$toast.fail(message);
          // setTimeout(() => {
          //   this.$router.back();
          // }, 1500);
        }
      },
      async getList() {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/live/order-list", {
            params: {
              page: this.page++
            }
          }
        );
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
    },
    created() {
      this.getDetail();
    }
  };
</script>

<style lang="less" scoped>
  .live-list {
    .live-link {
      padding: 15px;
      border-bottom: 8px solid #f8f8f8;

      .thumb {
        margin-right: 10px;
        width: 100px;
        height: 55px;
        background: rgba(255, 255, 255, 1);
        border-radius: 3px;
      }
    }
  }

  .btn-youya {
    width: 85px;
    height: 27px;
    line-height: 27px;
    background: linear-gradient(143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%);
    border-radius: 14px;
    color: #fff;
    text-align: center;
    font-size: 13px;
  }

  .youya-btn {
    display: block;
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    box-shadow: 1px 3px 8px rgba(157, 195, 230, 0.5);
  }
</style>