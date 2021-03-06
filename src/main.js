import Vue from 'vue'
import Vuex from 'vuex'
import sessionsStore from './store/modules/sessions'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
// this line allows sending cookies to http://localhost:3000
axios.defaults.withCredentials = true // this line here !
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.prototype.$session = {
  connected: false,
  id: null,
  firstname: null,
  lastname: null,
  email: null
}

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vuex.Store({
  modules: {
    sessions: sessionsStore
  }
})
