import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'

import './mastery.scss'
import {UserContext} from '../context/context'


export default function AslMastery(props) {
  const [user, setUser] = useState({})
  const [width, setWidth] = useState(0)
  const [progress, setProgress] = useState(Number(user.testOnePassed) + Number(user.testTwoPassed) + Number(user.testThreePassed))
  const [quizOneSlug, setQuizOneSlug] = useState()
  const [quizTwoSlug, setQuizTwoSlug] = useState()
  const [quizThreeSlug, setQuizThreeSlug] = useState()
  const [quizOneCount, setQuizOneCount] = useState(0)
  const [quizTwoCount, setQuizTwoCount] = useState(0)
  const [quizThreeCount, setQuizThreeCount] = useState(0)
  const [contentClass, setContentClass] = useState('mastery-page-content-wrapper')
  const [linkClass, setLinkClass] = useState('login-link-none')

  const { loggedInUser } = useContext(UserContext)

  console.log('logged in user', loggedInUser)

  const styles = {
    backgroundColor: 'green',
    height: '100%',
    width: width + '%'
  }


  useEffect(() => {
    if(width < Math.round((Number(user.testOnePassed) + Number(user.testTwoPassed) + Number(user.testThreePassed)) / 64 * 100)) {
      let interval = setInterval(() => setWidth(width + .5), 5)
      return () => clearInterval(interval)
    }
  }, [quizOneSlug, width])

  useEffect(() => {
    axios.get(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`)
    .then(response => {
      setUser(response.data)
    })
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq1s')
    .then(response => {
      setQuizOneSlug(response.data[quizOneCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq2s')
    .then(response => {
      setQuizTwoSlug(response.data[quizTwoCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq3s')
    .then(response => {
      setQuizThreeSlug(response.data[quizThreeCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))

  }, [])

  useEffect(() => {
    if (loggedInUser. name === 'hello from context') {
      setContentClass('mastery-page-content-wrapper-none')
      setLinkClass('login-link')
    }
  }, [])

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className={contentClass}>
        <div className='page-title'>
          Welcome {user.name}! Ready to master ASL?
        </div>
        <div className='profile-bar'>
          <div className='name'>
            {user.name}
          </div>
          <div className='scores'>
            <div className='scores-title'>
              Scores
            </div>
            <div className='scores-wrapper'>

            <div className='test-one-score score'>
              Begginer Test High Score: {user.testOnePassed} / 10
            </div>
            <div className='test-two-score score'>
              Intermediate Test High Score: {user.testTwoPassed} / 18
            </div>
            <div className='test-three-score score'>
              Expert Test High Score: {user.testThreePassed} / 36
            </div>
            </div>
          </div>
          <div className='progress-bar-content-wrapper'>
            <div className='progress-title'>
              Overall Progress
            </div>
            <div className="progress-bar-wrapper">
              <div className='progress-bar'>
                <div style={styles} className='loading-bar'>
                  <span className='progress-percent'>{width.toFixed(0)}%</span>
                </div>
              </div>
            </div>
            <div className='overall-score'>
              {Number(user.testOnePassed) + Number(user.testTwoPassed) + Number(user.testThreePassed)}/64 Questions Completed
            </div>
          </div>
        </div>
        <div className='test-wrapper'>
          <div className='test-one test'>
          <div className='test-title'>
          Begginer Test<br/>Difficulty: Easy
            </div>
            <Link to={{pathname:`/asl-mastery/q1/${quizOneSlug}`, state: {correct: 0}}} count={quizOneCount} className='test-one-link link'>Begin Test</Link>
          </div>
          <div className='test-two test'>
          <div className='test-title'>
          Intermediate Test<br/>Difficulty: Hard
            </div>
            <Link to={{pathname:`/asl-mastery/q2/${quizTwoSlug}`, state: {correct: 0}}} count={quizTwoCount} className='test-two-link link'>Begin Test</Link>
          </div>
          <div className='test-three test'>
            <div className='test-title'>
          Expert Test<br/>Difficulty: Insane
            </div>
            <Link to={{pathname:`/asl-mastery/q3/${quizThreeSlug}`, state: {correct: 0}}} count={quizThreeCount} className='test-three-link link'>Begin Test</Link>
          </div>
        </div>
        <div>
      <Link to='/login' className='logout-link'>Logout</Link>
    </div>
    </div>
    <div className={linkClass}>
      <div className='link-instructions'>
        Please Login to Access Mastery Tests
      </div>
      <Link to='/login' className='login-link-button'>Login</Link>
    </div>
    </div>
  )
}