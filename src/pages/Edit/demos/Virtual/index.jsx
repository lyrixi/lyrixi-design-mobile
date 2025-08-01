// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import {
  LocaleUtil,
  Toast,
  Layout,
  Result,
  Form,
  Input,
  Select,
  Picker,
  Switch,
  Checkbox,
  Radio,
  Selector,
  DatePicker,
  Cascader,
  Location,
  Signature
} from 'lyrixi-design-mobile'

// 项目内部模块导入
import { queryData, validateData, saveData } from './../Cache/api'
import Footer from './../Cache/Footer'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 表单编辑页面
const Edit = () => {
  // 表单
  const [form] = Form.useForm()

  // 防重复提交token
  const tokenRef = useRef('' + Date.now())

  // 全屏提示: {status: 'empty|500', message: '', data: { baseData: {}, formData: {} }}
  const [result, setResult] = useState(null)

  useEffect(() => {
    // 初始化数据
    loadData()

    // eslint-disable-next-line
  }, [])

  /**
   * queryData初始化数据方法
   * @return {Object} {baseData: xx, formData: xx}
   */
  async function loadData() {
    // 加载详情数据
    let data = await queryData()
    setResult(data)

    // Initialize form with data
    if (data?.formData) {
      form.setFieldsValue(data.formData)
    }
  }

  // 保存
  async function handleSave() {
    // 校验表单数据
    let data = await validateData({ form })
    if (!data) return

    // 保存表单数据
    let result = await saveData({ baseData: baseDataRef.current, data, token: tokenRef.current })
    if (result.code === '1') {
      Toast.show({
        content: locale('提交成功!'),
        onVisibleChange: (visible) => {
          if (visible === false) {
            // 提交完成后操作: 返回等
          }
        }
      })
    }
    // 保存出错
    else {
      // 重复请求需要重新生成token
      if (result.code === '2') tokenRef.current = '' + Date.now()

      Toast.show({
        content: result.message || locale('提交失败!')
      })
    }
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Form form={form} style={{ marginLeft: '12px' }} virtual={true}>
          <Form.Item
            height={42}
            name="input"
            label={locale('Input')}
            rules={[
              {
                required: true,
                message: locale('Input cannot be empty')
              }
            ]}
          >
            <Input.Text placeholder={locale('Please input')} maxLength={50} />
          </Form.Item>
          <Form.Item
            height={97}
            name="textarea"
            maxLength={150}
            label={locale('Textarea')}
            extra={({ value }) => {
              return <div className="text-right">{`${value?.length || '0'} / 150`}</div>
            }}
          >
            <Input.Textarea placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item height={42} name="autoFit" label={locale('Auto fit')}>
            <Input.AutoFit placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item height={42} name="select" label={locale('Select')}>
            <Select.Combo
              placeholder={locale('Please select')}
              list={[
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="picker" label={locale('Picker')}>
            <Picker.Combo
              placeholder={locale('Please select')}
              list={[
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={50} name="switch" valuePropName="checked" label={locale('Switch')}>
            <Switch />
          </Form.Item>
          <Form.Item height={74} name="checkbox" label={locale('Checkbox')}>
            <Checkbox.Group
              placeholder={locale('Please select')}
              list={[
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item height={74} name="radio" label={locale('Radio')}>
            <Radio.Group
              placeholder={locale('Please select')}
              list={[
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item height={102} name="selector" label={locale('Selector')}>
            <Selector
              placeholder={locale('Please select')}
              list={[
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                },
                {
                  id: '3',
                  name: 'Option3'
                },
                {
                  id: '4',
                  name: 'Option4'
                }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item height={42} name="number" label={locale('Number')}>
            <Input.Number placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item
            height={48}
            name="numberBox"
            label={locale('Number box')}
            rules={[
              {
                required: true,
                message: locale('Number box can not empty')
              }
            ]}
          >
            <Input.NumberBox placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item
            height={52}
            name="password"
            label={locale('Password')}
            extra={({ value }) => {
              return <Input.PasswordStrength value={value} />
            }}
          >
            <Input.Password placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item height={55} name="range" label={locale('Range')}>
            <Input.Range />
          </Form.Item>
          <Form.Item height={55} name="rate" label={locale('Rate')}>
            <Input.Rate />
          </Form.Item>
          <Form.Item height={42} name="tel" label={locale('Tel')}>
            <Input.Tel placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item height={42} name="url" label={locale('Url')}>
            <Input.Url placeholder={locale('Please input')} />
          </Form.Item>
          <Form.Item height={42} name="datetime" label={locale('Datetime')}>
            <DatePicker.Combo
              type="datetime"
              placeholder={locale('Please select')}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="date" label={locale('Date')}>
            <DatePicker.Combo
              placeholder={locale('Please select')}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="time" label={locale('Time')}>
            <DatePicker.Combo
              type="time"
              placeholder={locale('Please select')}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="dateRange" label={locale('Date range')}>
            <DatePicker.RangeCombo
              placeholder={locale('Please select')}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="district" label={locale('District')}>
            <Cascader.DistrictCombo
              placeholder={locale('Please select')}
              allowClear
              clear={({ clearable, triggerClear }) => {
                return clearable ? (
                  <Input.IconClear onClick={triggerClear} />
                ) : (
                  <Input.IconRightArrow />
                )
              }}
            />
          </Form.Item>
          <Form.Item height={42} name="location" label={locale('Location')}>
            <Location.Combo
              type="gcj02"
              config={{
                key: '',
                type: 'bmap'
              }}
              placeholder={locale('Please select')}
              allowClear
              previewVisible
              chooseVisible
              clear={({ clearable, triggerClear }) => {
                return clearable ? <Input.IconClear onClick={triggerClear} /> : null
              }}
            />
          </Form.Item>
          <Form.Item height={52} name="signature" label={locale('Signature')}>
            <Signature.Combo />
          </Form.Item>
        </Form>
      </Layout.Main>

      {/* Footer */}
      <Footer onOk={handleSave} />

      {/* Error */}
      {result?.message && (
        <Result className="full" status={mainStatus.status} title={mainStatus.title} />
      )}
    </Layout>
  )
}

export default Edit
