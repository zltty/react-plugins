import React from 'react';
import { connect } from 'react-redux';

import { reduxSuccess } from '../../redux/actions/redux';

@connect(state => ({
  reduxDemo: state.redux
}),{
  reduxSuccess
})
class ReduxDemo extends React.Component {
  state = {
    current:null
  }
  componentDidMount() {
    this.props.reduxSuccess();
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props.reduxDemo.result !== nextProps.reduxDemo.result){
      return false
    } else {
      return true;
    }
  }
  
  render(){
    console.log('redux---render---------->',this.props);
    return(
      <div>redux</div>
    )
  }
}
export default ReduxDemo;