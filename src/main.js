import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
