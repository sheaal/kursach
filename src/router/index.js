import { createRouter, createWebHistory } from 'vue-router';
import FeedView from "@/views/FeedView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LikesView from "@/views/LikesView.vue";
import PostView from "@/views/PostView.vue";
import SettingsView from "@/views/SettingsView.vue";
import CreatePostView from "@/views/CreatePostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/register',
      name: 'register',
      component: RegistrationView,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthorizationView,
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: PostView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { auth: true }
    },
    {
      path: '/likes',
      name: 'likes',
      component: LikesView,
      meta: { auth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { auth: true }
    },
    {
      path: '/create_post',
      name: 'create_post',
      component: CreatePostView,
      meta: { auth: true }
    }
  ]
});

// Проверка авторизации
router.beforeEach((to, from, next) => {
  const token = Сookie.get('token');

  if (to.matched.some(record => record.meta.auth) && !token) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;