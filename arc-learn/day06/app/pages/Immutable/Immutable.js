import React from 'react';
import immutable from 'immutable';

class Immutable extends React.Component {
  state = {
    current:null
  }

  shouldComponentUpdate(nextProps,nextState){
    if(immutable.is(this.props.data, nextProps.data)){
      return false
    } else {
      return true;
    }
  }
  
  render(){
    console.log('接收数据组件---render---------->');
    return(
      <div>Immutable</div>
    )
  }
}
export default Immutable