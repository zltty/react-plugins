export const HOST = process.env.NODE_ENV==='development' ? 'http://192.168.2.107:3000' : 'http://dl.umiit.cn';
export const AUTH_CLIENT_ID = 'loanapp';
export const AUTH_CLIENT_SECRET = 'la110';
export const CAPTCHA_TIME = process.env.NODE_ENV==='development' ? 5 : 30;
export const MD5_KEY = 'lnapp';

export const Timer = {
  toast_err: 3,
  toast_success: 2,
  toast_loading: 2,
  captcha: process.env.NODE_ENV==='development' ? 5 : 30,

  net_delay: 300, // 延迟请求网络
  net_wait: 2, // 发起网络请求Toast显示时间
  net_error: 1.5, // 发起网络请求Toast异常显示时间
};

export const LOAN_XY = `${HOST}/xy/loan`;
export const REGISTER_XY = `${HOST}/xy/register`;
export const PICK_DATA = {
  data: [
    {
      label: '1000',
      value: 1000,
    },
    {
      label: '2000',
      value: 2000,
    }
  ],
  timeLimt: [
    {
      label: '7',
      value: 7,
    },
  ],
};
