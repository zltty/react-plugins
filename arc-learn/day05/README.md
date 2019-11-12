## 进度
- [x] 手动搭建react
- [x] react-router4（路由）
- [x] react-router-config（静态路由配置）
- [x] react-loadable（代码分离）

## 代码分离
基于路由的代码分离

```js
const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
```