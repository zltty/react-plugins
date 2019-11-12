import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

import pathConfig from './config/path.config';
import baseConfig from './webpack.config.base';
import urlconfig from './webpack.config.url';

export default merge.smart(baseConfig,urlconfig, {
  mode: process.env.NODE_ENV || 'development',
  entry: pathConfig.csrEntry,
  output: {
    filename: '[name].[hash].js',
    path: pathConfig.dist,
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]_[local]--[hash:base64:5]',
              modules: true
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // new CopyWebpackPlugin([{
    //     from: `${pathConfig.clientPath}/assets/images`,
    //     to: `${pathConfig.dist}/assets/images`,
    //   },
    //   {
    //     context: `${pathConfig.public}`,
    //     from: '**.*',
    //     to: `${pathConfig.dist}`,
    //   }
    // ], {
    //   ignore: ['index.html']
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      template: pathConfig.template,
    }),
  ]
});

