export default {

  /**
   * 验证手机号码
   * @param {number} num
   * @return Boolean
   */
  checkPhone (num) {
    if (!(/^1[3456789]\d{9}$/.test(num))) {
      return false;
    } else {
      return true
    }
  },

  /**
   * 去除字符串内两头的空格
   * @param {string} text
   * @return {string} text
   */
  trim (text) {
  return text.replace(/^\s*|\s*$/g, "")
  }
}