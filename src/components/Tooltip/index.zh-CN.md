---
group:
  title: 反馈
  order: 2
order: 1
title: Tooltip
toc: content
---

# Tooltip

文字提示组件，用于显示额外的信息。

## 何时使用

- 需要显示额外信息时
- 需要解释某个元素时
- 需要显示帮助信息时
- 需要悬停提示时

## 示例

<code src="./demos/demo1.jsx"></code>

## Tooltip

### 属性

| 属性            | 说明           | 类型                         | 默认值            |
| --------------- | -------------- | ---------------------------- | ----------------- |
| animation       | 动画类型       | `string`                     | `'slideDownLeft'` |
| style           | 自定义样式     | `object`                     | -                 |
| referenceDOM    | 参考元素       | `HTMLElement \| function`    | -                 |
| children        | 触发元素       | `ReactNode`                  | -                 |
| onVisibleChange | 可见性变化回调 | `(visible: boolean) => void` | -                 |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
