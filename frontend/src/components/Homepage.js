import React from 'react';
//  import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import {
  Toolbar, AppBar, Typography,
  Button, Grid, Fab, Box, InputBase,
} from '@mui/material';
import {
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
    bgcolor: 'background.paper',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
}));

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Homepage() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = React.useState(user ? user.name : '');

  const logout = () => {
    localStorage.removeItem('user');
    setName('');
  };

  return (
    <div>
      <Box className={classes.box}
        sx={{
          position: 'sticky',
          p: 2,
          m: 2,
        }}
      >
        <AppBar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6">
                  Facebook
                </Typography>
              </Grid>
              <Grid item>
                {name ? <label>
                  {name}
                  <button disabled={!name} onClick={logout}>
                    Logout
                  </button>
                </label> :
                  <Button variant="contained">
                    <NavLink to="/Login">Login</NavLink>
                  </Button>
                }
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        className={classes.box}
        sx={{
          position: 'absolute',
          p: 2,
          m: -2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs="auto">
            <Fab variant="extended">Sell</Fab>
          </Grid>
          <Grid item xs="auto">
            <Fab variant="extended">
              <NavLink to="/Categories">All Categories</NavLink>
            </Fab>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.box}
        sx={{
          position: 'absolute',
          left: '-55px',
          p: 4,
          m: 4,
        }}
      >
        <Grid>
          <Grid item
            sx={{
              border: 1,
              borderRadius: '8px',
            }}>
            <div className={classes.search}>
              <SearchIcon />
              <InputBase placeholder=" Search" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;