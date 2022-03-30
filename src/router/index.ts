import { createRouter, createWebHistory } from '@ionic/vue-router';

import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/splash',
    component: () => import('@/views/SplashScreen.vue')
  },
  {
    path: '/intro',
    component: () => import('@/views/Intro.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/create-account',
    component: () => import('@/views/CreateAccount.vue')
  },
  {
    path: '/verify-account',
    component: () => import('@/views/VerifyAccount.vue')
  },
  {
    path: '/u/passes',
    component: () => import('@/views/Passes.vue')
  },
  {
    path: '/u/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/u/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
     
      {
        path: 'class',
        component: () => import('@/views/Class.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
