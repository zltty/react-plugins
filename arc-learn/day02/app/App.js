import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App