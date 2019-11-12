const path = require('path');

module.exports = {
  dist: path.resolve(__dirname, '../dist'),
  loadable: path.resolve(__dirname, '../dist/loadable-stats.json'),
  clientPath: path.resolve(__dirname, '../app'),
  template: path.resolve(__dirname, '../app/index.html'),
  ico: path.resolve(__dirname, '../app/favicon.ico'),
  csrEntry: path.resolve(__dirname, '../app/csr-client.js'),
  ssrClientEntry:path.resolve(__dirname, '../app/ssr-client.js'),
  ssrServerEntry:path.resolve(__dirname, '../app/ssr-server.js'),
  public: path.resolve(__dirname, '../public'),
};
