// import webpackResolve from './webpack.config.eslint';

export default {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader'
      }, {
        test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }]
      },
    ]
  },
  // resolve: webpackResolve.resolve,
  node: {
    __dirname: false,
    __filename: false
  },
};
