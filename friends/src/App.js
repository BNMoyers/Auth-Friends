//dependencies
import React from 'react';

//components
import './App.css';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
//need a route to the login page
//protected route to the friendslist component that redirects to login if not authed