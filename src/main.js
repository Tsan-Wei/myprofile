import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')