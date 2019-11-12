## 进度
- [x] 手动搭建react
- [x] react-router4（路由）
- [x] react-router-config（静态路由配置）
- [x] React.lazy（代码分离）
- [x] immutable(不可变数据)

## immutablejs

有点  
- Immutable 降低了 Mutable 带来的复杂度
- 节省内存
- Undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟
- 并发安全(目前没什么用)
- 拥抱函数式编程
```
像 ClojureScript，Elm 等函数式编程语言中的数据类型天生都是 Immutable 的，这也是为什么 ClojureScript 基于 React 的框架 --- Om 性能比 React 还要好的原因。
```
**注意:在react中使用可以用来减少页面重复渲染。需要搭配shouldUpdateComponent**

