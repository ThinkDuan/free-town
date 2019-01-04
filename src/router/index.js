import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 代码分割，懒加载，可通过webpackChunkName来分组
const MainPage = () => import(/*webpackChunkName: "mainPage" */ '../components/common/layout.vue');
const  HelloWord = () =>  import(/* webpackChunkName: "helloWorld" */ '../components/pages/helloWorld/HelloWorld.vue');
const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/helloWorld',
    component: HelloWord
  }
];
export default new VueRouter({
  routes: routes,
  mode: 'hash'
}); 