import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import SideBar from "../components/SideBar.vue";
import Todo from "../components/Todo.vue";
import NotFound from "../components/NotFound.vue";
import { useAuthStore } from "../store/AuthStore";
const routes = [
  {
    path: "/",
    components: {
      default: Register,
      LeftSideBar: SideBar,
    },
    redirect: "/register",
  }, 
  {
    path: "/register",
    components: {
      default: Register,
      LeftSideBar: SideBar,
    },
  },
  {
    path: "/login",
    name:'login',
    components: {
      default: Login,
      LeftSideBar: SideBar,
    },
  },
  {
    path: "/dashboard",
    name:"dashboard",
    components: {
      default: Dashboard,
      LeftSideBar: SideBar,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/todo",
    components: {
      default: Todo,
      LeftSideBar: SideBar,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    components: {
      default: NotFound,
      LeftSideBar: SideBar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
