import pathConfig from '../config/path.config';

export default {
  output: {
    path: pathConfig.dist,
    publicPath: '/public/'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // If you need hooks support, use React-🔥-Dom
    // https://github.com/gaearon/react-hot-loader
    alias: {
      'react-dom': process.env.NODE_ENV === 'development' ? '@hot-loader/react-dom': 'react-dom'
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          // presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' : 'cheap-module-source-map'
};
