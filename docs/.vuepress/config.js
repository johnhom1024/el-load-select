module.exports = {
  title: 'el-load-select',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'}
    ]
  },
  // fix core-js in https://github.com/zpfz/vuepress-theme-antdocs/issues/5#issuecomment-753821394
  chainWebpack: config => {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  }
}