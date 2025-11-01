---
group:
  title: 通用
  order: 0
order: 3
title: 通用规则
toc: content
---

# 通用规则

- 国际化规则: 所有的显示在页面上的文字都需要用 locale 包裹，但不要传第二个参数，因为第二个参数是 key，后面由命令`npm run translate`统一补上，示例: locale('Example')

- 开发页面架构:
  api/
  utils/
  组件/
  index.jsx

1. `api`文件夹用于数据请求与数据转换, `api/queryData/localData`将服务器数据转成本地数据, `api/saveData/validateData`校验数据的正确性, `api/saveData/serverData`将本地数据转成服务器数据, 通常 api 下文件夹的命名范围是`saveXX/deleteXX/queryXX/downloadXX`

2. `utils`文件夹用于工具相关

3. `组件` 要高内聚，低耦合，若涉及组件之间的交互，通常使用`index.js`里定义的 state，将方法暴露出来`onXX`，`index.jsx`中使用`onXX={handleXX}`去接收

4. `index.jsx` 需要将页面上的各个部件拆成组件后引入

\*. `components` 文件夹用于页面的复用组件, 通常没有这个文件夹
