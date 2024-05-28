import { createRouter, createWebHistory } from 'vue-router'
import Homecomp from '@/components/Homecomp.vue'
import Aboutcomp from '@/components/Aboutcomp.vue'
import Registrationcomp from "@/components/Registrationcomp.vue";
import Authorizationcomp from "@/components/Authorizationcomp.vue";
import Tapecomp from "@/components/Tapecomp.vue";
import Commentcomp from "@/components/Commentcomp.vue";
import Profilecomp from "@/components/Profilecomp.vue";
import Subscriberscomp from "@/components/Subscriberscomp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Homecomp
    },
    {
      path: '/about',
      name: 'about',
      component: Aboutcomp
    },
    {
      path: '/register',
      name: 'register',
      component: Registrationcomp
    },
    {
      path: '/login',
      name: 'login',
      component: Authorizationcomp
    },
    {
      path: '/tape',
      name: 'tape',
      component: Tapecomp
    },
    {
      path: '/comment',
      name: 'comment',
      component: Commentcomp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profilecomp
    },
    {
      path: '/subscribers',
      name: 'subscribers',
      component: Subscriberscomp
    }
  ]
})

export default router