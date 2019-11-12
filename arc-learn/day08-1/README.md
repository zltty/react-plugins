## 资源
- [React同构与极致的性能优化 来自淘宝的分享](https://segmentfault.com/a/1190000012464033)
- [React+Redux 同构应用开发](http://www.aliued.com/?p=3077)
- [从零开始React服务器渲染](http://www.alloyteam.com/2017/01/react-from-scratch-server-render/)
- [预渲染](http://www.prerender.io)

## 为什么做直出
就是为了“性能”！！！
按照经验来说，直出，能够减少20% – 50%不等的首屏时间，因此尽管增加一定维护成本，前端们还是前赴后继地在搞直出。
除此之外，有些特定的业务做直出能够弥补前后端分离带来的SEO问题。像这次选取的腾讯新闻，大多数页面首屏其实都是直出的（但肯定不是React直出）。
刚提到的首屏时间，只是单纯内容的渲染，另外还有首屏可交互时间，即除了内容渲染之余，还能够让用户能够对首屏的内容进行交互，如点击、  
滚动等等。现在市面上有关React的性能报告，尤其是那些截了Chrome渲染映像的，都归到首屏时间。

## 服务端方式一
- [x] 手动搭建react
- [x] react-router4（路由）
- [x] react-router-config（静态路由配置）
- [x] react-loadable（代码分离）
- [x] immutable(不可变数据)
- [x] redux + react-redux 
- [x] redux-saga
- [x] 服务端客户端数据同构(redux)
- [x] 404异常
- [x] 301重定向
- [x] 处理服务端请求数据异常
- [x] 添加css样式
- [x] 定制页面SEO内容 react-helmet
- [x] 预渲染

**注意: 服务端渲染(首次服务端渲染， 页面中跳转则是客户端访问)**

## 接口返回数据定义

```js
{
  retCode: 0,  //接口响应码
  retMsg:'msg', //接口响应信息
  retData: { // 接口响应数据
    code:0, // 响应数据返回码
    msg:'msg',// 响应数据信息
    data:[ // 相应数据 不一定是数组 看场景
      { name:'张三',age:'10' },
      { name:'李四',age:'12' },
      { name:'王五',age:'11' },
    ],
  }
}
```
