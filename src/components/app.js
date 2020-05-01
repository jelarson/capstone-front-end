import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './login/login'
import NewAccount from './new-account/new-account'
import LanguageChoice from './language-choice/language-choice'
import BraillePractice from './practice/braille-practice'
import AslPractice from './practice/asl-practice'

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className='app-wrapper'>
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/" component={LanguageChoice} />
            <Route exact path="/asl" component={AslPractice} />
            <Route exact path="/braille" component={BraillePractice} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
