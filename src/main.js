// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import jQuery from 'jquery'
// 引入metronic -css样式文件 ----------------
import 'metronic/css/bootstrap.min.css'
import 'metronic/css/bootstrap-responsive.min.css'
import 'metronic/css/font-awesome.min.css'
import 'metronic/css/style-metro.css'
import 'metronic/css/style.css'
import 'metronic/css/style-responsive.css'
import 'metronic/css/default.css'
import 'metronic/css/uniform.default.css'
import 'metronic/css/jquery.gritter.css'
import 'metronic/css/daterangepicker.css'
import 'metronic/css/fullcalendar.css'
import 'metronic/css/jqvmap.css'
import 'metronic/css/jquery.easy-pie-chart.css'
// 引入metronic -script 文件 ----------------
import 'metronic/js/jquery-migrate-1.2.1.min.js'
import 'metronic/js/jquery-ui-1.10.1.custom.min.js'
import 'metronic/js/bootstrap.min.js'
import 'metronic/js/jquery.slimscroll.min.js'
import 'metronic/js/jquery.blockui.min.js'
import 'metronic/js/jquery.cookie.min.js'
import 'metronic/js/jquery.uniform.min.js'
// ------ core 引入完成--------------------------

// 引入metronic -page plugin 文件 ----------------
import 'metronic/js/jquery.vmap.js'
import 'metronic/js/date.js'
import 'metronic/js/daterangepicker.js'
import 'metronic/js/jquery.gritter.js'
import 'metronic/js/fullcalendar.min.js'
// ------ page plugin 引入完成--------------------------


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
