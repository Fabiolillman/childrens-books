import Vue from 'vue'
import VueRouter from 'vue-router'
import ReadingList from '../views/ReadingList.vue'
import SingleBook from '../views/SingleBook.vue'
import BookList from '../views/BookList.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
   {
    path: '/singlebook/:id',
    props: true,
    name: 'SingleBook',
    component: SingleBook
  }, 

  {
    path: '/ReadingList',
    name: 'ReadingList',
    component: ReadingList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
