import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">My Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App