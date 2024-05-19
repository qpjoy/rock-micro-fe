import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // {
  //   path: '/',
  //   key: 'main-app',
  //   component: Home,
  //   title: '首页',
  //   showMenu: true, // 是否在菜单中显示
  // },
  // {
  //   path: '/sub-react',
  //   key: 'sub-react',
  //   title: 'react子应用',
  //   showMenu: true,
  // },
  // {
  //   path: '/sub-vue',
  //   key: 'sub-vue',
  //   title: 'vue子应用',
  //   showMenu: true,
  // },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
];

export default routes;
