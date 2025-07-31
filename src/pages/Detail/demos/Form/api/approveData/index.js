import { LocaleUtil, Request, Device, Loading } from 'lyrixi-design-mobile'
const locale = LocaleUtil.locale

// 审批数据
async function approveData() {
  Loading.show()
  let id = Device.getUrlParameter('id')

  return new Promise((resolve) => {
    Request.post(
      '/platform/param/v1/getLoginUser.do',
      { id: id },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((result) => {
        Loading.hide()
        resolve(result)
      })
      .catch((err) => {
        Loading.hide()
        resolve({
          code: '0',
          message: err?.data?.message || locale('服务器繁忙，请稍后重试！')
        })
      })
  })
}

export default approveData
