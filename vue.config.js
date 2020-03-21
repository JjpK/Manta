

// vue.config.js
const vueConfig = {
  indexPath: 'index.html',
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: './',

  pwa: {
    name: 'manta',
    themeColor: '#4D6EBA',
    msTileColor: '#4D6EBA'
  }
}


module.exports = vueConfig
