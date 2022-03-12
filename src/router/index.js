import { createRouter, createWebHashHistory } from 'vue-router'
import Game from '@/components/question-game'
import scrolling from '@/components/scroll'

const routes = [{
  path: '/game',
  component: Game
},{
  path: '/scrolling',
  component: scrolling
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
