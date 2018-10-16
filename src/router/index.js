import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(vueResource);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/index',
      name:'index',
      component:()=>import('@/pages/index.vue')
    }
  ]
})
