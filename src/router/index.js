import { createRouter, createWebHashHistory } from 'vue-router'
import Game from '@/components/question-game'

const routes = [{
  path: '/game',
  component: Game
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
