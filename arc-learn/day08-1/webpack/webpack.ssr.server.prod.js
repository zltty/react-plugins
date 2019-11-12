import nodeExternals from 'webpack-node-externals';
import merge from 'webpack-merge';

import pathConfig from '../config/path.config';
import baseConfig from './webpack.config.base';
import urlconfig from './webpack.config.url';
import styleconfig from './webpack.config.style.js';

export default merge.smart(baseConfig, urlconfig, styleconfig('node'), {
  target: 'node',
  entry: pathConfig.ssrServerEntry,
  output: {
    filename: 'ssr-server.js',
    libraryTarget: 'commonjs2'
  },
  externals: ['@loadable/component', nodeExternals()],
})
