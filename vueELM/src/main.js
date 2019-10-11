// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入MINT-UI插件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
