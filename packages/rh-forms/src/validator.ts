import { IConfig, IResult, IValues } from './typings';

function validator(values: IValues, rulesConfig: IConfig): IResult | null {
  // 规则
  const rulesKeys = Object.keys(rulesConfig);

  // 无规则
  if (rulesKeys.length === 0) {
    return {};
  }
  // 有规则
  const result: IResult = {};
  const len = rulesKeys.length;

  for (let i = 0; i < len; i++) {
    const filedKey = rulesKeys[i];

    const { rules } = rulesConfig[filedKey];
    // 需要校验的规则
    const len2 = rules.length;
    // 当前校验的值
    const value = values[filedKey];

    for (let j = 0; j < len2; j++) {
      // 优先校验required
      if (rules[j].required && value.length === 0) {
        if (!result[filedKey]) {
          result[filedKey] = [];
        }

        const msg = rules[j].requiredMsg
          ? rules[j].requiredMsg
          : 'value is null';

        result[filedKey].push(msg as string);
      } else {
        if (rules[j].pattern) {
          // 校验其他
          if (!(rules[j].pattern as RegExp).test(value)) {
            if (!result[filedKey]) {
              result[filedKey] = [];
            }
            rules[j].message &&
              result[filedKey].push(rules[j].message as string);
          }
        }
      }
    }
  }

  return result;
}

export default validator;
