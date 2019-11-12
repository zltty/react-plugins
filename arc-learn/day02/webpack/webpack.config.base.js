export default {
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
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' : 'cheap-module-source-map'
};
