import Vue from 'vue'
import App from './App.vue'

import { createProvider } from './vue-apollo'
require('./assets/sass/main.scss');
exports.createVueInstance = ({ router, name, clientId, scopes, copyright, logo }) => {
  // TODO: config should be accessable from App!
  return new Vue({
    router,
    apolloProvider: createProvider(),
    render: h => h(App)
  })
}
