import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import * as routes from './constants/clientRoutes';
import getAppTheme from './assets/themes/defaultTheme';
import ArtefactDialogContainer from './containers/ArtefactDialogContainer';
import ChatContainer from './containers/ChatContainer';

export default function AppData() {
  return (
    <ThemeProvider theme={getAppTheme()}>
      <Routes>
        <Route
          path={routes.HOME_ROUTE}
          element={(
            <>
              <ArtefactDialogContainer />
              <ChatContainer />
            </>
          )}
        />
      </Routes>
    </ThemeProvider>
  );
}
