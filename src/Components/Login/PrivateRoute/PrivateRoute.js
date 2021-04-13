import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if(!token){
          return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
      }
    
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
            (loggedInUser.email || isLoggedIn()) ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        </div>
    );
};

export default PrivateRoute;