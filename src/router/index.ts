import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home - Vue Layout Bootstrap'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About - Vue Layout Bootstrap'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact - Vue Layout Bootstrap'
      }
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


// การกำหนด title ให้กับหน้าเว็บ โดยใช้ beforeEach ของ Vue Router
router.beforeEach((to, _, next) => {
  if(typeof to.meta.title === "string") {
    document.title = to.meta.title
  }
  next()
})

export default router