import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Links = () => import('../views/links/Links')
const About = () => import('../views/about/About')
//const PostList = () => import('../views/post/PostList')
const Login = () => import('../views/login/Login')
const Blog = () => import('../views/blog/Blog')
const Bloger = () => import('../views/bloger/Bloger')
const Editor = () => import('../views/editor/Editor')
const Article = () => import('../views/article/Article')

const Archive = () => import('../views/archive/Archive')
const Category = () => import('../views/category/Category')
const Tag = () => import('../views/tag/Tag')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/x/blog'
  },
  {
    path: '/x/home',
    component: Home
  },
  {
    path: '/x/blog',
    component: Blog
  },
  {
    path: '/x/bloger',
    component: Bloger
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
  },

  {
    path: '/x/archive',
    component: Archive
  },
  {
    path: '/x/category',
    component: Category
  },
  {
    path: '/x/tag',
    component: Tag
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'link-active',
  //切换页面回顶部
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router