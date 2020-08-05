import { BasicLayout, RouteView } from '@layout';

/**
 * 路由表参数:
 * meta: {
 *  title: '' 标题
 *  icon: 设置后菜单中显示对应图标
 * }
 */

export default [
  {
    path: '/',
    meta: { title: '柜么家居' },
    component: BasicLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'index',
        meta: { title: '柜么家居' },
        component: () => import('@views/Index/Index.vue'),
      },
      {
        path: '/cloud',
        name: 'Cloud',
        meta: { title: '柜么云系统 - 柜么家居' },
        component: () => import('@views/Cloud/Cloud.vue'),
      },
      {
        path: '/smart',
        name: 'Smart',
        meta: { title: '柜么智能 - 柜么家居' },
        component: () => import('@views/Smart/Smart.vue'),
      },
      {
        path: '/college',
        name: 'College',
        meta: { title: '商学院 - 柜么家居' },
        component: () => import('@views/College/College.vue'),
      },
      {
        path: '/news',
        name: 'NewsDetail',
        meta: { title: '商学院 - 柜么家居' },
        component: () => import('@views/News/detail.vue'),
      },

    ],
  },
  {
    path: '*',
    name: 'notfound',
    hideInMenu: true,
    component: () => import('@/views/404'),
  },
];
