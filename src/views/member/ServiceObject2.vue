<template>
  <div>
    <van-tabs v-model="active" line-height="2px" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-width="26px" :sticky="true">
      <van-tab title="消费用户">
        <van-search @search="onSearch" show-action shape="round" v-model="keyword" placeholder="请输入昵或真实姓名称搜索">
          <template slot="action">
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getList1">
          <div v-for="(item,index) in list1" :key="index">
            <van-cell :border="false">
              <div slot="title" class="flex flex-align-center">
                <img class="avatar-25" :src="item.with_guest.avatar" alt srcset />
                <div class="fz-14 c3">{{item.with_guest.nick_name}}</div>
              </div>
            </van-cell>
            <van-cell title="消费总金额" :value="item.with_guest.total_cost" title-class="fz-13 c9" value-class="fz-12 text-price" :border="false"></van-cell>
            <van-cell title="消费次数" :value="item.with_guest.total_cost_times + '次'" title-class="fz-13 c9" value-class="fz-12 c9" :border="false"></van-cell>
            <van-cell title="引荐人" :value="item.with_superior_guest.real_name || item.with_superior_guest.nick_name" title-class="fz-13 c9" value-class="fz-12" :border="false"></van-cell>
            <van-cell title="电话" :value="item.with_guest.total_cost" title-class="fz-13 c9" :border="false">
              <div slot="default">
                <a :href="'tel:'+item.with_superior_guest.phone">{{item.with_superior_guest.phone}}</a>
              </div>
            </van-cell>
            <van-cell title="绑定时间" :value="item.created_at" title-class="fz-13 c9" value-class="fz-12 c9" :border="false"></van-cell>
            <div class="bar-1"></div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="未消费用户">
        <van-search @search="onSearch2" show-action shape="round" v-model="keyword2" placeholder="请输入昵或真实姓名称搜索">
          <template slot="action">
            <div @click="onSearch2">搜索</div>
          </template>
        </van-search>
        <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="getList2">
          <div v-for="(item,index) in list2" :key="index">
            <van-cell :border="false">
              <div slot="title" class="flex flex-align-center">
                <img class="avatar-25" :src="item.with_guest.avatar" alt srcset />
                <div class="fz-14 c3">{{item.with_guest.nick_name}}</div>
              </div>
            </van-cell>
            <van-cell title="引荐人" :value="item.with_superior_guest.real_name || item.with_superior_guest.nick_name" title-class="fz-13 c9" value-class="fz-12" :border="false"></van-cell>
            <van-cell title="电话" :value="item.with_guest.total_cost" title-class="fz-13 c9" :border="false">
              <div slot="default">
                <a :href="'tel:'+item.with_superior_guest.phone">{{item.with_superior_guest.phone}}</a>
              </div>
            </van-cell>
            <van-cell title="绑定时间" :value="item.created_at" title-class="fz-13 c9" value-class="fz-12 c9" :border="false"></van-cell>
            <div class="bar-1"></div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        keyword2: "",
        active: 0,
        list1: [],
        list2: [],
        page: [1, 1],
        loading1: false,
        finished1: false,
        loading2: false,
        finished2: false
      };
    },
    filters: {
      fn(str) {
        return str.split(" ")[0];
      }
    },
    methods: {
      onSearch() {
        this.list1 = [];
        this.loading1 = false;
        this.finished1 = false;
        this.page[0] = 1;
        // this.getList1();
      },
      onSearch2() {
        this.list2 = [];
        this.loading2 = false;
        this.finished2 = false;
        this.page[1] = 1;
        // this.getList2();
      },
      async getList1() {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/superior/ambassador-first", {
            params: {
              nick_name: this.keyword,
              activation: 1,
              page: this.page[0]++
            }
          }
        );
        if (code == 0) {
          this.list1 = [...this.list1, ...data.data];
          this.loading1 = false;
          if (this.list1.length >= data.total) {
            this.finished1 = true;
          }
        } else {
          this.$toast(message);
        }
      },
      async getList2() {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/superior/ambassador-first", {
            params: {
              nick_name: this.keyword2,
              activation: 0,
              page: this.page[1]++
            }
          }
        );
        if (code == 0) {
          this.list2 = [...this.list2, ...data.data];
          this.loading2 = false;
          if (this.list2.length >= data.total) {
            this.finished2 = true;
          }
        } else {
          this.$toast(message);
        }
      },
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      }
    }
  };
</script>

<style lang="less" scoped>
  .lh-35 {
    line-height: 35px;
  }

  .avatar-35 {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .avatar-25 {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>