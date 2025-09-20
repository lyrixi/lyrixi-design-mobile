// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

/**
 * 包装第三方API的success和fail回调，统一返回格式
 * @param {Object} params - 包含success和fail回调的参数对象
 * @param {Function} params.success - 成功回调
 * @param {Function} params.fail - 失败回调
 * @returns {Object} 包含标准格式回调的对象
 */
export function wrapCallback(params = {}) {
  const { success, fail, ...otherParams } = params

  return {
    ...otherParams,
    success: function(res) {
      if (success) {
        success({
          status: 'success',
          ...res
        })
      }
    },
    fail: function(err) {
      if (fail) {
        // 提取错误信息
        let message = err?.errMsg || err?.errorMessage || err?.message || ''

        // 如果没有错误信息，使用默认文案
        if (!message) {
          message = LocaleUtil.locale('调用失败', 'SeedsUI_call_failed')
        }

        fail({
          status: 'error',
          message: message,
          originalError: err
        })
      }
    }
  }
}

/**
 * 包装钉钉特殊格式的回调 (onSuccess/onFail)
 * @param {Object} params - 包含onSuccess和onFail回调的参数对象
 * @param {Function} params.success - 成功回调（会被映射到onSuccess）
 * @param {Function} params.fail - 失败回调（会被映射到onFail）
 * @returns {Object} 包含onSuccess和onFail的对象
 */
export function wrapDingTalkCallback(params = {}) {
  const { success, fail, ...otherParams } = params

  return {
    ...otherParams,
    onSuccess: function(res) {
      if (success) {
        success({
          status: 'success',
          ...res
        })
      }
    },
    onFail: function(err) {
      if (fail) {
        // 提取错误信息
        let message = err?.errMsg || err?.errorMessage || err?.message || ''

        // 如果没有错误信息，使用默认文案
        if (!message) {
          message = LocaleUtil.locale('调用失败', 'SeedsUI_call_failed')
        }

        fail({
          status: 'error',
          message: message,
          originalError: err
        })
      }
    }
  }
}

export default wrapCallback