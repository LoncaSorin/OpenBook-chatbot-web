import { createTheme } from '@mui/material/styles';

import palette from './palletes/defaultPalette';

const getAppTheme = () => {
  const theme = createTheme({
    palette,
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });

  return {
    ...theme,
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            color: palette.text.primary,
            backgroundColor: palette.secondary.main,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            paddingTop: '8.5px',
            paddingBottom: '8.5px',
          },
          inputMarginDense: {
            paddingTop: '8.5px',
            paddingBottom: '8.5px',
          },
          notchedOutline: {
            '&:hover': {
              borderColor: palette.border.main,
            },
          },
        },
      },
    },
  };
};

export default getAppTheme;
