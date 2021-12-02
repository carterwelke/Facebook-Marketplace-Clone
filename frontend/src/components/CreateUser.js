import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// import {useHistory} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


/**
 * Login authentication from authenticated books example
 *
 * @return {object} JSX
 */
function CreateUser() {
  // const [user, setUser] = React.useState({email: '', password: ''});
  // const history = useHistory();

  /* const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const onSubmit = (event) => {
    /* event.preventDefault();
    fetch('/createUser', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        localStorage.setItem('user', JSON.stringify(json));
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Error signing up, please try again');
      });
  }; */

  return (
    <form /* onSubmit={onSubmit}*/>
      <input
        type="email"
        name="email"
        placeholder="Email"
        // onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        // onChange={handleInputChange}
        required
      />
      <input type="submit" value="Create"/>
    </form>
  );
}

/**
 * Simple appbar with login button
 * based on: https://codesandbox.io/s/qm6e1?file=/demo.js
 *
 * @return {object} JSX
 */
export default function CreateUserScreen() {
  return (
    <Box sx={{flexGrow: 1}}>
      Create Account Here
      <CreateUser/>
      <NavLink exact to="/login">Back  </NavLink>
    </Box>
  );
}
