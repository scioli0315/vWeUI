const build = process => {
  const configArgv =
    process.env && process.env.npm_config_argv
      ? JSON.parse(process.env.npm_config_argv)
      : { original: ['', ''] }

  const original = configArgv['original'][1].split(':')
  const dir = original[1]

  let config = {}

  if (['docs', 'example'].includes(dir)) {
    config = {
      pages: {
        index: {
          entry: `${dir}/main.ts`,
          template: `public/index.html`,
          filename: 'index.html'
        }
      },
      publicPath: '',
      outputDir: `dist/${dir}`
    }
  } else {
    config = {
      outputDir: `dist/${dir}`
    }
  }

  return {
    config,
    dir
  }
}

module.exports = build
