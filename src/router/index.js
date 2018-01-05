import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
import myPet from '../pages/myPet/myPet.vue'
import shopCart from '../pages/shopCart/shopCart.vue'
import type from '../pages/type/type.vue'
Vue.use(VueRouter)
const routes=[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/myPet',
    component:myPet
  },
  {
    path:'/shopCart',
    component:shopCart
  },
  {
    path:'/type',
    component:type
  },
]
export default new VueRouter({
  routes
})
