import { createWebHistory, createRouter } from 'vue-router'

import DailyView from './views/DailyView.vue'
import WeeklyView from './views/WeeklyView.vue'
import MonthlyView from './views/MonthlyView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: WeeklyView,
      name: 'weekly'
    },
    {
      path: '/daily',
      component: DailyView,
      name: 'daily'
    },
    {
      path: '/monthly',
      component: MonthlyView,
      name: 'monthly'
    }
  ]
})
