<template>
  <div>
    <div class="header-info">
      <img src="@/assets/img/member/rank-list-bg.png" alt />
      <div class="userinfo-box">
        <div class="text-center">
          <div class="fz-20 cf">{{msg ? msg.ranking :'未上榜'}}</div>
          <div class="fz-12 cf">我的名次</div>
        </div>
        <div class="avatar">
          <img :src="userInfo.avatar" alt srcset />
          <div class="fz-13 cf">{{userInfo.nick_name}}</div>
        </div>
        <div class="text-center">
          <div class="fz-20 cf">{{msg ? msg.amount :0}}</div>
          <div class="fz-12 cf">我的业绩</div>
        </div>
      </div>
      <div class="change-box">
        <div class="tab" @click="active = 0" :class="active == 0 ? 'on':''">季度排行</div>
        <div class="tab" @click="active = 1" :class="active == 1 ? 'on':''">年度排行</div>
      </div>
    </div>
    <div v-show="active == 0" class="rank-list">
      <div class="rank-item" v-for="(item,index) in quarter_ranking.list" :key="index">
        <div class="flex flex-align-center">
          <div class="rank-num">
            <img v-if="index == 0" src="@/assets/img/member/no1.png" alt />
            <img v-if="index == 1" src="@/assets/img/member/no2.png" alt />
            <img v-if="index == 2" src="@/assets/img/member/no3.png" alt />
            <span v-if="index >=3">{{index +1}}</span>
          </div>
          <img class="avatar" :src="item.with_guest.avatar" alt />
          <div class="nickname">{{item.with_guest.nick_name}}</div>
        </div>
        <div class="amount">{{item.amount}}</div>
      </div>
    </div>
    <div v-show="active == 1" class="rank-list">
      <div class="rank-item" v-for="(item,index) in year_ranking.list" :key="index">
        <div class="flex flex-align-center">
          <div class="rank-num">
            <img v-if="index == 0" src="@/assets/img/member/no1.png" alt />
            <img v-if="index == 1" src="@/assets/img/member/no2.png" alt />
            <img v-if="index == 2" src="@/assets/img/member/no3.png" alt />
            <span v-if="index >=3">{{index +1}}</span>
          </div>
          <img class="avatar" :src="item.with_guest.avatar" alt />
          <div class="nickname">{{item.with_guest.nick_name}}</div>
        </div>
        <div class="amount">{{item.amount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      active: 0,
      quarter_ranking: {},
      year_ranking: {},
      msg: {}
    };
  },
  watch: {
    active(n, o) {
      if (n == o) return;
      if (n == 0) {
        this.msg = this.quarter_ranking.sell;
      } else {
        this.msg = this.year_ranking.sell;
      }
    }
  },
  created() {
    this.get_year_ranking();
    this.get_quarter_ranking();
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      this.$toast.loading({ message: "加载中..." });
      let { code, data, message } = await axios.get("/user");
      if (code == 0) {
        this.$toast.clear();
        this.userInfo = data;
      } else {
        this.$toast.fail(message);
      }
    },
    async get_year_ranking() {
      let { code, data, message } = await window.axios.get(
        "/user/superior/year-ranking"
      );
      if (code == 0) {
        this.year_ranking = data;
      } else {
        this.$toast.fail(message);
      }
    },
    async get_quarter_ranking() {
      let { code, data, message } = await window.axios.get(
        "/user/superior/quarter-ranking"
      );
      if (code == 0) {
        this.quarter_ranking = data;
        this.msg = data.sell;
      } else {
        this.$toast.fail(message);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header-info {
  position: relative;
  .userinfo-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .avatar {
      position: relative;
      width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
      }
    }
  }
  .change-box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    display: flex;
    .tab {
      position: relative;
      height: 45px;
      line-height: 45px;
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #fff;
      &.on::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        border: 5px solid transparent;
        border-bottom-color: #fff;
        transform: translateX(-50%);
      }
    }
  }
}
.rank-list {
  padding: 10px;
  .rank-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    &::after {
      content: "";
      position: absolute;
      left: 5px;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: #eee;
      transform: scaleY(0.5);
    }
    .rank-num {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      font-size: 13px;
      color: #999;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .avatar {
      margin-right: 10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .nickname {
      font-size: 13px;
      color: #999;
      width: 230px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .amount {
      font-size: 15px;
      color: #8db9df;
    }
  }
}
</style>