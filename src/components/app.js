import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './login/login'
import NewAccount from './new-account/new-account'
import LanguageChoice from './language-choice/language-choice'
import BraillePractice from './practice/braille-practice'
import AslPractice from './practice/asl-practice'
import AslTranslate from './translate/asl-translate'
import BrailleTranslate from './translate/braille-translate'
import BrailleMastery from './mastery/braille-mastery'
import AslMastery from './mastery/asl-mastery'
import NoMatch from './no-match/no-match'
import BrailleItem from './letter-item/braille-item'
import AslItem from './letter-item/asl-item'

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
            <Route exact path="/braille-translate" component={BrailleTranslate} />
            <Route exact path="/asl-translate" component={AslTranslate} />
            <Route exact path="/asl-mastery" component={AslMastery} />
            <Route exact path="/braille-mastery" component={BrailleMastery} />
            <Route
              exact path="/braille/:slug"
              component={BrailleItem}
            />
            <Route
              exact path="/asl/:slug"
              component={AslItem}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
