import React from 'react';
import immutable from 'immutable';
import { connect } from 'react-redux';

import { reduxRequest } from '../../redux/actions/redux';

@connect(state => {
  return {
    reduxDemo: state.get('redux')
  }
}, {
  reduxRequest
})
class Immutable extends React.Component {
  state = {
    current:null
  }
  componentDidMount() {
    this.props.reduxRequest();
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('result------------>',immutable.is(this.props.reduxDemo, nextProps.reduxDemo));

    if(immutable.is(this.props.reduxDemo, nextProps.reduxDemo)){
      return false
    } else {
      return true;
    }
  }
  
  render(){
    console.log('Immutable---render---------->',this.props.reduxDemo.get('isFetching'));
    return(
      <div>
        {`Immutable---->${this.props.reduxDemo.get('isFetching')}`}
      </div>
    )
  }
}
export default Immutable;