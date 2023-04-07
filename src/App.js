import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Screen1 from './screens/Screen1/Screen1';
import Screen2 from './screens/Screen2/Screen2';
import Screen3 from './screens/Screen3/Screen3';
import Screen4 from './screens/Screen4/Screen4';
import Screen5 from './screens/Screen5/Screen5';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="screen1">
        <Screen1 />
      </Element>
      <Element name="screen2">
        <Screen2 />
      </Element>
      <Element name="screen3">
        <Screen3 />
      </Element>
      <Element name="screen4">
        <Screen4 />
      </Element>
      <Element name="screen5">
        <Screen5 />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
