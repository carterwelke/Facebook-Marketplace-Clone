import React from 'react';

import Dummy from './Dummy';
import ButtonAppBar from './Login';
// import {AppBar} from '@mui/material';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <div>
      <ButtonAppBar/>
      <Dummy />
    </div>
  );
}

export default App;
