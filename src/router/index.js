import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
import myPet from '../pages/myPet/myPet.vue'
import shopCart from '../pages/shopCart/shopCart.vue'
import type from '../pages/type/type.vue'
import classify from '../pages/classify/classify.vue'
import brands from '../pages/brands/brands.vue'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
Vue.use(VueRouter)
const routes=[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:home,
    //meta: {keepAlive: true, isTop: true},
  },
  {
    path:'/myPet',
    component:myPet,
    children:[
      {
        path:'',
        redirect:'login'
      },
      {
        path:'login',
        component:login
      },
      {
        path:'register',
        component:register
      }
    ]
  },

  {
    path:'/shopCart',
    component:shopCart,

  },
  {
    path:'/type',
    component:type,
    //meta: {keepAlive: true, isTop: true},
    children:[
      {
        path:'/type',
        redirect:'classify'
      },

      {
        path:'classify',
        component:classify
      },
      {
        path:'brands',
        component:brands
      }
    ]

  },
]
export default new VueRouter({
  linkActiveClass:'active',
  routes
})
