module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(es6|jsx?)$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        include: __dirname + '/client'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  }
}