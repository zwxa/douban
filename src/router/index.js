import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/in',
      component: require('../components/in/in.vue')
    },{
      path: '/coming', component: require('../components/coming/coming.vue')
    },{ 
  	path:'*',redirect:'/in'
  }]

})
export default router

