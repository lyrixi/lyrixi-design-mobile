---
group:
  title: 数据录入
  order: 2
order: 1
title: Vott
toc: content
---

# Vott 标注

图像标注组件，用于图像标注和编辑。

## 何时使用

- 需要图像标注时
- 需要图像编辑时
- 需要图像标注预览时
- 需要图像数据处理时

## 示例

<code src="./demos/demo1.jsx"></code>

## Vott

### 属性

| 属性      | 说明         | 类型                                  | 默认值 |
| --------- | ------------ | ------------------------------------- | ------ |
| src       | 图像源       | `string`                              | -      |
| data      | 标注数据     | `array`                               | `[]`   |
| params    | 实例化参数   | `object`                              | `{}`   |
| readOnly  | 是否只读     | `boolean`                             | `true` |
| preview   | 是否支持预览 | `boolean`                             | `true` |
| watermark | 水印         | `ReactNode`                           | -      |
| onChange  | 变化回调     | `(list: array, info: object) => void` | -      |

### Ref

| 属性        | 说明         | 类型                   |
| ----------- | ------------ | ---------------------- |
| rootDOM     | 根元素       | `HtmlDivElement`       |
| instance    | 标注实例     | `object`               |
| getRootDOM  | 获取根元素   | () => `HtmlDivElement` |
| getInstance | 获取标注实例 | () => `object`         |
