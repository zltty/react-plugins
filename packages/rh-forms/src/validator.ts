import { IConfig, IResult, IValues } from './typings';

function validator(values: IValues, rulesConfig: IConfig): IResult {
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
    const currentRuleKey = rulesKeys[i];

    const { rules } = rulesConfig[currentRuleKey];
    // 需要校验的规则次数
    const len2 = rules.length;
    // 当前校验的值
    const currentValue = values[currentRuleKey];

    for (let j = 0; j < len2; j++) {
      // 优先校验required
      if (rules[j].required && currentValue.length === 0) {
        if (!result[currentRuleKey]) {
          result[currentRuleKey] = [];
        }
        result[currentRuleKey].push('value is null');
      } else {
        // 校验其他
        if (!rules[j].pattern.test(currentValue)) {
          if (!result[currentRuleKey]) {
            result[currentRuleKey] = [];
          }
          result[currentRuleKey].push(rules[j].message);
        }
      }
    }
  }

  return result;
}

export default validator;
