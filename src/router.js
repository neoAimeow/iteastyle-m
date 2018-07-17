import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import ProductDisplay from '@/components/homepage/productDisplay.vue'
import ServiceContent from '@/components/homepage/serviceContent.vue'
import TeaState from '@/components/homepage/teaState.vue'
import ContactUs from '@/components/homepage/contactUs.vue'

import ProductInside from '@/components/homepage/productInside.vue'
import TeaStateInside from '@/components/homepage/teaStateInside.vue'
import DiyActivites from '@/components/service/diyActivites.vue'
import Performance from '@/components/service/performance.vue'
import Seminar from '@/components/service/seminar.vue'
import Souvenir from '@/components/service/souvenir.vue'
import TeaBreakService from '@/components/service/teaBreakService.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: HomeIndex
    },
    {
      path: '/homepage/productDisplay',
      name: 'productDisplay',
      component: ProductDisplay
    },
    {
      path: '/homepage/serviceContent',
      name: 'serviceContent',
      component: ServiceContent
    },
    {
      path: '/homepage/teaState',
      name: 'teaState',
      component: TeaState
    },
    {
      path: '/homepage/contactUs',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/homepage/productInside',
      name: 'productInside',
      component: ProductInside
    },
    {
      path: '/homepage/teaStateInside',
      name: 'teaStateInside',
      component: TeaStateInside
    },
    { 
      path: '/service/diyActivites',
      name: 'diyActivites',
      component: DiyActivites
    },
    {
      path: '/service/performance',
      name: 'performance',
      component: Performance
    },
    {
      path: '/service/seminar',
      name: 'seminar',
      component: Seminar
    },
    {
      path: '/service/souvenir',
      name: 'souvenir',
      component: Souvenir
    },
    {
      path: '/service/teaBreakService',
      name: 'teaBreakService',
      component: TeaBreakService
    }
  ]
})