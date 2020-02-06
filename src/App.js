import React from 'react';

import './App.scss';

import ScrollPage from './components/main/ScrollPage';
import SearchPage from './components/main/SearchPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/main/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ScrollPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
