const pages = require('./pages')

const dev = () => {
  const config = {
    pages: pages,
    outputDir: `dist/`
  }

  return {
    config
  }
}

module.exports = dev
