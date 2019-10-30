<template>
  <div>
    <div v-for="item in list" class="address-item">
      <img v-if="item.is_default == 1" src="../../assets/img/icon-dingwei.png" alt="">
      <img v-else src="../../assets/img/icon-dingwei2.png" alt="">
      <div @click="setDefault" :data-id="item.id" class="info fz-15 c3 plr-10">
        <div class="flex flex-jus flex-align-center mb-5">
          <div>{{item.name}}  {{item.phone}}</div>
          <van-tag v-if="item.is_default == 1" color="#D7736D" plain>默认</van-tag>
        </div>
        <div class="fz-14 c9">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</div>
      </div>
      <div class="edit">
        <router-link :to="{name:'address_edit',query:{id:item.id}}">
          <img src="../../assets/img/icon-edit.png" alt="">
        </router-link>
      </div>
    </div>
    <!-- <div class="address-item">
      <img src="../../assets/img/icon-dingwei2.png" alt="">
      <div class="info fz-15 c3 plr-10">
        <div class="flex flex-jus flex-align-center">
          <div>熊娟  13445677888</div>
        </div>
        <div class="fz-14 c9">中国浙江省宁波市江北区市民路大道街198号腾辉大厦4楼39号</div>
      </div>
      <div class="edit">
        <img src="../../assets/img/icon-edit.png" alt="">
      </div>
    </div> -->

    <div class="footer-bar p-10">
      <van-button size="large" round color="linear-gradient(to right, #9DC3E6,#83B3DB)" to="/member/address_edit">添加新地址</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    async setDefault(e){
      let id = e.currentTarget.dataset.id;
      let {code,data,message} = await axios.post("/user/address-default",{id})
      if(code==0){
        this.$toast.success("设置默认地址成功")
        // this.getList()
        setTimeout(()=>{
            this.$router.go(-1)
          },1500)
      }else{
        this.$toast.fail("设置失败")
      }
    },
    async getList(){
      var {code,data,message} = await axios.get("/user/address");
      if(code==0){
          this.list = data
      }else{
          this.$toast(message)
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
  .address-item{
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    >img{
      width: 25px;
      height: 25px;
    }
    .info{
      flex: 1;
    }
    .edit{
      height: 45px;
      width: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-left: 1px solid #eee;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
</style>