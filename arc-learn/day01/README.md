## 进度
- [] 手动搭建react

## 插件
- postcss-loader
- css-loader
- style-loader

## postcss
一个用 JavaScript 工具和插件转换 CSS 代码的工具，一套css的生态系统，
通过组合插件的形式让我们更舒适的编写css。
## css-loader
css-loader: 加载.css文件  
使用css modules 

:local 局部变量
:global 全局变量

多个全局变量(首次需要重新编译)
```js
:global {
  .container{}
  ...
}
```
单个全局变量(不需要重新编译)
```js
:global(.container) {
  backgound-color:red
}
```

全局与局部作用域时需要重新编译
## style-loader
使用<style>将css-loader内部样式注入到我们的HTML页面  

## 自动刷新页面 
react-hot-loader  
**注意:这里Chrome版本较高的时候,会有跨域问题（题外话包括rn也会出现该问题）安装cors浏览器插件，添加目标域名即可**

## babel7
@babel/plugin-proposal-decorators 装饰器 
@babel/plugin-proposal-class-properties 支持箭头函数
@babel/plugin-syntax-dynamic-import 动态导入