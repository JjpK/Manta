const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

// vue.config.js
const vueConfig = {
  indexPath: 'index.html',
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: './',
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('layout',resolve('src/layout'))
      .set('base',resolve('src/base'))
      .set('static',resolve('src/static'))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/config.scss";'
      }
    }
  },
  pwa: {
    name: 'manta',
    themeColor: '#4D6EBA',
    msTileColor: '#4D6EBA'
  }
}


module.exports = vueConfig
