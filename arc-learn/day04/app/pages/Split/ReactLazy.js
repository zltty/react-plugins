import React, { Component } from 'react';
import ErrorBoundary from '../../components/common/ErrorBoundary';

const OtherComponent = React.lazy(() => import('../../components/layout/Foo'));

// v16.6 特性 lazy Suspense 基本上可以代替react-loadable
// React.lazy 和 Suspense 技术还不支持服务端渲染。
// 如果你想要在使用服务端渲染的应用中使用，我们推荐 Loadable Components 这个库。它有一个很棒的服务端渲染打包指南。
// https://github.com/smooth-code/loadable-components/blob/master/packages/server/README.md
class ReactLazy extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

export default ReactLazy;