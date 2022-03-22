import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import game from '@/components/question-game'
// import scrolling from '@/components/scroll'
import mainPage from '@/views/mainPage'
import page1 from '@/views/page1'
import page2 from '@/views/page2'
import page3 from '@/views/page3'
import page4 from '@/views/page4'

const routes = [{
    path: '/',
    component: page1
  },
  {
    name:'mainPage',
    path: '/mainPage',
    component: mainPage
  },
  {
    path: '/page2',
    component: page2
  },
  {
    path: '/page3',
    component: page3
  },
  {
    path: '/page4',
    component: page4
  },
  {
    path: '/game',
    component: game
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
