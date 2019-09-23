<template>
  <div>
    <van-cell-group>
      <van-field label="收货人" v-model="username" />
      <van-field v-model="phone" label="手机号" />
      <van-cell title="选择省/市/区" :value="area" is-link />
      <van-field v-model="address" label="详细地址" />
    </van-cell-group>
    <van-popup v-model="show">
      <van-area :area-list="areaList" />
    </van-popup>
    
  </div>
</template>

<script>
import areaList from "../../assets/js/city-data.js"
export default {
  components: {},
  props: {},
  data() {
    return {
      areaList,
      show:false,
      username:'',
      phone:"",
      area:"",
      address:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
  .van-cell.van-field{
    
  }
</style>