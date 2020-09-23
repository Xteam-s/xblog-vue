import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Links = () => import('../views/links/Links')
const About = () => import('../views/about/About')
//const PostList = () => import('../views/post/PostList')
const Login = () => import('../views/login/Login')
const Blog = () => import('../views/Blog/Blog')
const Editor = () => import('../views/editor/Editor')
const Article = () => import('../views/article/Article')

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
    path: '/x/editor',
    component: Editor
  },
  // {
  //   path: '/x/blog/:blogUrl',
  //   component: PostList
  // },
  {
    path: '/x/login',
    component: Login
  },
  {
    path: '/x/article',
    component: Article
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'link-active'
})

export default router