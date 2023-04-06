import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import Header from './components/layout/Header/Header';
import HomeSlider from './screens/HomeSlider';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <HomeSlider />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
