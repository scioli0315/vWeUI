const path = require('path')
const configure = require('./scripts/configure')
const build = require('./scripts')
const dev = require('./scripts/dev')

let buildInfo = {}
if (process.env.NODE_ENV === 'production') {
  buildInfo = build(process)
} else {
  buildInfo = dev()
}

module.exports = {
  productionSourceMap: false,
  ...buildInfo.config,
  chainWebpack: config => {
    config.resolve.alias.set('@weui', path.join(__dirname, 'weui'))
  },
  configureWebpack: config => {
    if (buildInfo.dir !== 'lib') return
    configure(config)
  }
}
