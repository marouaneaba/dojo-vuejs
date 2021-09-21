import VueRouter from 'vue-router'
import Home from "@/app/container/Home";
import Vue from "vue";
import CompositionItemEdit from "@/app/compositionitem/components/composition-item-edit/CompositionItemEdit";
import CompositionItemNew from "@/app/compositionitem/components/composition-item-new/CompositionItemNew";
import Login from "@/app/login/container/Login";

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/composition-items/edit/:id",
        component: CompositionItemEdit,
    },
    {
        path: "/composition-items/new",
        component: CompositionItemNew,
    },
    {
        path: "/home",
        component: Home,
    }
];

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;