<template>
  <div class="bg-f5">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="user-box">
        <img src="@/assets/img/member/member-bg.png" alt />
        <div class="user-info">
          <div class="username">
            <div class="flex flex-align-center mb-5">
              <span class="fz-17 cf">{{userInfo.nick_name}}</span>
              <span class="vip-tag">{{userInfo.upgrade_role_name}}</span>
            </div>
            <div v-if="userInfo.superior_info" class="fz-12 cf mb-5">推荐人：{{userInfo.superior_info.real_name}}</div>
            <div v-if="userInfo.superior_info" class="fz-12 cf">推荐人电话：{{userInfo.superior_info.phone}}</div>
          </div>
          <img class="avatar" :src="userInfo.avatar || 'img/noface.png'" alt />
        </div>
      </div>
      <div class="p-10">
        <!-- 我的收益 -->
        <div class="member-box">
          <div class="title">
            <div>我的收益</div>
            <router-link to="/member/withdraw">
              <div class="withdraw-btn">
                <span class="fz-11 cf">收益提现</span>
                <van-icon name="arrow" color="#fff" size="11px" />
              </div>
            </router-link>
          </div>
          <div class="flex flex-aro ptb-10">
            <div class="text-center">
              <div class="text-price2 fz-16 mb-5">{{userInfo.total_revenue}}</div>
              <div class="fz-12 c9">历史收益</div>
            </div>
            <div class="text-center">
              <div class="text-price2 fz-16 mb-5">{{userInfo.total_freeze}}</div>
              <div class="fz-12 c9">已提现收益</div>
            </div>
            <div class="text-center">
              <div class="text-price2 fz-16 mb-5">{{userInfo.total_withdrawal}}</div>
              <div class="fz-12 c9">可提现收益</div>
            </div>
          </div>
          <van-grid :column-num="4" :border="false">
            <van-grid-item to="/member/service_object">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-01.png" alt srcset />
                <div class="fz-12 c9">服务对象</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/earnings_record2">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-02.png" alt srcset />
                <div class="fz-12 c9">收益明细</div>
              </div>
            </van-grid-item>
            <!-- <van-grid-item v-if="userInfo.grade != 3" to="/upgrade">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-03.png" alt srcset />
                <div class="fz-12 c9">服务升级</div>
              </div>
            </van-grid-item> -->
            <van-grid-item to="/member/withdraw_record">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-04.png" alt srcset />
                <div class="fz-12 c9">提现明细</div>
              </div>
            </van-grid-item>
            <van-grid-item v-if="userInfo.grade == 3" to="/member/rank_list">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-19.png" alt srcset />
                <div class="fz-12 c9">业绩排行</div>
              </div>
            </van-grid-item>
            <van-grid-item v-if="userInfo.grade == 3" to="/member/my_ambassador">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-20.png" alt srcset />
                <div class="fz-12 c9">我的传播大使</div>
              </div>
            </van-grid-item>
            <van-grid-item v-if="userInfo.grade == 3" to="/member/service_object2">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-01.png" alt srcset />
                <div class="fz-12 c9">大使服务对象</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <!-- 我的订单 -->
        <div class="member-box">
          <div class="title">
            <div>我的订单</div>
            <router-link to="/order_list">
              <div class="flex flex-align-center">
                <span class="fz-11 c9">查看全部</span>
                <van-icon name="arrow" color="#999" size="11px" />
              </div>
            </router-link>
          </div>
          <van-grid :column-num="5" :border="false">
            <van-grid-item to="/order_list?active=1">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-05.png" alt srcset />
                <div class="fz-12 c9">待支付</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/order_list?active=2">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-06.png" alt srcset />
                <div class="fz-12 c9">待发货</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/order_list?active=3">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-07.png" alt srcset />
                <div class="fz-12 c9">待收货</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/order_list?active=4">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-08.png" alt srcset />
                <div class="fz-12 c9">已完成</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/order_list?active=5">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-09.png" alt srcset />
                <div class="fz-12 c9">售后</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <!-- 我的学习 -->
        <div class="member-box">
          <div class="title">
            <div>我的学习</div>
          </div>
          <van-grid :column-num="4" :border="false">
            <van-grid-item to="/member/my_courses_list">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-10.png" alt srcset />
                <div class="fz-12 c9">我的课次</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/my_reservation_list">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-11.png" alt srcset />
                <div class="fz-12 c9">我的预约</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/my_video_list">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-12.png" alt srcset />
                <div class="fz-12 c9">我的视频</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/my_redeem_code">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-13.png" alt srcset />
                <div class="fz-12 c9">我的兑换码</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/live/my_live">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-14.png" alt srcset />
                <div class="fz-12 c9">课程直播</div>
              </div>
            </van-grid-item>
            <van-grid-item v-if="userInfo.grade > 1" to="/upgrade_order">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-14.png" alt srcset />
                <div class="fz-12 c9">会员课程</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>

        <!-- 其它功能 -->
        <div class="member-box">
          <div class="title">
            <div>其它功能</div>
          </div>
          <van-grid :column-num="4" :border="false">
            <van-grid-item to="/member/address_list">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-15.png" alt srcset />
                <div class="fz-12 c9">地址管理</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/my_cart">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-16.png" alt srcset />
                <div class="fz-12 c9">我的购物车</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/tool_detail/1?key=ABOUT_US">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-17.png" alt srcset />
                <div class="fz-12 c9">关于我们</div>
              </div>
            </van-grid-item>
            <van-grid-item to="/member/personal_info">
              <div slot="default" class="text-center">
                <img class="member-icon" src="@/assets/img/member/icon-18.png" alt srcset />
                <div class="fz-12 c9">个人资料</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>

      <!-- <div class="earnings" style="background-image: url(img/earnings-bg.png);">
        <div class="flex flex-align-center">
          <img src="img/icon-wallet2.png" alt />
          <div class="fz-17 fw-700 ml-10 text-brown">{{userInfo.total_withdrawal}}</div>
        </div>
        <router-link to="/member/withdraw">
          <span class="fz-12 text-brown">收益提现</span>
          <van-icon name="arrow" size="16" color="#333" />
        </router-link>
      </div>-->

      <!-- <van-grid :column-num="4" :border="false">
        <van-grid-item icon="img/menu2-01.png" text="我的课次" to="/member/my_courses_list" />
        <van-grid-item icon="img/menu2-02.png" text="我的预约" to="/member/my_reservation_list" />
        <van-grid-item icon="img/menu2-03.png" text="我的视频" to="/member/my_video_list" />
        <van-grid-item icon="img/menu2-04.png" text="我的兑换码" to="/member/my_redeem_code" />
      </van-grid>-->

      <!-- <van-cell-group :border="false">
        <van-cell title="我的订单" icon="img/icon-member-01.png" is-link to="/order_list" />
        <van-cell title="我的购物车" icon="img/icon-member-02.png" is-link to="/member/my_cart" />
        <van-cell title="收益明细" icon="img/icon-member-03.png" is-link to="/member/earnings_record" />
        <van-cell title="提现明细" icon="img/icon-member-04.png" is-link to="/member/withdraw_record" />
        <van-cell title="个人资料" icon="img/icon-member-05.png" is-link to="/member/personal_info" />
        <van-cell title="地址管理" icon="img/icon-member-07.png" is-link to="/member/address_list" />
        <van-cell
          title="关于我们"
          icon="img/icon-member-06.png"
          is-link
          to="/tool_detail/1?key=ABOUT_US"
        />
        <van-cell
          v-if="userInfo.is_off"
          title="核销端"
          icon="img/icon-member-06.png"
          is-link
          to="/verification/index"
        />
      </van-cell-group>-->
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        userInfo: {},
        isLoading: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getUserInfo() {
        this.$toast.loading({
          message: "加载中..."
        });
        let {
          code,
          data,
          message
        } = await axios.get("/user");
        if (code == 0) {
          this.$toast.clear();
          this.userInfo = data;

          this.isLoading = false;
          if (data.is_bind == 0) {
            this.$dialog
              .confirm({
                title: "提示",
                message: "您还未绑定手机号，是否前往绑定？"
              })
              .then(() => {
                this.$router.push({
                  name: "binding_information"
                });
              })
              .catch(e => {
                window.console.log(e);
              });
          }
        } else {
          this.$toast.fail(message);
        }
      },
      onRefresh() {
        this.getUserInfo();
      }
    },
    created() {
      this.getUserInfo();
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .text-brown {
    color: #695745;
  }

  .user-box {
    position: relative;

    .user-info {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      // padding-top: 72.5px;
      padding-left: 35px;
      padding-right: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .username {
        width: 200px;
      }

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      .vip-tag {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 5px;
        font-size: 11px;
        color: #fff;
        border-radius: 2px;
        background: linear-gradient(90deg,
            rgba(255, 158, 100, 1) 0%,
            rgba(255, 180, 120, 1) 100%);
      }
    }
  }

  .member-box {
    margin-bottom: 8px;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;

    .title {
      position: relative;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px dashed #eee;
        transform: scaleY(0.5);
      }
    }

    .withdraw-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 24px;
      background: linear-gradient(141deg,
          rgba(252, 186, 133, 1) 0%,
          rgba(255, 169, 117, 1) 100%);
      border-radius: 12px;
    }
  }

  .member-icon {
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }
</style>