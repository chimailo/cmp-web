import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgotPassword",
      component: () => import("@/views/ForgotPasswordView.vue"),
    },
    {
      path: "/change-email",
      name: "changeEmail",
      component: () => import("@/views/ChangeEmailView.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("@/views/PasswordView.vue"),
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      component: () => import("@/views/ResetPasswordView.vue"),
    },
  ],
});

export default router;
