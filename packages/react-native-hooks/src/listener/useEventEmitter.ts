import { useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';

const useEventEmitter = (eventName, handle) => {
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(eventName, handle);
    return () => {
      subscription.remove();
    };
  }, [eventName, handle]);
};

export default useEventEmitter;
