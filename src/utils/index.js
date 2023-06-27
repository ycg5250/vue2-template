/** 设置显示模式 */
export function setMode(mode) {
  if (mode) {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('theme');
  }
}
// 获取当前模式
// export function getMode() {
//   if (document.documentElement.hasAttribute('theme')) {
//     return false
//   } else {
//     return true
//   }
// }

let TP_SERVER_DOMAIN;

if (process.env.VUE_APP_ENV === 'production') {
  TP_SERVER_DOMAIN = 'https://preserver.mytokenpocket.vip';
} else if (process.env.VUE_APP_ENV === 'beta') {
  TP_SERVER_DOMAIN = 'https://betaserver.mytokenpocket.vip';
} else if (process.env.VUE_APP_ENV === 'dev') {
  TP_SERVER_DOMAIN = 'https://testserver.mytokenpocket.vip';
}

export { TP_SERVER_DOMAIN };
