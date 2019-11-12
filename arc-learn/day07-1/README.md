## 进度
- [x] 手动搭建react
- [x] react-router4（路由）
- [x] react-router-config（静态路由配置）
- [x] React.lazy（代码分离）
- [x] immutable(不可变数据)
- [x] redux + react-redux
- [x] redux-saga
- [x] redux-immutable

## redux-saga
saga基本操作

## 中间件redux-immutable
redux-immutable 自动转换不可变数据

## immutable 

Immutable.merge  Immutable.set 的区别
```js 
merge 可以处理多个值
merge({
  a,
  b
})
set 单个值
set('a',a)
```

## 基本使用
reducer
```js
如果使用一个嵌套的数组或对象创建 Immutable 对象的话，只有最外面一层是 immutable 的，例如：

var initState = Immutable.Map({
  list: [1,2,3],
  obj: {a: 1, b: 2}
})
这样创建的对象只有最外层是不可变的，即使用 initState.get('list') 获取到的内容仍然只是一个普通数组，并不是不可变数据。
要想让所有内容都是不可变的就得麻烦一点：

var initState = Immutable.Map({
  list: Immutable.List([1,2,3]),
  obj: Immutable.Map({a: 1, b: 2})
})

注意: Map、List、fromJS 只要嵌套都需要
```

互相转换
```js
toJS
toObject
```
