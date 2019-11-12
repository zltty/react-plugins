import React, { Component } from 'react';

// 同步导入插件
import Foo from '../../components/layout/Foo'; 

class SyncImport extends Component {
  onClick = () => {
    console.log('点击事件------->', this.props);
  }
  render() {
    return (
      <div>
        <h2>SyncImport</h2>
        <hr />
        <Foo />
      </div>
    );
  }
}
export default SyncImport;