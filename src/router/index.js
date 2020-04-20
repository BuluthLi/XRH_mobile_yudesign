import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/index',
      name: 'index',
      component: () => import(/*webpackChunkName:'index'*/"../components/index/Index.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: () => import(/*webpackChunkName:'productlist'*/"../components/productlist/Productlist.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/*webpackChunkName:'about'*/"../components/about/About.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/join',
      name: 'join',
      component: () => import(/*webpackChunkName:'join'*/"../components/join/Join.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import(/*webpackChunkName:'apply'*/"../components/apply/Apply.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/vrdetail',
      name: 'vrdetail',
      component: () => import(/*webpackChunkName:'vrdetail'*/"../components/vrdetail/VRDetail.vue"),
      meta: {
        keepAlive: true
      }
    },
    //重定向
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
