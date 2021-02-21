const dev = () => {
  const config = {
    pages: {
      index: {
        entry: `example/main.ts`,
        template: `public/index.html`,
        filename: 'index.html'
      },
      docs: {
        entry: `docs/main.ts`,
        template: `public/index.html`,
        filename: 'docs.html'
      }
    },
    outputDir: `dist/`
  }

  return {
    config
  }
}

module.exports = dev
