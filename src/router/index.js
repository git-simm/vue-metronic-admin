import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from './test'

Vue.use(Router)
Vue.use(vueResource);

//Vue.component('Footer',footer);
//Vue.component('Header',header);
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/',
      name:'index',
      component:()=>import('@/pages/index.vue')
    }, {
      path: '/demo1',
      name: 'demo1',
      component: () => import('@/pages/demo1.vue')
    }, {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/pages/demo2.vue')
    },
    ...test
  ]
})
