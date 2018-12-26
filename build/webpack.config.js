// Libraries
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Files
const utils = require('./utils')

// Configuration
module.exports = {

    context: path.resolve(__dirname, '../src'),
    entry: {
      app: './app.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, '../src'),
      // hot: true,
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        source: path.resolve(__dirname, '../src'), // Relative path of src
        images: path.resolve(__dirname, '../src/assets/images'), // Relative path of images
        fonts: path.resolve(__dirname, '../src/assets/fonts'), // Relative path of fonts
      }
    },

    /*
      Loaders with their configurations
    */
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: { presets: ['es2015'] }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          use: 'css-loader!sass-loader?sourceMap',
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  minimize: true
                }
              },
              'sass-loader?sourceMap'
            ]
          })
        },
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: true
              }
            }
          ]
        },
        // {
        //   test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 3000,
        //     name: 'assets/images/[name].[hash:7].[ext]'
        //   }
        // },
        // {
        //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 5000,
        //     name: 'assets/fonts/[name].[hash:7].[ext]'
        //   }
        // },
        // {
        //   test: /\.(mp4)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     name: 'assets/videos/[name].[hash:7].[ext]'
        //   }
        // }
      ]
    },
    plugins: [
      // Copy your file from development to production
      new CopyWebpackPlugin([
        { from: 'views/app.js', to: 'app.js' },
        { from: '../static',to:path.join(__dirname,'../dist/static')}
      ]),
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      // }),

      /*
        Pages
      */


      //
      // ...utils.pages(env),
      // ...utils.pages(env, 'blog'),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
      }),
      // new WebpackNotifierPlugin({
      //   title: 'Your project'
      // })
    ]
};
