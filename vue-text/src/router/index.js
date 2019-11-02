import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueA from  '@/components/VueA'
import VueB from  '@/components/VueB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [ 
        {
         path: '/vueb',
         name: 'VueB',
         component: VueB
        }
      ]
    },
    {
      path: '/vuea',
      name: 'VueA',
      component: VueA
    }
  ]
})
