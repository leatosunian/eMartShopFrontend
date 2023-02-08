import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

const socketConnection = SocketIO(process.env.VUE_APP_SOCKET_IO_URL)

Vue.config.productionTip = false
Vue.prototype.$url = process.env.VUE_APP_BACKEND_URL
Vue.prototype.$frontendURL = process.env.VUE_APP_FRONTEND_URL
Vue.prototype.$shipping = 783
Vue.use(BootstrapVue)
Vue.use(Loading);
Vue.use(new VueSocketIO({
  debug: true,
  connection: socketConnection,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
