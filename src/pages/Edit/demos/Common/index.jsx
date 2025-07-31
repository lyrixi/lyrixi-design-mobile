// 第三方库导入
import React, { useRef, useEffect, useState } from 'react'
import {
  LocaleUtil,
  Toast,
  Divider,
  Layout,
  Result,
  Form,
  Card,
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
  Signature,
  Upload,
  Image
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

  // 加载数据
  async function loadData() {
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
        <Card>
          <Divider>Horizontal Layout</Divider>
          <Form
            form={form}
            style={{ margin: '0 12px' }}
            labelCol={{ ellipsis: { rows: 1, expandable: true } }}
          >
            <Form.Item
              name="input"
              label={locale(
                'Input Overflow Title, It is very very very long,  It is really very very very long'
              )}
              help="Help info"
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
              name="textarea"
              maxLength={150}
              label={locale('Textarea')}
              extra={({ value }) => {
                return <div className="text-right">{`${value?.length || '0'} / 150`}</div>
              }}
            >
              <Input.Textarea placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="autoFit" label={locale('Auto fit')}>
              <Input.AutoFit placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="selectTags" label={locale('Select Tags')}>
              <Select.Combo
                mode="tags"
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
            <Form.Item name="select" label={locale('Select')}>
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
            <Form.Item name="picker" label={locale('Picker')}>
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
            <Form.Item name="switch" valuePropName="checked" label={locale('Switch')}>
              <Switch />
            </Form.Item>
            <Form.Item name="checkbox" label={locale('Checkbox')}>
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
            <Form.Item name="radio" label={locale('Radio')}>
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
            <Form.Item name="selector" label={locale('Selector')}>
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
            <Form.Item name="number" label={locale('Number')}>
              <Input.Number placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item
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
              name="password"
              label={locale('Password')}
              extra={({ value }) => {
                return <Input.PasswordStrength value={value} style={{ marginTop: 8 }} />
              }}
            >
              <Input.Password placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="range" label={locale('Range')}>
              <Input.Range />
            </Form.Item>
            <Form.Item name="rate" label={locale('Rate')}>
              <Input.Rate />
            </Form.Item>
            <Form.Item name="tel" label={locale('Tel')}>
              <Input.Tel placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="url" label={locale('Url')}>
              <Input.Url placeholder={locale('Please input')} />
            </Form.Item>
            <Form.Item name="signature" layout="vertical" label={locale('Signature')}>
              <Signature.Combo />
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Divider>Vertical Layout</Divider>
          <Form form={form} layout="vertical" style={{ margin: '0 12px' }}>
            <Form.Item name="datetime" label={locale('Datetime')}>
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
            <Form.Item name="date" label={locale('Date')}>
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
            <Form.Item name="time" label={locale('Time')}>
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
            <Form.Item name="dateRange" label={locale('Date range')}>
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
            <Form.Item name="district" label={locale('District')}>
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
            <Form.Item name="location" label={locale('Location')}>
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
            <Form.Item name="signature" label={locale('Signature')}>
              <Signature.Combo />
            </Form.Item>
            <Form.Item name="upload" label={locale('Upload')}>
              <Upload
                reUpload={false}
                allowChoose
                allowClear
                uploadPosition="start"
                maxSize={300 * 1024 * 1024}
                list={[
                  {
                    name: '1',
                    src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    status: 'fail'
                  },
                  {
                    name: '2',
                    src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
                  }
                ]}
                count={9}
                onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
                  console.log({ fileName, fileSize, fileURL, fileData })
                }}
                onChange={(newList) => {
                  console.log('修改:', newList)
                }}
              />
            </Form.Item>
            <Form.Item name="image" label={locale('Image')}>
              <Image
                allowChoose
                allowClear
                list={[
                  {
                    id: '1',
                    thumb:
                      'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    status: 'fail'
                  },
                  {
                    id: '2',
                    thumb:
                      'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    src: 'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg'
                    // status: 'uploading'
                  },
                  {
                    id: '3',
                    thumb:
                      'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    thumb: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
                  },
                  {
                    id: '4',
                    thumb:
                      'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
                    src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
                  }
                ]}
                count={9}
                onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
                  console.log({ fileName, fileSize, fileURL, fileData })
                }}
                onChange={(newList) => {
                  console.log('修改:', newList)
                }}
              />
            </Form.Item>
          </Form>
        </Card>
      </Layout.Main>

      {/* Footer */}
      <Footer onOk={handleSave} />

      {/* Error */}
      {result?.message && <Result className="full" status={result.status} title={result.title} />}
    </Layout>
  )
}

export default Edit
