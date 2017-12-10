const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('http-proxy-middleware');

module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
      },
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    proxy: {
      "/v1": {
      target: 'https://api.mcmakler.de/v1/',
      pathRewrite: { '^/v1': '' },
      changeOrigin: true,
      secure: false
      }
    }
  
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'McMackler Interview App',
      template: './index.html'
    })
  ],
};
