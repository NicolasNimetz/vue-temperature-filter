import Vue from 'vue';
import App from './App.vue';
import VueTemperatureFilter from './VueTemperatureFilter';

Vue.config.productionTip = false;

Vue.use(VueTemperatureFilter);

new Vue({
  render: h => h(App),
}).$mount('#app');
