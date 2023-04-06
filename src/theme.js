import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // 밑줄 없애기
        },
      },
    },
  },

  palette: {
    // 프로젝트에서 공통적으로 사용할 색상을 설정할 수 있습니다.
    primary: {
      main: '#14054E',
      secondary: '#0000007a',
    },
    secondary: {
      main: '#B7E703',
    },
    background: {
      main: '#fff',
      secondary: '#14054E',
    },

    text: {
      //기본 텍스트 색상을 설정할 수 있습니다.
      primary: '#000',
      secondary: '#0000007a',
      badge: '#fff',
    },
  },

  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    // Global font size
    fontSize: 16,
    h1: {
      fontSize: '4.25rem',
    },
    h2: {
      fontSize: '3.875rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2rem',
    },
    badge: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
