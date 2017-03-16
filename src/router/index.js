import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/todolist',
      name: 'Todo-List',
      component: TodoList
    },{
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token');
  if (to.path == '/') {
    if (token != 'null' && token != null) {
      next('/todolist');
    }
    next();
  } else {
    if (token != 'null' && token != null) {
      next();
    } else {
      next('/');
    }
  }
})

export default router