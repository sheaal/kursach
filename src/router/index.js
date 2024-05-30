import { createRouter, createWebHistory } from 'vue-router';
import FeedView from "@/views/FeedView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SubscribersView from "@/views/SubscribersView.vue";
import LikesView from "@/views/LikesView.vue";
import PostView from "@/views/PostView.vue";

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
      component: RegistrationView
    },
    {
      path: '/login',
      name: 'login',
      component: AuthorizationView
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: PostView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/subscribers',
      name: 'subscribers',
      component: SubscribersView
    },
    {
      path: '/likes',
      name: 'likes',
      component: LikesView
    }
  ]
});

export default router;