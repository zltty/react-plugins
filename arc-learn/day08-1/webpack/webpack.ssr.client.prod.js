import merge from 'webpack-merge';

import pathConfig from '../config/path.config';
import baseConfig from './webpack.config.base';
import urlconfig from './webpack.config.url';
import styleconfig from './webpack.config.style';
import optimization from './webpack.config.optimization';

export default merge.smart(
  baseConfig, 
  urlconfig, 
  styleconfig('web'), 
  optimization, {
  target:'web',
  entry: pathConfig.ssrClientEntry,
  output: {
    filename: '[name].[hash].js',
  },
});

