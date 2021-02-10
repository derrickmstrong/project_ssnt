import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/views/Home';
import About from './components/views/About';
import FullMenu from './components/views/FullMenu';
import Order from './components/views/Order';
import Gallery from './components/views/Gallery';
import ThankYou from './components/views/ThankYou';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <main role='main' className='App'>
        <header>
          <Nav />
          <Switch>
            <Route path={'/thankyou'} component={ThankYou} />
            <Route path={'/gallery'} component={Gallery} />
            <Route path={'/order'} component={Order} />
            <Route path={'/full-menu'} component={FullMenu} />
            <Route path={'/about'} component={About} />
            <Route path={'/'} component={Home} />
          </Switch>
        </header>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
