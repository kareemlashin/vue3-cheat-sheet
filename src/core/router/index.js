import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'allActive'

})

export default router
/*
  {
      path: '/All',
      component: All,
      meta: {
          roles: ["one"]
      },
      beforeEnter: (to, from, next) => {
          if (localStorage.getItem("token")) {
              next()
          } else {
              next('/about');

          }
      },

  },
  {
      path: '/All/:id',
      component: All,
      meta: {
          roles: ["one"]
      },
      beforeEnter: (to, from, next) => {
          if (localStorage.getItem("token")) {
              next()
          } else {
              next('/about');

          }
      },

  },
  {
      path: '/Home',
      component: Home,
      meta: {
          roles: ["one"]
      },
      beforeEnter: (to, from, next) => {

          if (localStorage.getItem("token")) {
              next()
          } else {
              next('/about');
          }
      },
      children: [{
          path: '/',
          name: 'Arouter',
          component: Arouter,
      }]
  },


]
*/

/*
const guard = function(to, from, next) {
    let x = localStorage.getItem('token');
    let x2 = localStorage.getItem('role');
    let y = to.meta.roles
    if (x !== null && x2 == y) {
        next()
    } else {
        next('/about')
    }
}
*/
/* 

    meta: {
           roles: ["admin", 'user', 'guest']
       },
       beforeEnter: (to, from, next) => {
           if (localStorage.getItem("token")) {
               let role = localStorage.getItem('role');
               let admin = to.meta.roles;
               if (admin.includes(role)) {
                   next();
               } else {
                   next('/login');
               }
           } else {
               next('/login');
           }
       },

       */
      /* 
      let x = (to, from, next) => {
  console.log(to.meta);
  // get roles
  if (localStorage.getItem("token")) {
    next()
  } else {
    next('/about');

  }
}
  beforeEnter: x,
    meta: {
      role: ['x', 'c']
    }
  },
*/