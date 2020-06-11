<template>
  <div>
    <div class="header">
      <!-- <img class="mb-10" src="../../assets/img/icon-amount.png" alt />
      <div class="fz-15 c3">提现到微信钱包</div>-->
    </div>
    <div class="plr-20">
      <div class="fz-13 c3 mb-20">提现金额</div>
      <div class="fz-28 c3 fw-700 momey-box">
        <div>￥</div>
        <input class="ml-10" type="number" v-model="amount" />
      </div>
      <div class="bar-1 mb-5"></div>
      <div class="fz-13 mb-40" style="color:#C7C7CE">
        当前可提现金额
        <span class="text-price">{{withdrawal}}</span>元
      </div>
      <!-- <div class="fz-13 mb-40" style="color:#C7C7CE">元低于200自动提现到微信，高于200提现需要后台审核</div> -->
    </div>
    <div class="bar-10"></div>
    <div class="p-10">
      <div class="fz-15 c3">提现方式</div>
      <!-- <van-cell @click="type = 1">
        <div slot="title" class="flex flex-align-center">
          <img class="member-icon mr-5" src="@/assets/img/member/weixin.png" alt srcset />
          <div class="fz-14 c9">提现到微信零钱</div>
        </div>
        <div slot="right-icon">
          <div class="checked" :class="type == 1 ? 'on':''"></div>
        </div>
      </van-cell> -->
      <van-collapse :border="false" v-model="type" accordion>
        <!-- <van-collapse-item name="1">
          <div slot="title" class="flex flex-align-center">
            <img class="member-icon mr-5" src="@/assets/img/member/zhifubao.png" alt srcset />
            <div class="fz-14 c9">提现到微信零钱</div>
          </div>
          <div slot="right-icon">
            <div class="checked" :class="type == 1 ? 'on':''"></div>
          </div>
        </van-collapse-item>-->
        <!-- <van-collapse-item name="2">
          <div slot="title" class="flex flex-align-center">
            <img class="member-icon mr-5" src="@/assets/img/member/zhifubao.png" alt srcset />
            <div class="fz-14 c9">提现到支付宝</div>
          </div>
          <div slot="right-icon">
            <div class="checked" :class="type == 2 ? 'on':''"></div>
          </div>
          <div>
            <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
            <van-field v-model="account" label="账号" placeholder="请输入账号" />
          </div>
        </van-collapse-item> -->
        <van-collapse-item name="1">
          <div slot="title" class="flex flex-align-center">
            <img class="member-icon mr-5" src="@/assets/img/member/yinhangka.png" alt srcset />
            <div class="fz-14 c9">提现的银行卡</div>
          </div>
          <div slot="right-icon">
            <div class="checked" :class="type == 1 ? 'on':''"></div>
          </div>
          <div>
            <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
            <van-field v-model="account" label="银行卡卡号" placeholder="请输入卡号" />
            <van-field v-model="bank_name" label="银行名称" placeholder="请输入银行卡名称" />
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="footer-bar flex flex-center">
      <div class="btn-youya" @click="withdrawApply">确认</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        text: "",
        // 提现金额
        amount: 0,
        withdrawal: "",
        // 提现方式1提现到微信零钱2提现到支付宝3提现到银行卡
        type: "1",
        name: "",
        account: "",
        bank_name: ""
      };
    },
    watch: {
      amount(value) {
        value = parseInt(value) || 0;
        let withdrawal = parseInt(this.withdrawal);
        if (value > withdrawal) {
          this.amount = withdrawal;
        }
        if (value) {
          this.amount = value;
        }
      }
    },
    computed: {},
    methods: {
      async withdrawApply() {
        let params = {};
        params.amount = parseFloat(this.amount);
        if (params.amount < 1) {
          this.$toast.fail("提现金额不能小于 1");
          return;
        }
        params.type = 3;
        // if (this.type == 1 && params.amount > 200) {
        //   this.$toast("微信提现金额不能大于200元");
        //   return;
        // }
        // if (this.type == 2) {
        //   params.type = this.type;
        //   if (!this.name) {
        //     this.$toast("请输入支付账号真实名称");
        //     return;
        //   }
        //   if (!this.account) {
        //     this.$toast("请输入支付宝账号");
        //     return;
        //   }
        //   params.name = this.name;
        //   params.account = this.account;
        // }

        if (this.type == 1) {
          params.type = this.type;
          if (!this.name) {
            this.$toast("请输入银行卡真实名称");
            return;
          }
          if (!this.account) {
            this.$toast("请输银行卡账号");
            return;
          }
          if (!this.bank_name) {
            this.$toast("请输银行名字");
            return;
          }
          params.name = this.name;
          params.account = this.account;
          params.bank_name = this.bank_name;
        }

        this.$toast.loading({
          message: "提现申请中..."
        });
        let {
          code,
          message
        } = await window.axios.post(
          "/user/finance-apply",
          params
        );
        if (code == 0) {
          this.$toast.success("申请成功");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else {
          this.$toast.fail(message);
        }
      },
      async getUserInfo() {
        this.$toast.loading({
          message: "加载中..."
        });
        let {
          code,
          data,
          message
        } = await window.axios.get("/user");
        if (code == 0) {
          this.$toast.clear();
          this.withdrawal = data.total_withdrawal;
        } else {
          this.$toast.fail(message);
        }
      }
    },

    created() {
      this.getUserInfo();
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .header {
    padding: 12.5px 0;
    text-align: center;

    img {
      width: 60px;
      height: 60px;
      display: inline-block;
    }
  }

  .momey-box {
    display: flex;
    padding-bottom: 10px;

    input {
      width: 90%;
    }
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, 0.2);
  }

  .member-icon {
    width: 30px;
    height: 30px;
  }

  .checked {
    position: relative;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 50%;

    &.on {
      border-color: #8db9df;
    }

    &.on::after {
      content: " ";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      background-color: #8db9df;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>