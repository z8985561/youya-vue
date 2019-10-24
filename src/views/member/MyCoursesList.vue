<template>
  <div>
    <ul class="courses-header">
      <li>
        <router-link to="/member/my_reservation_list">
          <img src="../../assets/img/icon-calendar.png" alt="">
          <div class="fz-12 c3">预约记录</div>
        </router-link>
      </li>
      <li @click="showCounselorModel">
        <img src="../../assets/img/icon-service.png" alt="">
        <div class="fz-12 c3">我的课程顾问</div>
      </li>
    </ul>
    <van-tabs v-model="active" :border="false" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-height="2" line-width="25">
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item.id">
              <div>
                <img src="../../assets/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">{{item.goods_name}}</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：{{item.remainder_times}}次</div>
                    <div>有效期至：{{item.expiration_date}}</div>
                  </div>
                  <router-link v-if="item.is_gift==0" :to="{name:'authentication',query:{
                    package_id:item.id,
                    remainder_times:item.remainder_times
                  }}">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="可转赠课程">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item.id">
              <div>
                <img src="../../assets/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">{{item.goods_name}}</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：{{item.remainder_times}}次</div>
                    <div>有效期至：{{item.expiration_date}} </div>
                  </div>
                  <router-link v-if="item.is_gift==0" :to="{name:'member_package_gift',query:{
                    package_id:item.id,
                    remainder_times:item.remainder_times
                  }}">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="不可转增课程">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item.id">
              <div>
                <img src="../../assets/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">{{item.goods_name}}</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：{{item.remainder_times}}次</div>
                    <div>有效期至：{{item.expiration_date}} </div>
                  </div>
                  <router-link v-if="item.is_gift==0">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
    </van-tabs>
    <!-- 课程顾问 -->
    <van-popup v-model="isShowCounselor" :closeable="true">
      <div v-if="teacher" class="counselor">
        <div class="flex mb-15">
          <img class="avatar" :src="teacher.avatar" alt="">
          <div class="ml-10">
            <div class="fz-17 c3 mb-10">{{teacher.name}}</div>
            <div class="fz-14 c9">{{teacher.phone}} <a class="btn-youya-o plr-5" :href="'tel:'+teacher.phone">一键拨打</a></div>
          </div>
        </div>
        <div class="flex flex-center mb-5">
          <div class="erweima" style="background-image: url(../../assets/img/erweima-bg.png);">
            <img :src="teacher.qr" alt="">
          </div>
        </div>
        <div class="fz-12 c9 text-center">识别二维码咨询详情</div>
      </div>
    </van-popup>
    <!-- 课程顾问 -->
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowCounselor: false,
        active: 0,
        list: [],
        loading: false,
        finished: false,
        teacher: {}
      };
    },
    watch: {
      active(n,o){
        if(n==o) return;
        this.list = [];
        this.finished = false;
        // this.getList()
      }
    },
    computed: {},
    methods: {
      showCounselorModel() {
        if(!this.teacher){
          this.$toast.fail("暂时没有配置顾问老师")
          return
        }
        this.isShowCounselor = true;
      },
      async getTeacher() {
        let {
          code,
          data,
          message
        } = await axios.get("/user/package-teacher");
        if (code == 0) {
          this.teacher = data;
        } else {
          this.teacher = null
        }
      },
      async getList(){
        if(this.active==0){
          var {code,data,message} = await axios.get("/user/package");
        }else{
          var {code,data,message} = await axios.get("/user/package",{params:{
            is_gift: this.active -1
          }});
        }
        if(code==0){
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
          this.$toast(message)
        }
      }
    },
    created() {
      this.getTeacher()
    },
    mounted() {}
  };
</script>
<style lang="less">
  .van-popup--center {
    border-radius: 5px;
  }

  .courses-header {
    padding: 16px 0;
    display: flex;
    justify-content: space-around;

    li {
      text-align: center;
    }

    img {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
  }

  .courses-list {
    padding: 10px;
    background-color: #F8F8F8;

    .courses-item {
      display: flex;
      padding: 17px 10px 19px;
      background-color: #fff;
      border-radius: 5px;

      img {
        width: 20px;
        height: 20px;
      }

      .courses-info {
        margin-left: 10px;
        flex: 1;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .btn-youya-o {
    width: 50px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    border: 1px solid rgba(141, 185, 223, 1);
    font-size: 11px;
    color: #8DB9DF;
    text-align: center;
  }

  .counselor {
    padding: 20px;
    width: 290px;
    box-sizing: border-box;

    .avatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
  }

  .erweima {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 165px;
    background-position: center;
    background-size: cover;

    img {
      height: 120px;
      width: 120px;
    }
  }
</style>