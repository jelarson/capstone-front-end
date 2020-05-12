import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'
// import AslQuizOne from '../mastery/asl-quiz-one'
// import AslQuizTwo from '../mastery/asl-quiz-two'
// import AslQuizThree from '../mastery/asl-quiz-three'
import './mastery.scss'



export default function AslMastery(props) {
  const [user, setUser] = useState({})
  const [width, setWidth] = useState(0)
  const [progress, setProgress] = useState(Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore))
  const [quizOneSlug, setQuizOneSlug] = useState()
  const [quizTwoSlug, setQuizTwoSlug] = useState()
  const [quizThreeSlug, setQuizThreeSlug] = useState()
  const [quizOneCount, setQuizOneCount] = useState(0)
  const [quizTwoCount, setQuizTwoCount] = useState(0)
  const [quizThreeCount, setQuizThreeCount] = useState(0)

  const styles = {
    backgroundColor: 'green',
    height: '100%',
    width: width + '%'
  }

  console.log('progress', user.testOneHighScore)
  console.log(String(Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore)))

  useEffect(() => {
    if(width < Math.round((Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore)) / 51 * 100)) {
      console.log('useeffect')
      let interval = setInterval(() => setWidth(width + .5), 5)
      return () => clearInterval(interval)
    }
  }, [quizOneSlug, width])

  useEffect(() => {
    axios.get('https://jel-user-capstone-api.herokuapp.com/user/4')
    .then(response => {
      console.log('user', response.data)
      setUser(response.data)
    })
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq1s')
    .then(response => {
      console.log('quiz one', response.data)
      console.log('quiz one', response.data[0].questionNum)
      setQuizOneSlug(response.data[quizOneCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq2s')
    .then(response => {
      console.log('quiz two', response.data)
      console.log('quiz two', response.data[0].questionNum)
      setQuizTwoSlug(response.data[quizTwoCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))
    axios.get('https://jel-quiz-capstone-api.herokuapp.com/aslq3s')
    .then(response => {
      console.log('quiz three', response.data)
      console.log('quiz three', response.data[0].questionNum)
      setQuizThreeSlug(response.data[quizThreeCount].questionNum)
    })
    .catch(err => console.log(err, 'err'))
  }, [])

  // console.log(progress)

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='mastery-page-content-wrapper'>
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
              Begginer Test High Score: {user.testOneHighScore} 
            </div>
            <div className='test-two-score score'>
              Intermediate Test High Score: {user.testTwoHighScore} 
            </div>
            <div className='test-three-score score'>
              Expert Test High Score: {user.testThreeHighScore} 
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
                {/* progress bar place holder */}
              </div>
              {/* <div className='percent-score'>
                {Math.round((Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore)) / 51 * 100)}%
              </div> */}
            </div>
            <div className='overall-score'>
              {Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore)}/51 Questions Completed
            </div>
          </div>
        </div>
        <div className='test-wrapper'>
          <div className='test-one test'>
            test 1 placeholder
            <Link to={{pathname:`/asl-mastery/q1/${quizOneSlug}`, state: {correct: 0}}} count={quizOneCount} className='test-one-link link'>Begin Test</Link>
          </div>
          <div className='test-two test'>
            test 2 placeholder
            <Link to={{pathname:`/asl-mastery/q2/${quizTwoSlug}`, state: {correct: 0}}} count={quizTwoCount} className='test-two-link link'>Begin Test</Link>
          </div>
          <div className='test-three test'>
            test 3 placeholder
            <Link to={{pathname:`/asl-mastery/q3/${quizThreeSlug}`, state: {correct: 0}}} count={quizThreeCount} className='test-three-link link'>Begin Test</Link>
          </div>
        </div>
    </div>
    {/* <button onClick={console.log('logged in user is: ', loggedInUser.name)}>button</button> */}
    </div>
  )
}