<template>
  <div>
    <div class="address-item">
      <img src="/img/icon-dingwei.png" alt="">
      <div class="info fz-15 c3 plr-10">
        <div class="flex flex-jus flex-align-center">
          <div>熊娟  13445677888</div>
          <van-tag color="#D7736D" plain>默认</van-tag>
        </div>
        <div class="fz-14 c9">中国浙江省宁波市江北区市民路大道街198号腾辉大厦4楼39号</div>
      </div>
      <div class="edit">
        <img src="/img/icon-edit.png" alt="">
      </div>
    </div>
    <div class="address-item">
      <img src="/img/icon-dingwei2.png" alt="">
      <div class="info fz-15 c3 plr-10">
        <div class="flex flex-jus flex-align-center">
          <div>熊娟  13445677888</div>
          <!-- <van-tag color="#D7736D" plain>默认</van-tag> -->
        </div>
        <div class="fz-14 c9">中国浙江省宁波市江北区市民路大道街198号腾辉大厦4楼39号</div>
      </div>
      <div class="edit">
        <img src="/img/icon-edit.png" alt="">
      </div>
    </div>

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
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
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
      >img{
        width: 20px;
        height: 20px;
      }
    }
  }
</style>