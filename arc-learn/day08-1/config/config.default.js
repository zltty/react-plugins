// axios配置
export const baseConfig = {
  baseURL: null,
  timeout: 20 * 1000 // 20s
};

export const reg = {
  mobile: /^1\d{2}\d{4}\d{4}$/,
  takeoutCode: /^\d{6}$/,
  password: /^\d{6}$/,
  password2: /^\d{6,12}$/,
  expressNo: /^[0-9]*$/,
  no: /^\d{1,3}$/,

  payPassword: /^\d{6}$/,
  code: /^\d{4}$/,
  name: /^\S+$/,
  payCode: /^\d{6}$/,
  identityCard: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
  bankAccount: /^\d{4}\s\d{4}\s\d{4}\s\d{4}(\s\d+)*$/,
  expiryDate: /^\d{4}$/,
  cvn2: /^\d{3}$/,
  amount: /^[1-9]\d{3}$|^1\d{4}$|20000$|[1-9]\d{3}\.\d{1,2}$|^1\d{4}\.\d{1,2}$|20000\.\d{1,2}$/,
};
