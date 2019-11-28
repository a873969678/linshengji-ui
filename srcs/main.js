import Vue from 'vue'
import App from './App.vue'
// import demo from '../packages/index'  // 本地调试
// import demo from 'lsj-code' // npm包调试
// 注册组件库
// Vue.use(demo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
