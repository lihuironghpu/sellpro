// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')

router.push('/goods')
