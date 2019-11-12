import React, { Component } from 'react';

// dynamic Import 
// 动态 imports() 语法目前是 ECMAScript (JavaScript) 提案 而不是语言标准。期待其在不远的将来被接纳成为标准的一部分。
class DynamicImport extends Component {
  state = {
    Foo: null
  };

  componentWillMount() {
    import('../../components/layout/Foo').then(Foo => {
      this.setState({ Foo: Foo.default });
    });
  }

  render() {
    console.log('Loading------->',this.props);
    let {Foo} = this.state;
    if (!Foo) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>动态路由页</h2>
          <Foo/>
        </div>
      );
    }
  }
}

export default DynamicImport;
