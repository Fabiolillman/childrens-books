import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ReadingList from '../views/ReadingList.vue'
import SingleBook from '../views/SingleBook.vue'
import BookList from '../views/BookList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/singlebook/:id',
    name: 'SingleBook',
    component: SingleBook
  }, 
  {
    path: '/booklist',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/ReadingList',
    name: 'ReadingList',
    component: ReadingList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
