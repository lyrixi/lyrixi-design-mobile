<div align="center"><a name="readme-top"></a>

<img height="180" src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png">

<h1>Lyrixi for React</h1>

An enterprise-class UI design language and React UI library.

<img height="8" width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png"/>

</div>

## 📦 CSS

### Less import

```bash
@import 'lyrixi-design-mobile.min.css';
```

### CSS import

```html
<link
  rel="stylesheet"
  href="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/lyrixi-design-mobile.min.css"
/>
```

## 📦 Install

### NPM

```bash
npm install lyrixi-design-mobile
```

```bash
yarn add lyrixi-design-mobile
```

```bash
pnpm add lyrixi-design-mobile
```

### UMD

Add scripts to `index.html`

```html
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/react.18.2.0.min.js"></script>
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/react-dom.18.2.0.min.js"></script>
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/axios.1.6.2.min.js"></script>
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/dayjs.1.11.8.min.js"></script>
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/ahooks.3.8.1.min.js"></script>
<script src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/lodash.4.17.21.min.js"></script>
<!-- Lyrixi must defer -->
<script
  defer
  src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/externals/lyrixi-design-mobile.min.js"
></script>

<!-- The UMD tool unpkg can get the latest base library, example:  -->
<!-- <script src="https://unpkg.com/react-routers"></script> -->

<script>
  // The UMD version of lodash must have reference to window.lodash
  window.lodash = window._
</script>
```

Config webpack.config.js

```js
return {
  // [自定义修改]公共cdn文件 start
  // externalsType: 'umd',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    axios: 'axios',
    dayjs: 'dayjs',
    lodash: '_',
    ahooks: 'ahooks',
    'lyrixi-design-mobile': 'Lyrixi'
  },
  // [自定义修改]公共cdn文件 end
  target: ['browserslist'],
  ...
}
```

## 🔨 Usage

```tsx
import { Button, DatePicker } from 'lyrixi-design-mobile'

export default () => (
  <>
    <Button className="primary">PRESS ME</Button>
    <DatePicker.Combo type="date" placeholder="select date" />
  </>
)
```

[Visit lyrixi-design-mobile docs](https://colaboy.github.io/lyrixi-design-mobile/)
