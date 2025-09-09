---
group:
  title: 数据录入
  order: 2
order: 1
title: Calendar
toc: content
---

# Calendar

日历组件，用于日期选择和展示。

## 何时使用

- 需要日期选择时
- 需要日期范围选择时
- 需要日历展示时
- 需要周/月视图切换时

## 示例

<code src="./demos/demo1.jsx"></code>

## Calendar

### 属性

| 属性           | 说明         | 类型                                 | 默认值                       |
| -------------- | ------------ | ------------------------------------ | ---------------------------- |
| type           | 日历类型     | `'week' \| 'month'`                  | `'month'`                    |
| value          | 选中值       | `Date \| Date[]`                     | -                            |
| selectionMode  | 选择模式     | `'single' \| 'range'`                | -                            |
| weekStart      | 周起始日     | `'Monday' \| 'Sunday'`               | `'Sunday'`                   |
| titleFormatter | 标题格式化   | `string`                             | `'YYYY-MM'`                  |
| min            | 最小日期     | `Date`                               | -                            |
| max            | 最大日期     | `Date`                               | -                            |
| draggable      | 可拖动方向   | `array`                              | `['horizontal', 'vertical']` |
| header         | 是否显示头部 | `boolean`                            | `true`                       |
| dateRender     | 日期渲染函数 | `function`                           | -                            |
| onLoad         | 加载回调     | `(date: Date, info: object) => void` | -                            |
| onChange       | 选择变化回调 | `(date: Date, info: object) => void` | -                            |
| onSlideChange  | 滑动变化回调 | `(date: Date, info: object) => void` | -                            |
| onError        | 错误回调     | `(error: Error) => void`             | -                            |

### Ref

| 属性          | 说明       | 类型                   |
| ------------- | ---------- | ---------------------- |
| rootDOM       | 根元素     | `HtmlDivElement`       |
| getRootDOM    | 获取根元素 | () => `HtmlDivElement` |
| slideCollapse | 收起动画   | `() => Promise<void>`  |
| slideExpand   | 展开动画   | `() => Promise<void>`  |
| slidePrevious | 上一月     | `() => Promise<void>`  |
| slideNext     | 下一月     | `() => Promise<void>`  |
