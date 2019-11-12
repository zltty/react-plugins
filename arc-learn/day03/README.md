## 进度
- [x] 手动搭建react
- [x] react-router4（路由）
- [x] react-router-config（静态路由配置）

## react-rotuer-config 

嵌套路由
```js
{
  component: Root,
  routes: [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/child/:id",
      component: Child,
      // 注意第一层路由需要与父级保持，如下 开头都是child
      routes: [ 
        {
          path: "/child/:id/grand-child",
          component: GrandChild
        }
      ]
    }
  ]
}
```