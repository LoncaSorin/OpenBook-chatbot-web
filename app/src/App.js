import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import './App.css';
import ChatContainer from './containers/ChatContainer';
import getAppTheme from './assets/themes/defaultTheme';
import ArtefactDialogContainer from './containers/ArtefactDialogContainer';

function App() {
  return (
    <ThemeProvider theme={getAppTheme()}>
      <Box className="App">
        <ArtefactDialogContainer />
        <ChatContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
