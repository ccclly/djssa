import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// import Game from '@/components/question-game'
// import scrolling from '@/components/scroll'
import mainPage from '@/views/mainPage'
import page1 from '@/views/page1'
import page2 from '@/views/page2'
import page3 from '@/views/page3'
import page4 from '@/views/page4'

const routes = [{
    path: '/',
    component: mainPage
  },
  {
    name:'page1',
    path: '/page1',
    component: page1
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
