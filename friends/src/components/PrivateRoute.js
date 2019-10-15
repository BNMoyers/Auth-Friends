//dependencies
import React from "react";
import { Route, Redirect } from "react-router-dom";

//components
import FriendsList from "./FriendsList";

const PrivateRoute = ({ component: FriendsList, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <FriendsList {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;

//check localStorage for a token, and redirect the user to the login route if there is not a token.
