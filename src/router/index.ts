import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '@/views/recommend.vue'
import Search from '@/views/search.vue'
import Singer from '@/views/singer.vue'
import Rank from '@/views/rank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    name: 'recommend',
    path: '/recommend',
    component: Recommend
  },
  {
    name: 'search',
    path: '/search',
    component: Search
  },
  {
    name: 'singer',
    path: '/singer',
    component: Singer
  },
  {
    name: 'rank',
    path: '/rank',
    component: Rank
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
