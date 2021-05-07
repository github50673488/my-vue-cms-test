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

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'

// 导入格式化时间的插件
import moment from 'moment'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://api.cms.liulongbin.top'
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
Vue.config.productionTip = false

Vue.use(MintUI)

// eslint-disable-next-line no-new
new Vue({
  'el': '#app',
  'render': c => c(App), // 需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器
  router // 1.4 挂载路由对象到 VM 实例上
})
