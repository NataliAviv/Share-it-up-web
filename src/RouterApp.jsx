import React from 'react';

import Login from './Screens/Login/Login';
import Profile from './Screens/Profile/Profile';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const RouterApp=()=>{
    return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
  
          <hr />

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          
          </Switch>
        </div>
      </Router>
    )
}

export default RouterApp;