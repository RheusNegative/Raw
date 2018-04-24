const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,loader: 'url-loader',
      options: { limit: 10000
      }
    }
  ]
}
};
