<template>
  <div class="exception">
    <div class="img-block"></div>
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，你访问的页面不存在,请检查输入的地址</div>
      <div class="actions">
        <button type="button" class="ant-btn ant-btn-primary">
          <router-link to="/">返回首页</router-link>
        </button>
        <button type="button" class="ant-btn" @click="goBack">
          <span>返回上一页({{ time }}s)</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'notfound',
  data() {
    return {
      time: 5,
    };
  },
  mounted() {
    const timer = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        clearInterval(timer);
        this.goBack();
      }
    }, 1000);
  },
  methods: {
    goBack() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.exception {
  display: flex;
  align-items: center;
  height: 80%;
  justify-content: center;
  min-height: 500px;
}

.exception .img-block {
  margin-right: 80px;
  width: 100%;
  max-width: 430px;
  height: 360px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg);
}

.exception .content h1 {
  margin-bottom: 24px;
  color: #434e59;
  font-weight: 600;
  font-size: 72px;
  line-height: 72px;
}
.exception .content .desc {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
  line-height: 28px;
}

.actions .ant-btn {
  margin-right: 20px;
}
</style>
