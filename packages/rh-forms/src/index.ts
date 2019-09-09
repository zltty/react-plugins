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

  const [values, setValues] = useState<any>(() => {
    const keys = Object.keys(config);
    const initValue = {};
    keys.forEach((key: string) => {
      initValue[key] = config[key].initValue;
    });
    return initValue;
  });

  const [errors, setErrors] = useState<any>({});
  const [isValidating, setIsValidating] = useState(false);

  // 获取当前值
  const getFieldValitate = useCallback(
    field => {
      return {
        disabled: isValidating,
        value: values[field],
        error: errors[field],
      };
    },
    [errors, isValidating, values],
  );

  // 校验
  const checkError = useCallback(() => {
    const result = validator(values, initConfig.current);
    const isValid = JSON.stringify(result) === '{}';
    setErrors(result);
    return isValid;
  }, [values]);

  // input
  const getFieldProps = useCallback(
    (field, options: any = {}) => {
      if (!initConfig.current[field]) {
        throw new Error(`field: ${field} is not exist`);
      }

      const { trigger, validate } = options;

      return {
        ...getFieldValitate(field),
        [trigger ? trigger : 'onChange']: (value: string) => {
          setValues(preValues => {
            return { ...preValues, [field]: value };
          });
          // 如果validator是函数
          if (validate && typeof validate === 'function') {
            validate(value);
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
            onSubmit(values, errors);
          }
        },
      };
    },
    [checkError, errors, values],
  );

  return {
    errors,
    values,
    isValidating,

    getFieldProps,
    getSubmitButtonProps,
  };
}
