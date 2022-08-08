import Vue from "vue";
import App from "./layouts/index.vue";
import {
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Button,
  Row,
  Col,
  Radio,
  RadioGroup,
  RadioButton,
} from "element-ui";
import "@/assets/reset.css";
import router from "@/router/index"; 
import { Toast } from "vant";

Vue.use(Toast);


Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);

Vue.config.productionTip = false;

import VanButton from "vant/lib/button";
import "vant/lib/button/style";

Vue.use(VanButton);




new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
