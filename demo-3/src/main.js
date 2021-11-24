import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vue全局自定义指令
// Vue.directive('color',{
//   bind(el,binding){
//     el.style.color = binding.value;
//   },
//   update(el,binding){
//     el.style.color = binding.value;
//   },
// })
// 简写
Vue.directive('color',function(el,binding){
    el.style.color = binding.value;
})
new Vue({
  render: h => h(App),
}).$mount('#app')
