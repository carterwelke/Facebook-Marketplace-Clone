import React from 'react';

import Dummy from './Dummy';
import LoginScreen from './Login';
import CreateUserScreen from './CreateUser';
import CategoryScreen from './Category';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
// import {AppBar} from '@mui/material';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <BrowserRouter>
      <ul className="navigation">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/CreateUser">Create Account</NavLink></li>
        <li><NavLink to="/Categories">Categories</NavLink></li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Dummy/>
        </Route>
        <Route path="/Login">
          <LoginScreen/>
        </Route>
        <Route path="/CreateUser">
          <CreateUserScreen/>
        </Route>
        <Route path="/Categories">
          <CategoryScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
