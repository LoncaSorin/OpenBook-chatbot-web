import React from 'react';
import { Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppData from './AppData';

function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <AppData />
        <ToastContainer
          position="top-right"
          autoClose={700}
          closeOnClick
          pauseOnHover
          hideProgressBar
          theme="light"
        />
      </Box>
    </BrowserRouter>
  );
}

export default App;
