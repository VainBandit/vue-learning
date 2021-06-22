const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.css$/i,
        loader:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 14000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve:{
    extensions:['.js','.css','vue'],
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归VainBandit所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    // new uglifyPlugin()
  ],
  // devServer:{
  //   contentBase:'./dist',
  //   inline:true
  // }
};