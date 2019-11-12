## react-redux和react-router-redux有什么区别

react-redux
```
把react的state 集成到redux的store上，让redux来管理react组件的状态
```

react-router-redux
```
把react-router url的变化、参数等信息作为状态，交给redux的store管理，一般场景下直接使用react-router即可，因为url的这些状态比较独立，不一定非要交给redux来管理的。
```

react-router-redux 将react-router 和 redux 集成到一起，用redux的方式去操作react-router。
例如，react-router 中跳转需要调用 router.push(path)，集成了react-router-redux 就可以通过dispatch的方式使用router，例如跳转可以这样做 store.dispatch(push(url))。
本质上，是把react-router自己维护的状态，例如location、history、path等等，也交给redux管理。一般情况下，是没有必要使用这个库的。

**react-router-redux在react-router成为4.0后不需要了,且过时了，如果要使用那么使用connected-react-router**