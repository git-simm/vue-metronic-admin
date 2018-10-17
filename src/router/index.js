import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(vueResource);
export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/',
      name:'index',
      component:()=>import('@/pages/index.vue')
    }
  ]
})
