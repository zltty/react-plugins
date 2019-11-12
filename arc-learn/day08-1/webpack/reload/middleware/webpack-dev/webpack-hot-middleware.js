const webpackHotMiddleware = require('webpack-hot-middleware');
const { PassThrough } = require('stream');
const handleMiddleware = require('./handleMiddleware');

/**
 *
 * @param {object} compiler  webpack(webpackConfig)
 * @param {*} options webpack-dev-middleware 需要的特定选项
 * @return {function} (context, next)
 * context: koa 上下文
 * next: 是否调用下一个的中间件
 */
const express2koa = (compiler, options = {}) => {
  const { publicPath } = compiler.options.output;
  const defaults = options.publicPath ? options : { publicPath };
  // 配置
  const middleware = webpackHotMiddleware(compiler, Object.assign({}, defaults, options));

  return async (context, next) => {
    const contextTmp = context;
    const stream = new PassThrough();
    contextTmp.body = stream;

    const hasNext = await handleMiddleware(middleware, context.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        contextTmp.status = status;
        contextTmp.set(headers);
      }
    });
    hasNext && await next();
  };
};
module.exports = express2koa;
