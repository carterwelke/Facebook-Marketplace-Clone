import React from 'react';
import Homepage from './Homepage';
//  import Login from './Login';
//  import Dummy from './Dummy';
import LoginScreen from './Login';
import CreateUserScreen from './CreateUser';
import CategoryScreen from './Category';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

//  import Dummy from './Dummy';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    /*
    <BrowserRouter>
      <Dummy />
      <ul className="navigation">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/CreateUser">Create Account</NavLink></li>
        <li><NavLink to="/Categories">Categories</NavLink></li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/Login">
          <LoginScreen />
        </Route>
        <Route path="/CreateUser">
          <CreateUserScreen />
        </Route>
        <Route path="/Categories">
          <CategoryScreen />
        </Route>
      </Switch>
    </BrowserRouter>
    */
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Homepage} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/categories' component={CategoryScreen} />
        <Route path='/new-user' component={CreateUserScreen} />
        <Redirect to='/home' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
