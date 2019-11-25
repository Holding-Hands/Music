import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Recommend = () => import('../views/recommend/Recommend')
const Singer = () => import('../views/singer/Singer')
const Rank = () => import('../views/rank/Rank')
const Search = () => import('../views/search/Search')

const routes = [
  {path: '/',redirect:'/recommend'},//设置默认指向路径
  {path: '/recommend', component: Recommend},
  {path: '/singer', component: Singer},
  {path: '/rank', component: Rank},
  {path: '/search', component: Search},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
