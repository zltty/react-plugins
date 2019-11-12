import React, { Component } from 'react';

import Foo from '../../components/layout/Foo'; 

class Login extends Component {
  onClick = () => {
    console.log('点击事件------->', this.props);
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <hr />
        <Foo />
      </div>
    );
  }
}
export default Login;