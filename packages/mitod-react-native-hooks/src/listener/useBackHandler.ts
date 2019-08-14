import React, { useEffect, useMemo } from 'react';
import { BackHandler } from 'react-native';

export default (handler) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
};