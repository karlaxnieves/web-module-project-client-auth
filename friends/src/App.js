import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends'


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          {localStorage.getItem("token") && <Link to="/protected">Protected Page</Link>}
        </li>
      </ul>

      <Switch>
        <Route path="/friends" components={Friends} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
