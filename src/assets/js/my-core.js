export default {
  /**
   * 去除字符串内两头的空格
   * @param {string} text
   * @return {string} text
   */
  trim (text) {
  return text.replace(/^\s*|\s*$/g, "")
  },
  /**
   * 验证手机号码 返回一个布尔值
   * @param {string} phone
   * @return Boolean
   */
  checkPhone (phone){
    return /^1[3456789]\d{9}$/.test(phone)
  }

}