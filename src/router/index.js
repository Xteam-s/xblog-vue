import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Links = () => import('../views/links/Links')
const About = () => import('../views/about/About')
const PostList = () => import('../views/post/PostList')
const Login = () => import('../views/login/Login')
const Blog = () => import('../views/Blog/Blog')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/x/home',
    component: Home
  },
  {
    path: '/x/bloggers',
    component: Blog
  },
  {
    path: '/x/links',
    component: Links
  },
  {
    path: '/x/about',
    component: About
  },
  {
    path: '/x/post',
    component: PostList
  },
  {
    path: '/x/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'link-active'
})

export default router