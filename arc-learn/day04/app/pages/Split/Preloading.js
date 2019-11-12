import React from 'react';

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
  loader: () => import('../../components/layout/Foo'),
  loading: Loading,
  // delay: 300, //默认加载时间,
  // timeout: 10000, // 10 seconds
});

class Preloading extends React.Component {
  state = { showBar: false };

  onClick = () => {
    this.setState({ showBar: true });
  };

  onMouseOver = () => {
    console.log('预加载');
    LoadableBar.preload();//4. 预加载
  };

  render() {
    return (
      <div>
        <button
          onClick={this.onClick}
          onMouseOver={this.onMouseOver}>
          Show Bar
        </button>
        {this.state.showBar && <LoadableBar/>}
      </div>
    )
  }
}
export default Preloading;