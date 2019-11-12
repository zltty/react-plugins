1.单一数据源 
1.1 好处 服务端渲染 状态持久化，计时保存功能。
1.2 缺点 可能引来一个非常庞大的js对象 (有工具函数 combineReducers 解决)
2.状态只读
3. 核心api
3.1  一个store 。由createStore(reducer[,initialState])生成。必须传入reducers，第二个为可选。
3.2 修改数据 reducer。reducer(previousState, action )=>newState
在实际中 reducer在处理previousState，还需要非空判断。因为，第一次执行reducer时，没有任何previousState,所以需要定义好initialState
const initialState = {
toda: [],
}
根据作者的说法。redux来源于 reducer+ flux
3.3 getState
3.4 subscribe
3.5 dispatch 
3.6 redux-redux
3.6.1 Provider
3.6.2 connect
3.6.3 hot replace
4.middleware 借鉴了Koa middleware思想
4.1 middleware 机制
4.2 给middleweare 分发store
4.3 组合串联middleware
5.封装通用网络请求组件/中间件
5.1 轮询 setRafTimeout
5.2 多一步串联
5.3 websocket
5.4 redux-saga
6.路由
7.reducer的复用
如A B C 三个页面都有loading error
抽象一个函数生成
8.reducer的增强
redux-undo 
9.不同页面同步store

