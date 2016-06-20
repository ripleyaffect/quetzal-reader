const webpack = require('webpack')

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
        include: __dirname + '/client'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
        include: __dirname + '/client'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    alias: {
      app: __dirname + '/client'
    }
  },
  plugins: plugins,
}