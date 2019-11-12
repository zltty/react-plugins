// code-split
import LoadablePlugin from '@loadable/webpack-plugin';

export default {
  plugins:[
    new LoadablePlugin(),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups:{
        commons: {
          chunks: "initial",
          minChunks: 2,//最小重复使用的次数
          minSize: 0 //最小提取字节数
        },
        // 第三方模块
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
        }
      }
    }
  }
}