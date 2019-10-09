# constraint

基于redux 集成了redux-saga的封装

## 目录
```ts
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
import { Config, Root } from '@mitod/mitod-redux/src';

import Setup from './src/index';
import models from './src/model';

const store = Config({
  models,
  dev: __DEV__,
});

const App = () => {
  return (
    <Root store={store}>
      <Setup />
    </Root>
  );
};

export default App;
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
// 1. reducer 
dispatch({
  type:'aaaa.reducers/bbbb'
})
// 2. effect
dispatch({
  type:'aaaa.effects/bbbb'
})
// 3. 取消task
dispatch({
  type:'aaaa.effects/bbbb@@cancel'
})
```

## helper
```ts
const [xxState, loading] = (fn?) => useEffectsHelper(fn, 'xxState', 'action');

```