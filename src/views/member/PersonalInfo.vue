<template>
  <div>
    <van-cell-group :border="false">
      <van-cell title-class="flex flex-align-center c9" title="修改头像" value="内容">
        <div class="flex flex-end" slot="default">
          <img class="avatar" src="../../assets/img/noface.png" alt="">
        </div>
      </van-cell>
      <van-cell title-class="c9" value-class="c3" title="二维码名片" value="上传" />
      <van-cell title-class="c9" value-class="c3" title="姓名" value="张萌萌" />
      <van-cell title-class="c9" value-class="c3" title="绑定号码" value="13789637424" />
      <van-cell title-class="c9" value-class="c3" title="昵称" value="k.ill" />
      <van-cell title-class="c9" value-class="c3" title="联系电话" value="13789637424" />
    </van-cell-group>
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
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .avatar{
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
</style>