module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
