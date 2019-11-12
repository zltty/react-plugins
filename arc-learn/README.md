## TODO

详情查看 dayXX

+ day00       基础
+ day01       手动搭建react
+ day02       手动搭建react + 路由
+ day03       手动搭建react + 路由 + 静态路由配置
+ day04       手动搭建react + 路由 + 静态路由配置 + 各种代码分离
+ day05       手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy)
- - day05-1   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) +  redux 
- - day05-2   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) +  mobx （待完成）
+ day06       手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) + 不可变数据
- - day06-1   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) + 不可变数据 + redux
- - day06-2   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) + 不可变数据 + mobx （待完成）
- - day07-1   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) + 不可变数据 + redux + redux-saga
- - day07-2   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(React.lazy) + 不可变数据 + redux + redux-thunk （待完成）
- - day08-1   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(@loadable/component) + 不可变数据 + redux + redux-saga + 服务端渲染
- - day09-1   手动搭建react + 路由 + 静态路由配置 + 基于路由的分离(@loadable/component) + 不可变数据 + redux + redux-saga + 服务端渲染 + antd （待完成）

...to be continue
- 代码分离  
- 按需加载  
- 懒加载
- 代码压缩
- Next
- Graphsql
- Relay
- PWA
- MIP
- AMP
- Typescript
- 测试框架


## 优化措施

- {...this.props} (不要滥用，请只传递component需要的props，传得太多，或者层次传得太深，都会加重shouldComponentUpdate里面的数据比较负担，因此，也请慎用spread attributes（<Component {...props} />）)。
- ::this.handleChange()。(请将方法的bind一律置于constructor)
- this.handleChange.bind(this,id)
- 复杂的页面不要在一个组件里面写完。
- 请尽量使用const element。
- map里面添加key，并且key不要使用index（可变的）。具体可参考使用Perf工具研究React Key对渲染的影响
- 尽量少用setTimeOut或不可控的refs、DOM操作。
- props和state的数据尽可能简单明了，扁平化。
- 高阶组件优于继承
- 同构直出
- React 16 干掉了React.addons.Perf，官方现在推荐使用 your browser’s profiling tools 。
- 使用why-did-you-update检测多余的render效果不错。具体可见：High Performance React: 3 New Tools to Speed Up Your Apps


## 同构直出
> 同构基于服务端渲染，却不止是服务端渲染。React在减少重复渲染方面确实是有一套独特的处理办法，那就是virtual DOM，但显示在首次渲染的时候React绝无可能超越原生的速度。因此，我们在做优化的时候，接下来可以做的事情就是：

首屏时间可能会比较原生的慢一些，但可以尝试用React Server Render (又称Isomorphic)去提高效率

## 性能检测工具
React.addons.Perf

### 初始化项目

当前版本基于v16.6  
react-best-practice 初始化  
babel7  

```js
npx create-react-app react-best-practice
```

## 虚拟DOM
真实DOM的一个js对象映射

## 技术点
React 声明式API，使用UI 进行函数式编程 成为可能。
一、react
1.1 事件系统
1.2 表单
1.3 样式处理
1.4 组件通信
1.5 组件抽象
1.6 组件优化
1.7 动画
1.8 自动化测试


二、工程/项目架构
1.ssr
2.同构直出
3.父子组件通信
3.1 回调
3.2自定义事件
3.3订阅发布 node events模块单例模式
4.写 constructor 与不写的区别
5.无状态组件与有状态组件
7.性能优化
7.1数据缓存 
7.2页面缓存
7.3减少页面刷新次数 immutable.js
7.4 graphql
7.5 relay
8.网络请求 axios 
9.数据流 
9.1 redux  redux-saga
9.2 mobx
10.websocket  socket.io
11.数据库 
11.1 lowdb
11.2 realm
12.与硬件通信（x）
13.什么是mixin？mixin最大的问题 ?有什么解决方法
14.高阶函数
15.什么是decorator
16.react设计模式 详情看github仓库 《patten in react》
17.撤销/重做,复制/粘贴 时间旅行
18.并行安全（并行锁）
19.react与vue的区别
20.react全家桶
1.  UI库
21.1 antd 分页查询 数据源和分页 跳转页面
21.2 自定义主题
