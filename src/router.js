import Vue from "vue";
import ContactForm from "./components/ContactForm"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/", component : ContactForm },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode : "history",
  routes
});
