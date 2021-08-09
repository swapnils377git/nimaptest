import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/SIgnin';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
