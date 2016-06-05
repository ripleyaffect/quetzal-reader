let plugins = []


console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  )
}

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
  },
  plugins: plugins,
}