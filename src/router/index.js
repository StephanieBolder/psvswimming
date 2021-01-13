import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/pages/Welcome.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'
import ResetPassword from '../components/pages/ResetPassword.vue'
import Checkmail from '../components/pages/Checkmail.vue'
import Profile from '../components/pages/Profile.vue'
import Meets from '../components/pages/Meets.vue'
import MeetsRegister from '../components/pages/MeetsRegister.vue'
import Notifications from '../components/pages/Notifications.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/checkmail',
    name: 'Checkmail',
    component: Checkmail,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/meets',
    name: 'Meets',
    component: Meets,
  },
  {
    path: '/meetsregister',
    name: 'meetsregister',
    component: MeetsRegister,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
