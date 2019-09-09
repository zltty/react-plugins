import { useCallback, useRef, useState } from 'react';

import { IConfig, TTrigger } from './typings';
import validator from './validator';

export { TTrigger };

interface SubmitButtonPropsOptions {
  /**
   * 默认 触发器onChange
   */
  trigger?: TTrigger;
}

/**
 * 验证方式 默认submit 提交时校验， immediate 输入内容时同时校验
 */
type validatorType = 'immediate' | 'submit';

export default function useForms(config: IConfig, type?: validatorType) {
  const initConfig = useRef(config);

  let initValue: any = {};
  const keys = Object.keys(config);
  keys.forEach((key: string) => {
    initValue[key] = config[key].initValue;
  });

  const values = useRef(initValue);
  const [errors, setErrors] = useState<any>({});
  const [isValidating, setIsValidating] = useState(false);

  // 获取当前值
  const getFieldValitate = useCallback(
    field => {
      return {
        disabled: isValidating,
        value: values.current[field],
        error: errors[field],
      };
    },
    [errors, isValidating],
  );

  // 校验
  const checkError = useCallback(() => {
    const result = validator(values.current, initConfig.current);
    const isValid = JSON.stringify(result) === '{}';
    setErrors(result);
    return isValid;
  }, []);

  // input
  const getFieldProps = useCallback(
    field => {
      if (!initConfig.current[field]) {
        throw new Error(`field: ${field} is not exist`);
      }

      const { trigger, callback } = initConfig.current[field];

      return {
        ...getFieldValitate(field),
        [trigger ? trigger : 'onChange']: (value: string) => {
          values.current[field] = value;
          // 如果validator是函数
          if (callback && typeof callback === 'function') {
            callback(value);
          }

          if (type === 'immediate') {
            checkError();
          }
        },
      };
    },
    [checkError, getFieldValitate, type],
  );

  // button submit
  const getSubmitButtonProps = useCallback(
    (onSubmit, options?: SubmitButtonPropsOptions) => {
      return {
        [options && options.trigger ? options.trigger : 'onPress']: () => {
          // 验证
          setIsValidating(true);
          const isValid = checkError();
          setIsValidating(false);
          if (isValid) {
            onSubmit(values.current, errors);
          }
        },
      };
    },
    [checkError, errors],
  );

  return {
    errors,
    isValidating,

    getFieldProps,
    getSubmitButtonProps,
  };
}
