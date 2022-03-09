import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/components/question-game'
Vue.use(VueRouter)

const routes = [{
  path: '/game',
  component: Game
}]

const router = new VueRouter({
  routes
})

export default router
