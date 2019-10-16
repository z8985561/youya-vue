<template>
  <div>
    <div class="plr-15 ptb-10">
      <div class="subscribe-item">
        <div class="cover" :style="{backgroundImage:'url('+course.image+')'}">
          <div v-if="course.with_class" class="cate">{{course.with_class.name}}</div>
          <div class="count">
            <div class="avatar">
              <div v-for="(img,idx) in course.with_booked_user" :key="idx">
                <img v-if="idx < 4" :src="img.with_guest.avatar" alt="">
              </div>
            </div>
            <div class="ml-10">{{course.number_booked || 0}} 人预约</div>
          </div>
          <div class="time">{{course.start_time}} 开课</div>
        </div>
        <div class="flex plr-5">
          <div style="flex:1;">
            <div class="title mb-5">{{course.title}}</div>
            <div class="address">
              <van-icon name="location-o" /> {{course.address}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-10"></div>

    <div class="plr-15 ptb-10 ">
      <h2 class="fz-15 c3 mb-10">课程简介</h2>
      <p class="fz-14 c9 mb-15">{{course.description}}</p>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">预约详情</h2>
      <div class="flex flex-align-center mb-20">
        <div class="fz-13 c9">
          剩余<span class="text-primary">{{course.number_booking - course.number_booked || 0}}</span>个名额
        </div>
        <div class="count2">
          <div class="avatar">
            <div v-for="(img,idx) in course.avatar" :key="idx">
              <img :src="img" alt="">
            </div>
          </div>
          <div class="fz-13 c9 ml-10"><span class="text-primary">{{course.number_booked || 0}}</span>人预约</div>
        </div>
      </div>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">讲师介绍</h2>
      <div class="detail">
        <img :src="course.lecturer_image" alt="">
        <div class="fz-13 c9">
          <div class="fz-15 text-primary">{{course.lecturer_name||'杨晓妮'}}</div>
          <div v-html="course.lecturer_detail"></div>
        </div>
      </div>
    </div>
    <footer class="footer-bar flex flex-center flex-align-center">
        <div @click="jump" :data-id="course.id" class="btn-youya">立即预约</div>
    </footer>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        course: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/reservation/detail?id=${this.$route.params.id}`);
        if(code == 0){
          this.$toast.clear()
          this.course = data;
        }else{
          this.$toast.fail(message)
        }
      },
      jump(e){
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
    created() {
      this.getData()

    },
    mounted() {

    }
  };
</script>
<style lang="less">
  .subscribe-item {
    .cover {
      position: relative;
      width: 345px;
      height: 194px;
      margin-bottom: 10px;
      background-size: cover;
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

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .count2 {
    display: flex;
    margin-left: 10px;
    padding-left: 15px;
    border-left: 1px solid #eee;
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }

  .detail {
    display: flex;
    align-items: flex-start;

    >img {
      width: 90px;
    }

    >div {
      flex: 1;
      margin-left: 10px;
    }

    p {
      line-height: 22px;
    }
  }
</style>