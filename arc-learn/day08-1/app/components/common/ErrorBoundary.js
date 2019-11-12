import React from 'react';
// 错误边界无法捕获以下场景中产生的错误：

// 事件处理（了解更多）
// 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
// 服务端渲染
// 它自身抛出来的错误（并非它的子组件）
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('error--getDerivedStateFromError------->',error.message);
    return { hasError: error.message };
  }

  componentDidCatch(error, info) {
    console.log('error-componentDidCatch-------->',error);
    console.log('info-componentDidCatch--------->',info.componentStack);
    // 上报异常
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.err(this.state.hasError)
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;