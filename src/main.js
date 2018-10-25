import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

[faPlus, faEdit, faTrash].forEach(icon => library.add(icon));

Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./assets/sass/main.scss');

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
