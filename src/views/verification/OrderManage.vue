<template>
  <div class="page">
    <!-- <router-link :to="{name:'verification_order_detail',query:{code:'64e7f23311adcedefb3ae6d99861cb85'}}">订单详情</router-link> -->

    <van-sticky>
      <van-tabs v-model="status" title-active-color="#8DB9DF" title-inactive-color="#999" :line-width="0">
        <van-tab title="全部订单"></van-tab>
        <van-tab title="待核销"></van-tab>
        <van-tab title="已核销"></van-tab>
      </van-tabs>
      <div class="search-bar">
        <div class="search-input">
          <div class="condition" @click="showPicker" data-type="condition">
            <span>{{condition[search_key]}}</span>
            <van-icon name="arrow-down" />
          </div>
          <input type="text" v-model="search_value">
          <van-icon @click="searchEvent" name="search" size="20px" color="#ccc" />
        </div>
        <div class="btn-date flex flex-align-center" @click="showPicker" data-type="date">
          <div style="flex:1;min-height:1px;">{{order_time||"选择日期"}}</div>
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="order-count">
        <span class="fz-12 c9">订单总数：</span>
        <span class="fz-12 text-price">{{orderCount}}</span>
      </div>
    </van-sticky>

    <!-- 订单列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <ul class="order-list">
        <li class="order-item" v-for="(item,index) in list" :key="item.id">
          <div class="flex flex-align-center mb-15">
            <img class="thumb" :src="item.course_image" alt="">
            <div class="fz-15 c3 ml-10">{{item.course_title}}</div>
          </div>
          <div class="bar-1 mb-10"></div>
          <van-cell :border="false" title-class="c9" value-class="text-price text-left" title="订单状态" :value="item.status == 0? '待核销':'已核销'" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="昵称" :value="item.with_guest.nick_name" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="姓名" :value="item.with_guest.real_name" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="手机号" :value="item.with_guest.phone" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="订单编号" value="456788909867556" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="下单时间" :value="item.updated_at" />
          <div class="flex flex-end pt-10">
            <div v-if="item.status == 0" class="btn-youya" :data-id="item.id" @click="verification">确认核销</div>
            <div @click="produce" :data-index="index" class="btn-youya-o ml-10">生成学员牌</div>
          </div>
        </li>
      </ul>
    </van-list>
    <!-- 订单列表 -->
    <van-popup v-model="isShowCondition" position="bottom">
      <van-picker :columns="condition" @confirm="selectCondition" show-toolbar title="搜索条件" />
    </van-popup>
    <van-popup v-model="isShowDate" position="bottom">
      <van-datetime-picker v-model="currentDate" @confirm="selectDate" @cancel="closeDate" type="date" :min-date="minDate" :max-date="currentDate" />
    </van-popup>
    <van-popup v-model="isShowImg">
      <div class="student-container" style="background-image: url(../img/bg-001.png);">
        <img :src="studentImg" alt="">
        <div class="close" @click="close">
          <van-icon name="close" size="30px" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  /**
   * 格式化日期格式
   * YYYY/yyyy/YY/yy 表示年份
   * MM/M 月份
   * W/w 星期
   * dd/DD/d/D 日期
   * hh/HH/h/H 时间
   * mm/m 分钟
   * ss/SS/s/S 秒
   * @param formatStr 格式化规则
   * @returns {string} 格式化后的字符串
   */
  Date.prototype.format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, this.getMonth() > 8 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
  };
  import MCanvas,{MCrop} from 'mcanvas'
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowImg:false,
        studentImg:"",
        isShowCondition: false,
        isShowDate: false,
        search_value: "",
        currentDate: new Date(),
        minDate: new Date("2019-01-01"),
        status: 0,
        condition: ["不限", "用户昵称", "用户姓名", "用户手机", "课程名称"],
        search_key: 0,
        order_time: "",
        list: [],
        loading: false,
        finished: false,
        orderCount: "",
        page: 1
      };
    },
    watch: {
      status(n, o) {
        console.log(11)
        if (n != o) {
          this.list = []
          this.page = 1;
          this.getList()
        }
      }
    },
    computed: {},
    methods: {
      searchEvent() {
        console.log(1231232);
        this.list = [];
        this.page = 1;
        this.getList()
        this.finished = false;

      },
      showPicker(e) {
        let {
          type
        } = e.currentTarget.dataset;
        switch (type) {
          case "condition":
            this.isShowCondition = true;
            break;
          case "date":
            this.isShowDate = true;
            break;
          default:
            console.error("type is not define");
            break;
        }
      },
      selectCondition(value, index) {
        this.search_key = index;
        this.isShowCondition = false;
      },
      selectDate(date) {
        this.order_time = date.format("YYYY-MM-DD");
        this.isShowDate = false;
      },
      closeDate() {
        this.isShowDate = false;
      },
      async getCount() {
        let {
          code,
          data,
          message
        } = await axios.get("/user/off/reservation-order/statistics");
        if (code == 0) {
          this.orderCount = data.count;
        } else {
          this.$toast.fail(message)
        }
      },
      async getList() {
        var option = {};
        if (this.status - 1 >= 0) {
          option.status = this.status - 1;
        }
        if (this.search_key > 0) {
          option.search_key = this.search_key;
        }
        if (this.search_value) {
          option.search_value = this.search_value;
        }
        if (this.order_time) {
          option.order_time = this.order_time
        }
        this.$toast.loading({
          message: "加载中..."
        })
        let {
          code,
          data,
          message
        } = await axios.get("/user/off/reservation-order/", {
          params: {
            ...option,
            page: this.page++
          }
        });
        if (code == 0) {
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          if (data.current_page == data.last_page) {
            // 如果没有更多数据停止加载
            this.finished = true;
          }
        } else {
          this.$toast.fail(messege)
        }
      },
      // 核销
      async verification(e) {
        let {
          id
        } = e.currentTarget.dataset;
        var b = await this.$dialog.confirm({
          title: '提示',
          message: '确认核销？'
        }).then(() => {
          return true;
          // this.$router.push('/verification/feedback')
        }).catch(() => {
          return false;
        });
        if (b) {
          this.$toast.loading({
            message: '加载中...'
          });
          let {
            code,
            data,
            message
          } = await axios.post("/user/off/reservation-order/off", {
            order_id: id
          });
          if (code == 0) {
            this.$toast.clear()
            this.$router.push('/verification/feedback')

          } else {
            this.$toast.fail(message)
          }
        }
      },
      close(){
        this.isShowImg = false
      },
      produce(e){
        let {index} = e.currentTarget.dataset;
        this.isShowImg = true
        this.compoundImg(this.list[index])
      },
      /**
       * 生成学员牌
       */
      compoundImg(params) {
        new Promise((resolve,reject)=>{
          MCrop(params.with_guest.avatar, {
            // cropper shape
            type: 'circle',
            // crop by pos
            x: 'center',
            y: '0',
            // radius
            r: "50%",
            // the success callback
            success(b64) {
                resolve(b64)
            },
          })
        })
        .then(avatar=>{
        let mc = new MCanvas({
          width: 690,
          height: 834,
          backgroundColor: 'white',
        });
        // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
        mc.background("../img/bg-001.png", {
            left: 0,
            top: 0,
            color: '#ffffff',
            type: 'crop',
          })
          .rect({
            x: 0,
            y: 0,

            // 矩形尺寸；
            width: '100%',
            height: '100%',

            // 矩形填充颜色
            fillColor: '#fff',
          })
          // 模板背景图连接
          .add("../img/bg-002.png", {
            width: 300,
            height: 154,
            pos: {
              x: 197,
              y: 400,
              scale: 1
            },
          })
          .add("../img/logo-2.png", {
            width: 130,
            height: 165,
            pos: {
              x: 280,
              y: 90,
              scale: 1
            },
          })
          .circle({
            // 圆形圆心位置，支持多种值；
            // x: 250 / '250px' / '100%' / 'left:250' / 'center',
            x: 260,
            y: 400,

            // 圆形半径； 100 / '100%' / '100px'
            r: '85px',
            // 圆形填充颜色
            fillColor: '#ffffff',
          })
          // 用户头像 params.with_guest.avatar
          .add(avatar, {
            width: 164,
            height: 164,
            pos: {
              x: 263,
              y: 403,
              scale: 1
            }
          })
          // text 添加文字数据基础函数；
          .text(params.course_title||'广东广州第十期优雅形体礼仪课程', {
            width: 450,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 120,
              y: 288,
            },
          })
          // text 添加文字数据基础函数；
          .text('姓名', {
            width: 70,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 186,
              y: 610,
            },
          })
          // text 添加文字数据基础函数；
          .text(params.with_guest.real_name || '王萌萌', {
            width: 120,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 350,
              y: 610,
            },
          })
          // text 添加文字数据基础函数；
          .text('手机号', {
            width: 120,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 186,
              y: 670,
            },
          })
          // text 添加文字数据基础函数；
          .text(params.with_guest.phone_contact||'13544445555', {
            width: 250,
            align: 'left',
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32,
              color: '#333333',
            },
            pos: {
              x: 350,
              y: 670,
            },
          })
          .draw(b64 => {
            // console.log(b64);
            this.studentImg = b64
          });
        })
      }
    },
    created() {
      // this.getList()
      this.getCount()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .page {
    height: 100vh;
  }
  .student-container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    >img{
      width: 345px;
      box-shadow:0px 0px 10px 0px rgba(238,238,238,1);
    }
    .close{
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .search-bar {
    display: flex;
    padding: 5px 15px;
    background-color: #fff;

    .search-input {
      margin-right: 10px;
      display: flex;
      flex: 1;
      align-items: center;
      padding-right: 10px;
      background-color: #f8f8f8;
      border-radius: 3px;

      .condition {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        width: 65px;
        height: 30px;
        color: #999;
        font-size: 11px;
      }

      input {
        flex: 1;
        height: 30px;
        line-height: 30px;
        width: 100px;
        padding: 0 10px;
        background-color: transparent;
      }
    }
  }

  .btn-date {
    padding-right: 3px;
    width: 96px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: 1px solid rgba(221, 221, 221, 1);
    text-align: center;
    font-size: 11px;
    color: #999;
  }

  .order-count {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    background-color: #f8f8f8;
  }

  .order-list {
    background-color: #f8f8f8;

    .order-item {
      margin-bottom: 10px;
      padding: 15px;
      background-color: #fff;

      .thumb {
        width: 100px;
        height: 55px;
        border-radius: 5px;
      }
    }
  }

  .van-cell {
    padding: 0 12px;
  }

  .van-cell__title {
    flex: 0 1 80px;
  }

  .btn-youya,
  .btn-youya-o {
    width: 85px;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }

  .btn-youya {
    color: #fff;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
  }

  .btn-youya-o {
    border: 1px solid #8DB9DF;
    color: #8DB9DF;
  }
</style>