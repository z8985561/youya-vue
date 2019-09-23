<template>
  <div class="plr-15">
    <div class="t_con auto">
      <span class="ab_tit_t">
        <h2>About Us</h2>
      </span>
      <span class="ab_tit_z">
        <p>
          <!--StartFragment-->广脉自成立以来，服务的传统品牌企业已超过17000家，维达、韩后、恒大冰泉、茅台、锐澳、好迪、拉芳、格力、劲酒、大益茶、咔哇熊奶粉、九江双蒸等诸多知名品牌均是广脉合作的品牌。广脉大数据引擎针对各行业特点、为各类消费品企业提供微信小程序开发、拼团小程序、团购小程序等解决方案，广脉科技为您提供一站式的定制服务。
          <!--EndFragment-->&nbsp;</p>
        <p>经营理念：一切以用户价值为依归
          <br> 注重长远发展，不因商业利益伤害用户价值；
          <br> 关注并深刻理解用户需求，不断以卓越的产品和服务满足用户需求；
          <br> 重视与用户的情感沟通，尊重用户感受，与用户共成长。
          <br><br> 为员工提供良好的工作环境和激励机制；
          <br> 完善员工培养体系和职业发展通道，使员工获得与企业同步成长的快乐；
          <br> 充分尊重和信任员工，不断引导和鼓励，使其获得成就的喜悦。&nbsp;</p>
        <p><br>先做人，再做事，然后才是做生意。一群人，一件事，一辈子。广脉一直坚信，你越努力，就越幸运！&nbsp;</p>
      </span>
      <div class="zzw-sb">
        <img src="http://www.guangmaipower.com/uploads/20190112/383ee924dff746fd0c717245f5e6f8f0.jpg" alt="荣誉证书1">
      </div>
      <div class="zzw-zs">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
      axios.get(`/article/detail?id=${this.$route.params.id}`)
    },
    mounted() {
      console.log(this.$route.params.id);

    }
  };
</script>
<style lang="less" scoped>
</style>