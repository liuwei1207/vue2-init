import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/pages/Hello/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloPage',
      component: HelloPage
    }
  ]
})
