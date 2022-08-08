import Vue from "vue";
import VueRouter from "vue-router";
import TaskPendingDetails from "@/views/h5-list/task-pending-details.vue";
import TaskDataCheck from "@/views/h5-list/task-data-check.vue";
import H5Add from "@/views/h5-add/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/h5-list",
    name: "h5-list",
    component: TaskDataCheck
  },
  {
    path: "/task-pending-details",
    name: "h5-list-type",
    component: TaskPendingDetails
  },
  {
    path: "/h5-add",
    name: "h5-add",
    component: H5Add
  },
  {
    path: "/h5-add-type",
    name: "h5-add-type",
    component: H5Add
  },
];

const router = new VueRouter({
  routes,
  // base: "/zyd/",
  //切换页面滚动到头部
  scrollBehavior: () => ({
      y: 0
  })
});

export default router;
