## 背景
- 在组件之间复用状态逻辑很难 (renderProps、hoc 产生嵌套地狱)
- 复杂组件变得难以理解
- 难以理解的 class


## 使用规则

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）
- eslint-plugin-react-hooks

## useState
可以多次使用
```js
useState(设置默认参数)
// 声明一个新的叫做 “count” 的 state 变量
const [count, setCount] = useState(1);
// count ----> 默认是0
```

## useEffect
可以多次使用
```js
useEffect(fn,array of state) // 第二参数更改才执行
useEffect(()=> {
  // 函数内部相当于 componentDidMount 和 componentDidUpdate
  // return 返回值 相当于 componentWillUnmount
},[ count,name ]);

```
## useContext
不使用组件嵌套就可以订阅 React 的 Context
```js
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```
## useReducer
通过 reducer 来管理组件本地的复杂 state (可以不再使用redux)
```js
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

## 自定义hook

- 传统方案(render-props HOC)
- hooks
