<template>
  <div class="plr-15">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="user-info">
      <div class="username">
        <div class="fz-17 c3 fw-700 text-hide mb-5">
          {{userInfo.nick_name}}
        </div>
        <div v-if="userInfo.role > 0" class="fz-12 c9">代理商</div>
      </div>
      <img class="avatar" :src="userInfo.avatar || 'img/noface.png'" alt="">
    </div>

    <div class="earnings" style="background-image: url(img/earnings-bg.png);">
      <div class="flex flex-align-center">
        <img src="img/icon-wallet2.png" alt="">
        <div class="fz-17 fw-700 ml-10 text-brown">{{userInfo.total_withdrawal}}</div>
      </div>
      <router-link to="/member/withdraw">
        <span class="fz-12 text-brown">收益提现</span>
        <van-icon name="arrow" size="16" color="#333" />
      </router-link>
    </div>

    <van-grid :column-num="4" :border="false">
      <van-grid-item icon="img/menu2-01.png" text="我的课次" to="/member/my_courses_list" />
      <van-grid-item icon="img/menu2-02.png" text="我的预约" to="/member/my_reservation_list" />
      <van-grid-item icon="img/menu2-03.png" text="我的视频" to="/member/my_video_list" />
      <van-grid-item icon="img/menu2-04.png" text="我的兑换码" to="/member/my_redeem_code" />
    </van-grid>

    <van-cell-group :border="false">
      <van-cell title="我的订单" icon="img/icon-member-01.png" is-link to='/order/order_list'/>
      <!-- <van-cell title="我的购物车" icon="img/icon-member-02.png" is-link to='/member/my_cart'/> -->
      <van-cell title="收益明细" icon="img/icon-member-03.png" is-link to='/member/earnings_record'/>
      <van-cell title="提现明细" icon="img/icon-member-04.png" is-link to="/member/withdraw_record" />
      <van-cell title="个人资料" icon="img/icon-member-05.png" is-link to="/member/personal_info" />
      <!-- <van-cell title="地址管理" icon="img/icon-member-07.png" is-link to="/member/address_list" /> -->
      <van-cell title="关于我们" icon="img/icon-member-06.png" is-link to="/tool_detail/1" />
      <van-cell title="核销端" icon="img/icon-member-06.png" is-link to="/verification/index"/>
    </van-cell-group>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        userInfo:{},
        isLoading:false
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getUserInfo(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user");
        if(code == 0){
          this.$toast.clear()
          this.userInfo = data;
          this.isLoading = false;
        }else{
          this.$toast.fail(message)
        }
      },
    onRefresh() {
      this.getUserInfo()
    }

    },
    created() {
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .text-brown {
    color: #695745
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 22px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 20px;

    .username {
      flex: 1;
    }

    .avatar {
      width: 60px;
      height: 60px;
      box-shadow: 0px 0px 10px 0px rgba(199, 199, 206, 0.4);
      border: 2px solid rgba(255, 255, 255, 1);
      border-radius: 50%;
    }
  }

  .earnings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 73px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .van-cell.van-cell--clickable {
    padding: 18px 0;

    .van-image.van-icon__image {
      width: 24px !important;
      height: 24px !important;
    }
  }
</style>