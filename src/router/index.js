import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import game from '@/components/question-game'
import test2 from '@/components/test2'
import mainPage from '@/views/mainPage'
import page1 from '@/views/page1'
import page2 from '@/views/page2'
import page3 from '@/views/page3'
import page4 from '@/views/page4'
import page5 from '@/views/page5'
import page6 from '@/views/page6'
import page7 from '@/views/page7'

const routes = [{
    path: '/',
    component: page1
  },
  {
    name: 'mainPage',
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
    name: 'page5',
    path: '/page5',
    component: page5
  },
  {
    name: 'page6',
    path: '/page6',
    component: page6
  },
  {
    name: 'page7',
    path: '/page7',
    component: page7
  },
  {
    path: '/game',
    component: game
  },
  {
    path: '/test2',
    component: test2
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
