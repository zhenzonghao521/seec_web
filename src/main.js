import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// console.log("555",process.env);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//全局样式
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
Vue.use(ElementUI);
Vue.config.productionTip = false;
//引入mock栏截
if(process.env.NODE_ENV==='development'){
  require("./mock/mock")
}


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
