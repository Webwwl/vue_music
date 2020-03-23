import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'
import '@/common/utils/rem.ts'

// testTs
import './testTs/index'

// style
import 'normalize.css'
import './common/styles/scss/index.scss'
import './common/styles/stylus/index.styl'

// fastclick
import fastclick from 'fastclick'

// lazyload
import VueLazyLoad from 'vue-lazyload'

// plugins
import Loading from '@/plugins/loading/loading'

Vue.use(Loading)

Vue.use(VueLazyLoad, {
  loading: require('@/common/images/default.png')
})
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
