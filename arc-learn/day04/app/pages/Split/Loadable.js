import React from 'react';

// 解决import().then() 异步导入插件 的缺点不足  
// 1.import()失败的情况
// 2.服务端渲染
import Loadable from 'react-loadable';

function Loading(props) {
  if (props.error) { // 1. 组件加载异常
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) { // 2. 组件加载超时 默认10s
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) { // 3. 避免loading组件闪烁，默认组件加载时间300 
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const LoadableBar = Loadable({
  loader: () => import('../../components/layout/Foo'), // 这里可以是组件也可以是路由
  loading: Loading,
  // delay: 300, //默认加载时间,
  // timeout: 10000, // 10 seconds
});

class LoadablePage extends React.Component {
  render() {
    return <LoadableBar/>;
  }
}
export default LoadablePage;