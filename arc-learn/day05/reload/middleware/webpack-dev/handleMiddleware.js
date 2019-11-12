/**
 * middleware2promise && proxy express res to koa res
 * @param {*} middleware
 * @param {*} req
 * @param {*} res
 */
const handleMiddleware = (middleware, req, res) => new Promise((resolve, reject) => {
  try {
    middleware(req, res, resolve.bind(null, true));
    resolve(false);
  } catch (error) {
    reject(error);
  }
});

module.exports = handleMiddleware;
