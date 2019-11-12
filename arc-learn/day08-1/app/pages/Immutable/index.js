import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import immutable from 'immutable';

import logo from '../../assets/images/logo.svg';
import { immutableRequest } from '../../redux/actions/immutable';
import styles from './index.css';

@connect(state => ({
  immutable: state.get('immutable')
}), {
  immutableRequest
})
class ImmutablePage extends React.Component {
  state = {
    current:null
  }
  componentDidMount() {
    console.log('---------immutable,',this.props.immutable.get('retData'));

    if(!this.props.immutable.get('retData')){
      console.log('immutable 请求数据---------->');
      // 请求数据
      this.props.immutableRequest();
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('this.props.immutable------->',this.props.immutable);
    console.log('nextProps.immutable------->',nextProps.immutable);

    return !immutable.is(this.props.immutable, nextProps.immutable);
  }
  
  render(){
    const isFetching = this.props.immutable.get('isFetching');
    console.log('Immutable---render---------->',isFetching);
    return(
      <>
        <Helmet>
          <title>Immutable</title>
        </Helmet>
        <h2 className={styles['Home']}>Immutable</h2>
        <img src={logo} className={styles['Immutable-logo']} alt="logo" />
        <Link to="/">返回</Link>
        <div onClick={ ()=>{ this.props.history.goBack()}} >返回二</div>
        {`Immutable---->${isFetching}`}
      </>
    )
  }
}
export default ImmutablePage;