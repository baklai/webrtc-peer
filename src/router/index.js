import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/TextChatView.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/VideoChatView.vue')
    },
    {
      path: '/remote',
      name: 'remote',
      component: () => import('../views/RemoteView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
});

export default router;
