import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import useEffectOnce from '../lifecycle/useEffectOnce';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default () => {
  const [dimensions, setDimensions] = useState({
    window, screen
  });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffectOnce(() => {
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return dimensions;
};
