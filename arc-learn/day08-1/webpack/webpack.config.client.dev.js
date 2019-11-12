import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import pathconfig from '../config/path.config';
import baseConfig from './webpack.config.base';
import urlconfig from './webpack.config.url';

export default merge.smart(baseConfig, urlconfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(pathconfig.clientPath, 'csr-client'),
  ],
  output: {
    filename: 'bundle.js',
    path: pathconfig.dist,
    publicPath: `http://${process.env.HOST}:${process.env.PORT}/`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]_[local]--[hash:base64:5]',
              modules: true
            }
          }, 
          'postcss-loader'
        ]
      }, 
      // {
      //   test: /\.less$/, 
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       // loader: 'less-loader',
      //       // options: {
      //       //   paths: [path.resolve(__dirname, '..', 'node_modules', 'antd')],
      //       //   javascriptEnabled: true,
      //       //   modifyVars: process.env.THEME // antd 中的样式
      //       // }
      //     }
      //   ]
      // },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: pathconfig.template,
      favicon: pathconfig.ico,
    }),
  ]
});
