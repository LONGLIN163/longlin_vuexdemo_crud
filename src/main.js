import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// include global ElementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App'
// import router from './router'

// // include global ElementUI
// import ElementUI from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

