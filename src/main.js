import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'

import store from "./store";


Vue.config.productionTip = false

Vue.use(router)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')