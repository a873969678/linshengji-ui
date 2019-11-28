import LinshengjiCode from './code.vue'

// 为组件提供 install 安装方法，供按需引入
LinshengjiCode.install = function (Vue) {
  Vue.component(LinshengjiCode.name, LinshengjiCode)
}

// 默认导出组件
export default LinshengjiCode