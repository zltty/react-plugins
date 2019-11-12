import React from 'react';

import Bar from '../common/Bar';

class Foo extends React.Component {
  render() {
    return (
      <div style={{ background:'red',height:40 }}>
        Foo<Bar/>
      </div> 
    )
  }
}

export default Foo;