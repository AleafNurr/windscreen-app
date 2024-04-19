import { createTheme } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0'
    },
    secondary: { // Gray Offset
      light: '#C4C4C4',
      main: '#939393',
      dark: '#676767'
    },
    error: {
      main: '#AA4A44',
    },
  },
});

export default theme;