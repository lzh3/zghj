import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Subject from "@/pages/subject"
import SubjectDetail from "@/pages/subject-detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Home',
      // component: Home
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: "/subject",
      component: Subject,
      children: [
        {
          path: '/subject/detail',
          component: SubjectDetail
        },
      ]
    },
  ]
})
