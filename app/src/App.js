import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import './App.css';
import ChatContainer from './containers/ChatContainer';
import getAppTheme from './assets/themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={getAppTheme()}>
      <Box className="App">
        <ChatContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
