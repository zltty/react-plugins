import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h2>code-split</h2>
        <ul className="nav">
          <li><Link to="/reduxDemo">reduxDemo</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
