# constraint

基于redux 集成了redux-saga的封装

## TODO 
- [ ] constraint-loading 待完成

## 目录
```
src
- models (写法详见Models)
- - index.ts
- - xxxx.ts
- pages
- - app.tsx
- - xxx.tsx
- services
- - auth.ts
```

## 使用
```tsx
config = {
  // 初始化state
  initialState: {},
  models,
}
// 1.初始化
const app = constraint(config);
// 2. 异常捕获
app.onError( e =>{});
// 3. 扩展插件(基于redux的插件机制)
app.use(loading);
// 4. 启动
app.start((Provider: reduxProvider)=>{
  <Provider>
    ... 
  </Provider>
});
```

## Models
```ts
export default {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *loadStorage(action, { ...redux-saga }) {
      yield 'test';
    }
  }
};
```

## dispatch

```js
分两种
1. reducer 
dispatch({
  type:'aaaa.reducers/bbbb'
})
2. effect
dispatch({
  type:'aaaa.effects/bbbb'
})
```

## 内置插件
```js
redux-logger
...
```