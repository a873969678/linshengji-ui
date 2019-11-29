import Vue from 'vue'
import App from './App.vue'
// import linshengjiUI from '../packages/index'  // 本地调试
// import linshengjiUI from 'linshengji-ui' // npm包调试
// import 'linshengji-ui/lib/linshengji.css' // npm包调试
// 注册组件库
// Vue.use(linshengjiUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
