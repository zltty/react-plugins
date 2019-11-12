## 进度

react-router-dom 基于react-router 用于浏览器环境 所以不需要安装且引入两个 只需要选择安装并选择其一

## hashhistory 与 browserhistory有什么区别（v3）

使用 hashHistory，浏览器上看到的 url 会是这样的: /#/user/haishanh?_k=adseis
使用 browserHistory，浏览器上看到的 url 会是这样的：/user/haishanh  

browserHistory
看起来很好很理想，但 browserHistory 需要 server 端支持。浏览器从 / 到 /user/haishanh 是会向 server 发送 request 的。所以 server 端是要做特殊配置的。比如用的 express 的话，你需要 handle 所有的路由 app.get('*', (req, res) => { ... })，使用了 nginx 的话，nginx也要做相应的配置。  

hashHistory
```
因为 url 中 # 符号的存在，从 /#/ 到 /#/user/haishanh 浏览器并不会去发送一次 request，react-router 自己根据 url 去 render 相应的模块。 
```

如果要使用 <BrowserRouter> 的话，让后端服务器配置下路由就行。<BrowserRouter> 属于比较常用的路由，<HashRouter> 适用于页面比较少的小型项目。

[React-Router browserHistory浏览器刷新出现页面404解决方案](https://www.thinktxt.com/react/2017/02/26/react-router-browserHistory-refresh-404-solution.html)
