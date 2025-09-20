---
group:
  title: 数据录入
  order: 2
order: 1
title: Input
toc: content
---

# Input

输入框组件，提供多种类型的输入控件。

## 何时使用

- 需要用户输入文本、数字、密码等信息时
- 需要表单验证和格式化时
- 需要特殊输入控件（如评分、范围选择等）时

## 示例

### Input.AutoFit

<code src="./demos/AutoFit/index.jsx"></code>

### Input.Number

<code src="./demos/Number/index.jsx"></code>

### Input.NumberBox

<code src="./demos/NumberBox/index.jsx"></code>

### Input.Password

<code src="./demos/Password/index.jsx"></code>

### Input.PasswordStrength

<code src="./demos/PasswordStrength/index.jsx"></code>

### Input.Range

<code src="./demos/Range/index.jsx"></code>

### Input.Rate

<code src="./demos/Rate/index.jsx"></code>

### Input.Tel

<code src="./demos/Tel/index.jsx"></code>

### Input.Text

<code src="./demos/Text/index.jsx"></code>

### Input.Textarea

<code src="./demos/Textarea/index.jsx"></code>

### Input.Url

<code src="./demos/Url/index.jsx"></code>

### Input.Search

<code src="./demos/Search/index.jsx"></code>

### Input.NumberKeyboard

<code src="./demos/NumberKeyboard/index.jsx"></code>

## Input.Text

### 属性

| 属性         | 说明         | 类型                                                                 | 默认值   |
| ------------ | ------------ | -------------------------------------------------------------------- | -------- |
| id           | 输入框 ID    | `string`                                                             | -        |
| type         | 输入类型     | `'text' \| 'number' \| 'tel' \| 'password' \| 'search' \| 'autoFit'` | `'text'` |
| style        | 自定义样式   | `object`                                                             | -        |
| className    | 自定义类名   | `string`                                                             | -        |
| readOnly     | 是否只读     | `boolean`                                                            | -        |
| disabled     | 是否禁用     | `boolean`                                                            | -        |
| name         | 输入框名称   | `string`                                                             | -        |
| value        | 输入值       | `string \| number`                                                   | `''`     |
| inputMode    | 输入模式     | `string`                                                             | -        |
| enterKeyHint | 回车键提示   | `string`                                                             | -        |
| autoComplete | 自动完成     | `string`                                                             | -        |
| autoCorrect  | 自动纠正     | `string`                                                             | -        |
| spellCheck   | 拼写检查     | `string`                                                             | -        |
| formatter    | 格式化函数   | `(value: any) => string`                                             | -        |
| precision    | 小数精度     | `number`                                                             | -        |
| trim         | 是否去除空格 | `boolean`                                                            | -        |
| max          | 最大值       | `number`                                                             | -        |
| min          | 最小值       | `number`                                                             | -        |
| placeholder  | 占位符       | `string`                                                             | -        |
| maxLength    | 最大长度     | `number`                                                             | -        |
| autoFocus    | 自动获取焦点 | `boolean`                                                            | -        |
| autoSelect   | 自动选中     | `boolean`                                                            | -        |
| input        | 自定义输入框 | `ReactNode`                                                          | -        |
| leftIcon     | 左侧图标     | `ReactNode`                                                          | -        |
| rightIcon    | 右侧图标     | `ReactNode`                                                          | -        |
| clear        | 清除按钮     | `boolean \| ReactNode`                                               | -        |
| allowClear   | 允许清除     | `boolean`                                                            | -        |
| onClick      | 点击事件     | `(e: Event) => void`                                                 | -        |
| onChange     | 值变化事件   | `(value: any, e: Event) => void`                                     | -        |
| onBlur       | 失焦事件     | `(e: Event) => void`                                                 | -        |
| onFocus      | 聚焦事件     | `(e: Event) => void`                                                 | -        |
| onKeyDown    | 按键事件     | `(e: Event) => void`                                                 | -        |
| onPressEnter | 回车事件     | `(e: Event) => void`                                                 | -        |
| inputProps   | 输入框属性   | `object`                                                             | `{}`     |

### Ref

| 属性        | 说明           | 类型                     |
| ----------- | -------------- | ------------------------ |
| rootDOM     | 根元素         | `HtmlDivElement`         |
| inputDOM    | 输入框元素     | `HtmlInputElement`       |
| getRootDOM  | 获取根元素     | () => `HtmlDivElement`   |
| getInputDOM | 获取输入框元素 | () => `HtmlInputElement` |
