<template>
  <div class="layout-container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 页面内容 -->
    <router-view></router-view>
    <!-- 底部栏 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'BasicLayout',
  components: { Header, Footer },
  data() {
    return {};
  },
};
</script>

<style lang="less">
.layout-container {
}
</style>
