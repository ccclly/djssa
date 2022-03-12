import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Game from '@/components/question-game'
import scrolling from '@/components/scroll'
import mainPage from '@/views/mainPage'
import page1 from '@/views/page1'

const routes = [{
    path: '/',
    component: mainPage
  },
  {
    path: '/page1',
    component: page1
  },
  {
    path: '/game',
    component: Game
  }, {
    path: '/scrolling',
    component: scrolling
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
