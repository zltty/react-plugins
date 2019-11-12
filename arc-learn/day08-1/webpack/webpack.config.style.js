import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import purifycssWebpack from 'purifycss-webpack';
// import glob from 'glob';

import pathconfig from '../config/path.config';

export default (type = 'web')=> {
  const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            type === 'web' ? MiniCssExtractPlugin.loader : 'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: type==='web' ? 0 : 1,
                localIdentName: '[name]_[local]--[hash:base64:5]',
                modules: true
              }
            },
            // 'postcss-loader'
          ]
        }
      ]
    },
  };
  if(type === 'web'){
    config.plugins = [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    ]
  }

  return config;
}