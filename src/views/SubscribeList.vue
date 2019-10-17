<template>
  <div>
    <van-sticky>
      <div style="background:#fff;">
        <van-search placeholder="请输入搜索关键词" v-model="word" />
        <van-dropdown-menu active-color="#8DB9DF">
          <van-dropdown-item title="选择课程分类" v-model="class_id" :options="cate" />
          <van-dropdown-item title="选择开课时间" v-model="time_type" :options="time" />
        </van-dropdown-menu>
      </div>
    </van-sticky>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <ul class="subscribe-list">
        <li class="subscribe-item" v-for="(item,index) in list" :key="index">
          <router-link :to="{ name: 'subscribe_detail', params: { id: item.id }}">
            <div class="cover" :style="{backgroundImage:'url('+item.image+')'}">
              <div v-if="item.with_class" class="cate">{{item.with_class.name}}</div>
              <div class="count">
                <div class="avatar">
                  <div v-if="item.with_booked_user.length" v-for="(img,idx) in item.with_booked_user" :key="idx">
                    <img v-if="idx < 4" :src="img.with_guest.avatar" alt="">
                  </div>
                </div>
                <div class="ml-10">{{item.number_booked}} 人预约</div>
              </div>
              <div class="time">{{item.start_time}} 开课</div>
            </div>
          </router-link>
          <div class="flex plr-5">
            <div style="flex:1;">
              <div class="title mb-5">{{item.title}}</div>
              <div class="address">
                <van-icon name="location-o" /> {{item.address}}</div>
            </div>
              <div @click="jump" :data-id="item.id" :data-booked="item.number_booked" :data-booking="item.number_booking" class="youya-btn-o">预约</div>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
  const Mock = require("mockjs");
  export default {
    props: {},
    data() {
      return {
        word: "",
        class_id: "",
        time_type: "",
        cate: [{
            text: '全部',
            value: ""
          }
        ],
        time: [{
            text: '全部',
            value: ""
          },
          {
            text: '七天内',
            value: 1
          },
          {
            text: '一个月内',
            value: 2
          },
        ],
        list: [],
        page:1,
        loading: false,
        finished: false
      };
    },
    watch: {
      class_id(n,o){
        this.changeSearch(n,o)
      },
      time_type(n,o){
        this.changeSearch(n,o)
      },
      word(n,o){
        this.changeSearch(n,o)
      }
    },
    computed: {},
    methods: {
      changeSearch(n,o){
        if(n==o){
          return;
        }
        this.page = 1;
        this.list = [];
        this.finished = false;
      },
      async getList(){
        let params = {};
        if(this.class_id){
          params.class_id = this.class_id
        }
        if(this.word){
          params.word = this.word
        }
        if(this.time_type){
          params.time_type = this.time_type
        }
        let {code,data,message} = await axios.get(`/reservation?page=${this.page++}`,{params})
        if(code == 0){
          let list = data.data;
          this.list = [
            ...this.list,
            ...list
          ]
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.page > data.last_page) {
            this.finished = true;
          }
        }else{
          this.$toast.fail(message)
        }
      },
      async getCate(){
        let {code,data,message} = await axios.get("/reservation/class")
        if(code == 0){
          data.forEach(item=>{
            this.cate.push({
              text:item.name,
              value:item.id
            })
          })
        }else{
          this.$toast.fail(message)
        }
      },
      jump(e){
        let {booked,booking} = e.currentTarget.dataset;
        if(booked == booking){
          this.$toast.fail("预约已满")
          return;
        }
        var userinfo = JSON.parse(localStorage.getItem("userinfo")) || {}
        console.log(userinfo);
        if(!userinfo.phone || !userinfo.real_name){
          this.$router.push({
            path:`/binding_information`
          })
          return;
        }
        this.$router.push({name:'subscribe_auth',params:{course_id:e.currentTarget.dataset.id}})
      }
    },
    created() {},
    mounted() {
      this.getCate()
      // this.getList()
    }
  };
</script>
<style lang="less">
  [class*=van-hairline]::after {
    display: none;
  }

  .subscribe-list {
    padding: 10px 15px;

    .subscribe-item {
      margin-bottom: 20px;

      .cover {
        position: relative;
        width: 345px;
        height: 194px;
        margin-bottom: 10px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;

        .cate {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 3px 8px;
          background-color: #fff;
          background: linear-gradient(139deg, rgba(164, 203, 209, 1) 0%, rgba(147, 186, 193, 1) 100%);
          border-radius: 3px;
          font-size: 11px;
          color: #fff;
        }

        .time {
          position: absolute;
          right: 10px;
          bottom: 9px;
          font-size: 11px;
          color: #fff;
        }

        .count {
          position: absolute;
          left: 10px;
          bottom: 9px;
          display: flex;
          font-size: 11px;
          color: #fff;

          .avatar {
            display: flex;
            width: 40px;

            div {
              width: 25%;
            }

            img {
              width: 15px;
              height: 15px;
              border: 1px solid #fff;
              border-radius: 50%;
            }
          }
        }
      }

      .title {
        line-height: 21px;
        font-size: 15px;
        color: #333;
      }

      .address {
        line-height: 16px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .youya-btn-o {
    width: 50px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid rgba(141, 185, 223, 1);
    color: rgba(141, 185, 223, 1);
  }
  .van-search .van-cell{
    padding:5px 8px 5px 0;
  }
</style>