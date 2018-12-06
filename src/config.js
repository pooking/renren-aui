var require = {
  baseUrl: './',
  // urlArgs: 'v=' + (window.SITE_CONFIG.env === 'dev' ? new Date().getTime() : window.SITE_CONFIG.version),
  waitSeconds: 0,
  map: {
    '*': {
      css: ['plugins/require-css-0.1.10/css.min']
    }
  },
  paths: {
    // 业务
    router: 'router',
    store: 'store',
    utils: 'utils',
    views: 'views',
    // 图标
    icons: 'icons/iconfont',
    // 插件
    axios: 'plugins/axios-0.18.0/axios.min',
    echarts: 'plugins/echarts-3.8.5/echarts.min',
    ELEMENT: 'plugins/element-2.4.5/index',
    promise: 'plugins/es6-promise-4.2.4/es6-promise.auto.min',
    cookie: 'plugins/js-cookie-2.2.0/js-cookie.min',
    lodash: 'plugins/lodash-4.17.10/lodash.min',
    qs: 'plugins/qs-6.5.2/qs.min',
    quill: 'plugins/q-2.0.2/q.min',
    text : 'plugins/require-text-2.0.15/text.min',
    screenfull: 'plugins/screenfull-3.3.2/screenfull.min',
    vue: 'plugins/vue-2.5.17/vue.min',
    vueI18n: 'plugins/vue-i18n-8.1.0/vue-i18n.min',
    vueRouter: 'plugins/vue-router-3.0.1/vue-router.min',
    vuex: 'plugins/vuex-3.0.1/vuex.min'
  },
  shim: {
    ELEMENT: { deps: ['vue'] },
    quill: { deps: ['css!plugins/q-2.0.2/q.min/quill.snow.css'] },
    vueRouter: { deps: ['vue', 'promise'] },
    vuex: { deps: ['vue', 'promise'] }
  }
};

if(typeof module !== 'undefined' && module.exports) {
  module.exports = require;
}