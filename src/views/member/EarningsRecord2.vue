<template>
  <div>
    <van-sticky>
      <van-search v-model="keyword" shape="round" @search="onSearch" placeholder="请输入昵称搜索" />
      <div class="dropdown-menu">
        <div class="dropdown-item" @click="isShowDate = true">
          <div class="fz-14 c3 mr-10">全部收益</div>
          <van-icon name="arrow-down" size="12px" color="#333" />
        </div>
        <div class="dropdown-item" @click="isShowType = true">
          <div class="fz-14 c3 mr-10">全部来源</div>
          <van-icon name="arrow-down" size="12px" color="#333" />
        </div>
      </div>
    </van-sticky>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <ul class="earning-list">
        <div class="ptb-10 text-price fz-13">合计：￥{{total}}</div>
        <li class="earning-item" v-for="(item,index) in list" :key="index">
          <div class="flex flex-jus fz-13 c9 mb-10">
            <div class="flex flex-align-center">
              <img class="avatar" :src="item.with_order_guest.avatar" alt />
              <div
                class="fz-13 c3 text-hide"
                style="max-width:100px;"
              >{{item.with_order_guest.nick_name}}</div>
              <div class="tag">{{typeArr[item.type].text}}</div>
            </div>
            <div class="fz-15 text-price">+{{item.amount}}</div>
          </div>
          <div class="flex flex-jus fz-13 c9 mb-10">
            <div>订单编号</div>
            <div>{{item.order_number}}</div>
          </div>
          <div class="flex flex-jus fz-13 c9">
            <div>订单金额</div>
            <div>¥{{item.order_price}}</div>
          </div>
        </li>
      </ul>
    </van-list>
    <!-- 时间选择 -->
    <van-popup v-model="isShowDate" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="chooseDate"
        @cancel="resetDate"
        cancel-button-text="重置时间"
      />
    </van-popup>
    <van-popup v-model="isShowType" position="bottom">
      <van-picker
        :columns="typeArr"
        show-toolbar
        @cancel="isShowType = false"
        @confirm="chooseType"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isShowDate: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      isShowType: false,
      typeArr: [
        {
          text: "全部收益",
          value: "0"
        },
        {
          text: "分享会员收益",
          value: "1"
        },
        {
          text: "分享传播大使收益",
          value: "2"
        },
        {
          text: "服务会员收益",
          value: "3"
        },
        {
          text: "服务传播大使收益",
          value: "4"
        }
      ],
      keyword: "",
      date: "",
      type: "",
      total: 0,
      list: [],
      loading: false,
      finished: false,
      page: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSearch() {
      this.list = [];
      this.page = 1;
      this.loading = false;
      this.finished = false;
    },
    resetDate() {
      this.list = [];
      this.page = 1;
      this.date = "";
      this.loading = false;
      this.finished = false;
      this.isShowDate = false;
    },
    chooseDate(e) {
      this.list = [];
      this.page = 1;
      this.date = e.getFullYear() + "-" + (e.getMonth() + 1);
      this.loading = false;
      this.finished = false;
      this.isShowDate = false;
    },
    chooseType(e) {
      this.list = [];
      this.page = 1;
      if (e.value == 0) {
        this.type = "";
      } else {
        this.type = e.value;
      }
      this.loading = false;
      this.finished = false;
      this.isShowType = false;
    },
    async getList() {
      let params = {
        page: this.page,
        nick_name: this.keyword
      };
      if (this.date) {
        params.date = this.date;
      }
      if (this.type) {
        params.type = this.type;
      }
      this.$toast.loading({ message: "加载中..." });
      let { code, data, message } = await window.axios.get(
        `/user/superior/live-income`,
        {
          params
        }
      );
      this.page++;
      if (code == 0) {
        this.$toast.clear();
        this.total = data.total;
        this.list = [...this.list, ...data.list.data];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (data.list.current_page == data.list.last_page) {
          this.finished = true;
        }
      } else {
        this.$toast.fail(message);
      }
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.earning-list {
  padding: 10px;
  background-color: #f8f8f8;
  .earning-item {
    margin-bottom: 10px;
    padding: 10px 10px 15px;
    background-color: #fff;
    border-radius: 5px;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .avatar {
      margin-right: 10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .tag {
      margin-left: 5px;
      padding: 1px 4px;
      border-radius: 2px;
      border: 1px solid rgba(141, 185, 223, 1);
      font-size: 11px;
      color: #8db9df;
    }
  }
}
.dropdown-menu {
  height: 45px;
  display: flex;
  .dropdown-item {
    flex: 1;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>