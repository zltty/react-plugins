/**
 * 触发器
 */
export type TTrigger = 'onChange' | 'onPress' | 'onChangeText' | 'onClick'; // 待添加其他类型

export interface IRules {
  required?: boolean;
  requiredMsg?: string;
  pattern?: RegExp;
  message?: string;
}

export interface IResult {
  /**
   * 返回校验结果
   */
  [propName: string]: string[];
}

export interface IValues {
  /**
   *  校验值
   */
  [propName: string]: string;
}

export interface IConfig {
  [x: string]: {
    /**
     * 正则验证规则
     */
    rules: IRules[];
    /**
     * 默认值
     */
    initValue?: string;
    /**
     * 触发器， 默认onChange 支持 Trigger类型
     */
    trigger?: TTrigger;
    /**
     * 触发器回调
     */
    callback?: (value: string) => void;
  };
}
