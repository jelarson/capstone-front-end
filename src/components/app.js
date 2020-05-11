import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserProvider } from './context/context'
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
import AslQuizOne from './mastery/asl-quiz-one'
import AslQuizTwo from './mastery/asl-quiz-two'
import AslQuizThree from './mastery/asl-quiz-three'
import BrailleQuizOne from './mastery/braille-quiz-one'
import BrailleQuizTwo from './mastery/braille-quiz-two'
import BrailleQuizThree from './mastery/braille-quiz-three'
import CorrectAnswer from './mastery/correct-answer'
import WrongAnswer from './mastery/wrong-answer'
import Results from './mastery/results'

export default function App() {
  return (
    <div className="App">
      <UserProvider>


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
            <Route
              exact path='/asl-mastery/q1/:slug'
              component={AslQuizOne}
              />
            <Route
              exact path='/asl-mastery/q2/:slug'
              component={AslQuizTwo}
              />
            <Route
              exact path='/asl-mastery/q3/:slug'
              component={AslQuizThree}
              />
            <Route
              exact path='/braille-mastery/q1/:slug'
              component={BrailleQuizOne}
              />
            <Route
              exact path='/braille-mastery/q2/:slug'
              component={BrailleQuizTwo}
              />
            <Route
              exact path='/braille-mastery/q3/:slug'
              component={BrailleQuizThree}
              />
            <Route
              exact path='/correct/asl/q1/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/asl/q1/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/correct/asl/q2/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/asl/q2/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/correct/asl/q3/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/asl/q3/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/correct/braille/q1/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/braille/q1/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/correct/braille/q2/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/braille/q2/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/correct/braille/q3/:slug'
              component={CorrectAnswer}
              />
            <Route
              exact path='/wrong/braille/q3/:slug'
              component={WrongAnswer}
              />
            <Route
              exact path='/results/braille/:slug'
              component={Results}
              />
            <Route
              exact path='/results/asl/:slug'
              component={Results}
              />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </UserProvider>
    </div>
  );
}
