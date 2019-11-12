import React from 'react';
import immutable from 'immutable';
import { connect } from 'react-redux';

import { reduxSuccess } from '../../redux/actions/redux';

@connect(state => ({
  reduxDemo: state.redux
}),{
  reduxSuccess
})
class Immutable extends React.Component {
  state = {
    current:null
  }
  componentDidMount() {
    this.props.reduxSuccess();
  }

  shouldComponentUpdate(nextProps,nextState){
    if(immutable.is(this.props.reduxDemo.result, nextProps.reduxDemo.result)){
      return false
    } else {
      return true;
    }
  }
  
  render(){
    console.log('Immutable---render---------->',this.props);
    return(
      <div>Immutable</div>
    )
  }
}
export default Immutable;