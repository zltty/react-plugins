import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import { homeRequest } from '../../redux/actions/home';
import styles from './index.css';

@connect(state => ({ 
  home: state.get('home')
}),{
  homeRequest
})
class Home extends React.Component {
  componentDidMount() {
    if(!this.props.home.get('retData')){
      console.log('home 请求数据---------->');
      // 请求数据
      this.props.homeRequest();
    }
  }
  
  render() {
    const retData = this.props.home.get('retData');
    const isFetching = this.props.home.get('isFetching');
    console.log('Home---render---------->',isFetching);

    return(
      <>
        <Helmet>
          <title>Home1</title>
        </Helmet>
        <h2 className={styles['Home']}>code-split</h2>
        <ul className="nav">
          <li><Link to="/immutable">immutable.js</Link></li>
        </ul>
        {
          retData && retData.data && retData.data.map((item,index)=>{
            console.log('item------>',item);
            return (
              <React.Fragment key={'item'+index}>
                <div>{`${item.name}: ${item.age}岁`}</div>
              </React.Fragment>
            )
          })
        }
      </>
    )
  }
}

export default Home;
