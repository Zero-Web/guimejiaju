import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouters from './router.config';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: configRouters,
});

router.afterEach((to) => {
  const title = to.meta.title || '柜么家居';
  document.title = title;
});
export default router;
