import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h2>code-split</h2>
        <ul className="nav">
          <li><Link to="/dynamicImport">动态路由</Link></li>
          <li><Link to="/loadable">react-loadable</Link></li>
          <li><Link to="/preloading">预加载</Link></li>
          <li><Link to="/syncImport">同步加载组件</Link></li>
          <li><Link to="/reactLazy">react-lazy</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
