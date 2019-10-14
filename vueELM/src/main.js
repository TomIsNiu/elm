// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入MINT-UI插件  npm i mint-ui -S
//按需导入时 需到.babelrc里面添加component ,然后终端安装插件npm install babel-plugin-component -D
import { Header ,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.withCredentials =true;
Vue.use(VueAxios, axios)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      fullWidth:"",
      maxWidth:""
    }
  },
  create(){
    this.fullWidth = document.documentElement.clientWidth;
    this.maxWidth = document.documentElement;
    this.maxWidth.style.fontSize = 48*(this.fullWidth/768) + 'px';
  }
});
window.onresize = function () {
  this.fullWidth = document.documentElement.clientWidth;
  this.maxWidth = document.documentElement;
  this.maxWidth.style.fontSize = 48*(this.fullWidth/768) + 'px';
}
