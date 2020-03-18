import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'
import '@/common/js/rem.ts'

// testTs
import './testTs/index'

// style
import 'normalize.css'
import './common/styles/index.scss'

// fastclick
import fastclick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastclick.attach(document.body);
  }, false);
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
