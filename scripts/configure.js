const path = require('path')
const shell = require('shelljs')

const resolve = dir => path.join(__dirname, dir)

const configure = config => {
  config.plugins.push({
    apply: compiler => {
      compiler.hooks.done.tap('copyLib', info => {
        const filename = info.compilation.outputOptions.filename
        if (filename === 'vWeUI.umd.min.js') {
          shell.mkdir('-p', resolve('../lib'))
          shell.cp(resolve('../dist/lib/vWeUI.umd.min.js'), resolve('../lib/vWeUI.js'))
          shell.cp(resolve('../dist/lib/vWeUI.css'), resolve('../lib/'))
        }
        return true
      })
    }
  })
}

module.exports = configure
