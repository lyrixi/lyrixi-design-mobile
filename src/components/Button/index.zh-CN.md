---
group:
  title: 反馈
  order: 2
order: 1
title: Button
toc: content
---

# Button

用于开始一个即时操作。

## 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

<code src="./demos/demo1.jsx"></code>

## Button

### 属性

| 属性      | 说明       | 类型                                                                     | 默认值      |
| --------- | ---------- | ------------------------------------------------------------------------ | ----------- |
| color     | 按钮颜色   | `'default' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'` | `'default'` |
| variant   | 按钮变体   | `'default' \| 'outline' \| 'text' \| 'fill'`                             | `'default'` |
| size      | 按钮尺寸   | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                             | -           |
| radius    | 圆角大小   | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                             | -           |
| shape     | 按钮形状   | `'square' \| 'circle' \| 'round'`                                        | -           |
| className | 自定义类名 | `string`                                                                 | -           |
| children  | 按钮内容   | `ReactNode`                                                              | -           |
| disabled  | 是否禁用   | `boolean`                                                                | `false`     |

### Ref

| 属性       | 说明                 | 类型                   |
| ---------- | -------------------- | ---------------------- |
| rootDOM    | 原始 button 元素     | `HtmlDivElement`       |
| getRootDOM | 获取原始 button 元素 | () => `HtmlDivElement` |
