import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('../views/home/Home');
const ImportantNotice=()=>import('../views/home/importantNotice/ImportantNotice');
const AllText=()=>import('../components/common/AllText')
const ImportNotice=()=>import('../views/home/importantNotice/ImportNotice')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },{
    path:'/home',
    component:Home
  },
  {
    path:'/custserv/bi2',
    component:ImportantNotice
  },
  {
    path:'/text',
    component:AllText
  },
  {
    path:'/notice',
    component:ImportNotice
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
