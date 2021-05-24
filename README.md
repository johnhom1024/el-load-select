# el-load-select

基于element-ui 二次封装的select组件

[中文文档](https://marihom.github.io/el-load-select/)

## 安装

```
npm install @marihom/el-load-select

# 或者 yarn add @marihom/el-load-select
```

## 使用教程

在Vue项目中的`main.js`文件中，加入如下代码：

```javascript
import Vue from 'vue'

import loadSelect from '@marihom/el-load-select'

Vue.use(loadSelect)
```

在`.vue`文件中，使用该组件：

```html
<template>
  <load-select></load-select>
</template>
```

`load-select`组件的具体使用教程可以参考我的另一个仓库[vue-load-select](https://github.com/marihom/vue-load-select◊)

## 待完善

- [ x ] 将具体的使用教程用一个vuepress来代替

## 注意事项

该插件是基于`element-ui`中的`Select`组件进行二次封装，所以在你的Vue项目中使用时需要同时导入`element-ui`库，具体的导入步骤可以参考[官方网站](https://element.eleme.cn)

