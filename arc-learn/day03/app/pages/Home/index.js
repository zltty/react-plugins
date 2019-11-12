import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.css';

class Home extends Component {
  onClick = () => {
    console.log('点击事件------->', this.props);
  }
  render() {
    return (
      <div className={styles.Home}> 
        <h2>Home</h2>
        <hr />
        <Link to="/about">
          <button >登录</button>
        </Link>
        <hr />
      </div>
    );
  }
}

export default Home;
