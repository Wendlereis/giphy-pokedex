import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import SocialSharing from 'vue-social-sharing'

Vue.use(VueClipboard)
Vue.use(SocialSharing)

new Vue({
  el: '#app',
  render: h => h(App)
})