// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/goods',
    components: goods
  },
  {
    path: '/ratings',
    components: ratings
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  template: '<App/>',
  components: { App },
  router: router
}).$mount('#app')

// router.push('/goods')
