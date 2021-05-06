// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)

// eslint-disable-next-line no-new
new Vue({
  'el': '#app',
  'render': c => c(App), // 需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器
  router // 1.4 挂载路由对象到 VM 实例上
})
