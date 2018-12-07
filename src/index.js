import Vue from 'vue'
import App from './App.vue'

import { createProvider } from './vue-apollo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import mermaid from 'mermaid';

[faPlus, faEdit, faTrash].forEach(icon => library.add(icon));
Vue.component('font-awesome-icon', FontAwesomeIcon)
require('./assets/sass/main.scss');
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$mermaid', { value: mermaid });
mermaid.initialize({ startOnLoad: false });

exports.createVueInstance = ({ router, name, config }) => {
  return new Vue({
    router,
    apolloProvider: createProvider(),
    render: h => h(App)
  })
}
