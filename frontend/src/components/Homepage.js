import React from 'react';
//  import ReactDOM from 'react-dom';
import {
  NavLink,
} from 'react-router-dom';
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

const fetchListings = (setListings, setError) => {
  const item = localStorage.getItem('user');
  if (!item) {
    return;
  }
  const user = JSON.parse(item);
  const bearerToken = user ? user.accessToken : '';
  fetch('/getAllListings', {
    method: 'get',
    headers: new Headers({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      setError('');
      setListings(json);
    })
    .catch((error) => {
      console.log(error);
      setListings([]);
      setError(`${error.status} - ${error.statusText}`);
    });
};

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Homepage() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = React.useState(user ? user.name : '');

  const [listings, setListings] = React.useState([]);
  const [error, setError] = React.useState('Logged Out');

  const logout = () => {
    localStorage.removeItem('user');
    setListings([]);
    setName('');
    setError('Logged Out');
  };

  React.useEffect(() => {
    fetchListings(setListings, setError);
  }, []);

  // console.log(listings);
  // console.log(error);

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
                {name ?
                  <div>
                    <label>
                      {name}
                    </label>
                    <button
                      disabled={!name}
                      onClick={logout}
                      aria-label='logout button'>
                        Logout
                    </button>
                  </div> :
                  <Button variant="contained">
                    <NavLink
                      aria-label='login button'
                      to="/Login">
                      Sign In
                    </NavLink>
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
              <NavLink
                aria-label='category button'
                to="/Categories">All Categories</NavLink>
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
        <Grid>
          <Grid item
            sx={{
              border: 1,
              borderRadius: '8px',
            }}>
            <div>{listings}</div>
            <div>{error}</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

/**
 * <table id='Listings'>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={book.isbn} id={'isbn'+book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
          <tr key={'error'}>
            <td colSpan={4}>{error}</td>
          </tr>
        </tbody>
      </table>
 */

export default Homepage;
