# 16.1

## Ref API

```js
constructor(props) {
  super(props);
  this.input = React.createRef();
}
componentDidMount() {
  console.log(this.input);
}
render() {
  return <input ref={this.input} />;
}
```
新版本推出了 CreateRef API 来创建一个 ref object, 传递到 component 的 ref 上之后可以直接获得引用

另外还提供了 ForwardRef API 来辅助简化嵌套组件、component 至 element 间的 ref 传递，避免出现 this.ref.ref.ref 的问题。
```js
class MyButton extends Component {
  constructor(props){
    super(props);
    this.buttonRef = React.createRef();
  }
  render(){
    return (
      <button ref={this.buttonRef}>
        {props.children}
      </button>
    );
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
  componentDidComponent{
    // 通过ref一层层访问
    console.log(this.myRef.buttonRef);
  }
  render(){
    return (
      <MyButton ref={this.myRef}>
        Press here
      </MyButton>
    );
  }
}
```
这种场景使用 forwardRef API 的方式做一个“穿透”，就能简便许多:
```js
import { createRef, forwardRef } from "react";
const MyButton = forwardRef((props, ref) => (
  <button ref={ref}>
    {props.children}
  </button>
));
class App extends Component {
  constructor(props){
    super(props);
    this.realButton = createRef();
  }
  componentDidComponent{
    //直接拿到 inner element ref
    console.log(this.realButton);
  }
  render(){
    return (
    <MyButton ref={this.realButton}>
      Press here
    </MyButton>
    );
  }
}
```

## Context

使用 Context API 可以更方便的在组件中传递和共享某些 "全局" 数据，这是为了解决以往组件间共享公共数据需要通过多余的 props 进行层层传递的问题 (props drilling)。
```js
const LangContext = React.createContext({
  title:"默认标题"
});
```
static contextType
```
...
```

## better server-side rendering
新增流式渲染
renderToNodeStream()
renderToStaticNodeStream()

## 记忆函数
React.memo()
是能作用在简单的函数组件，类似于React.PureComponent对于class组件的作用。它本质上是一个高阶函数，达到的效果就是，自动帮组件执行shouldComponentUpdate() , 但是只是执行浅比较
这个高阶函数存在是作为一种性能优化的方式。不要使用它去纯粹地阻止渲染，否则可能会导致出现bug。---- React官网

## 严格模式 StrictMode

## react hooks
