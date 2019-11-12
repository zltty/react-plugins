## portals (传送门)
```js
// 把节点当前节点传送至目标节点
class Creater extends Component {
  render(){
    return (
      <div onClick={() => 
        alert("clicked!")
      }>
        <Portal>
          <img src={myImg} />
        </Portal>
      </div>
    ); 
  }
}
class Portal extends Component {
  render(){
    const node = getDOMNode();
    return createPortal(
      this.props.children,
      node 
    ); 
  }
}
// 通过 把里面的  内容渲染到了一个独立的节点上。在实际的 DOM 结构中，img 已经脱离了 Creater 本身的 DOM 树存在于另一个独立节点。但当点击 img 时，仍然可以神奇的触发到 Creater 内的 div 上的 onclick 事件
```

## v16.2 因此出了个新组建Fragment
```js
render() {
  return (
    <React.Fragment>
      注：        
      <p>产品说明一</p>
      <p>产品说明二</p>
    </React.Fragment>
  );
}

```
或者简写
```js
render() {
  return (
    <>
      注：
      <p>产品说明一</p>
      <p>产品说明二</p>
    </>
  );
}
```
上面解决了顶层嵌套，但是因为是数组，要写key，又比较麻烦。
唯一无法避免用到key的时候是 遍历的时候
```js
{
  map(item => (
    <Fragment key={item.id}>
    </Fragment>
  ))
}
```