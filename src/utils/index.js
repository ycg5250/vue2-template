/** 设置显示模式 */
export function setMode(mode) {
  if (mode) {
    document.documentElement.setAttribute('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('theme')
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
