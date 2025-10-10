---
group:
  title: 通用
  order: 0
order: 3
title: 通用属性方法
toc: content
---

# 属性与方法

## 全局属性

全局属性定义和使用

| 属性名         | 说明               | 值                          | 默认值 |
| -------------- | ------------------ | --------------------------- | ------ |
| value          | 值                 | [{id:'', name: ''}]         | Empty  |
| multiple       | 多选               | true/false                  | false  |
| allowClear     | 是否允许清空       | true/false                  | false  |
| comboStyle     | 复合框 style       | Empty                       | Empty  |
| comboClassName | 复合框 className   | Empty                       | Empty  |
| maskStyle      | 弹窗遮罩 style     | Empty                       | Empty  |
| maskClassName  | 弹窗遮罩 className | Empty                       | Empty  |
| maskClosable   | 允许点击遮罩隐藏   | true/false                  | true   |
| modalStyle     | 弹窗 style         | Empty                       | Empty  |
| modalClassName | 弹窗 className     | Empty                       | Empty  |
| xxRender       | 子组件渲染         | function ({className, ...}) | Empty  |

## 全局事件

| 方法名    | 说明             | 出参                                  | 默认值 |
| --------- | ---------------- | ------------------------------------- | ------ |
| onSelect  | 组合控件内部修改 | [{id:'', name: ''}]/{id:'', name: ''} | Empty  |
| onChange  | 修改             | [{id:'', name: ''}]/{id:'', name: ''} | Empty  |
| onClose   | 点击关闭事件     | Empty                                 | Empty  |
| onOpen    | 点击打开事件     | Empty                                 | Empty  |
| onError   | 错误事件         | {status: '', message: ''}             | Empty  |
| onSuccess | 成功事件         | result                                | Empty  |
| onLoad    | 加载事件         | result                                | Empty  |
| onCancel  | 取消事件         | Empty                                 | Empty  |
