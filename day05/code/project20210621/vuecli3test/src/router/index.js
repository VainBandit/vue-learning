import VueRouter from 'vue-router';
import Vue from 'vue';

// 非懒加载的写法
// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/home',
    meta:{
      title:'主页'
    }
  },
  {
    path:'/home',
    component:()=>import('../components/Home'), //路由的懒加载写法,
    children:[
      {
        path:'',
        redirect:'news',
        meta:{
          title:'新闻'
        }
      },
      {
        path:'news',
        component:()=>import('../components/HomeNews'),
        meta:{
          title:'新闻'
        }
      },
      {
        path:'message',
        component:()=>import('../components/HomeMessage'),
        meta:{
          title:'消息'
        }
      }
    ],
    meta:{
      title:'主页'
    }
  },
  {
    path:'/about',
    component:()=>import('../components/About'),
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userid',
    component:()=>import('../components/User'),
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:()=>import('../components/Profile'),
    meta:{
      title:'档案'
    }
  }
];

const router = new VueRouter({
  routes,
  mode:'history'//设置为浏览器的history模式
});

// router.beforeEach((to,from,next)=>{
//   document.title = to.matched[0].meta.title;
//   next();
// });

export default router;
