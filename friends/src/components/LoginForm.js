import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('api/login', credentials)
      .then(res => { 
          localStorage.setItem('token', res.data.payload);
          props.history.push('/friends')
      })
        .catch(err => console.log(err.response))
  }
  
  return(

  localStorage.getItem('token') ? (
      <Redirect to='/friends' />
    
  ): (
    <div>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
      </div>
  ))
  }

export default LoginForm;
