// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
import router from './router'
import store from './store/index'
import svgImage from './components/svg/svg_image.vue'
// import VueScroller from  'vue-scroller'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

import split from './components/split/split.vue'
import App from './App.vue'
Vue.component('svgImage', svgImage)
// Vue.use(VueScroller)
// Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('split',split)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
