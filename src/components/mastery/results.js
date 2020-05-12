import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import {UserContext} from '../context/context'
import './results.scss'

export default function Results(props){

  const [path, setPath] = useState('/asl-mastery')
  const [highScore, setHighScore] = useState('')
  const [score, setScore] = useState()

  const { loggedInUser } = useContext(UserContext)

  console.log(loggedInUser)

  const data = props.location.state

  useEffect(() => {
    // if (data.quizName === 'Braille Quiz One' || data.quizName === 'Braille Quiz Two' || data.quizName === 'Braille Quiz Three') {
    if (data.quizName === 'Braille Quiz One'){
      setPath('/braille-mastery')
      setScore(loggedInUser.testOneHighScore)
      if (Number(loggedInUser.testOneHighScore) > Number(data.correct)) {
        setHighScore(loggedInUser.testOneHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(data.correct),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(loggedInUser.testTwoHighScore),
          testTwoPassed: String(loggedInUser.testTwoPassed),
          testThreeHighScore: String(loggedInUser.testThreeHighScore),
          testThreePassed: String(loggedInUser.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'Braille Quiz Two'){
      setPath('/braille-mastery')
      setScore(loggedInUser.testTwoHighScore)
      if (Number(loggedInUser.testTwoHighScore) > Number(data.correct)) {
        setHighScore(loggedInUser.testTwoHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(loggedInUser.testOneHighScore),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(data.correct),
          testTwoPassed: String(loggedInUser.testTwoPassed),
          testThreeHighScore: String(loggedInUser.testThreeHighScore),
          testThreePassed: String(loggedInUser.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'Braille Quiz Three'){
      setPath('/braille-mastery')
      setScore(loggedInUser.testThreeHighScore)
      if (Number(loggedInUser.testThreeHighScore) > Number(data.correct)) {
        setHighScore(loggedInUser.testThreeHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(loggedInUser.testOneHighScore),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(loggedInUser.testTwoHighScore),
          testTwoPassed: String(loggedInUser.testTwoPassed),
          testThreeHighScore: String(data.correct),
          testThreePassed: String(loggedInUser.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz One'){
      setScore(loggedInUser.testOnePassed)
      if (Number(loggedInUser.testOnePassed) > Number(data.correct)) {
        setHighScore(loggedInUser.testOnePassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(data.correct),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(loggedInUser.testTwoHighScore),
          testTwoPassed: String(loggedInUser.testTwoPassed),
          testThreeHighScore: String(loggedInUser.testThreeHighScore),
          testThreePassed: String(loggedInUser.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz Two'){
      setScore(loggedInUser.testTwoPassed)
      if (Number(loggedInUser.testTwoPassed) > Number(data.correct)) {
        setHighScore(loggedInUser.testTwoPassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(loggedInUser.testOneHighScore),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(loggedInUser.testTwoHighScore),
          testTwoPassed: String(data.correct),
          testThreeHighScore: String(loggedInUser.testThreeHighScore),
          testThreePassed: String(loggedInUser.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz Three'){
      setScore(loggedInUser.testThreePassed)
      if (Number(loggedInUser.testThreePassed) > Number(data.correct)) {
        setHighScore(loggedInUser.testThreePassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(loggedInUser.loggedIn),
          testOneHighScore: String(loggedInUser.testOneHighScore),
          testOnePassed: String(loggedInUser.testOnePassed),
          testTwoHighScore: String(loggedInUser.testTwoHighScore),
          testTwoPassed: String(loggedInUser.testTwoPassed),
          testThreeHighScore: String(loggedInUser.testThreeHighScore),
          testThreePassed: String(data.correct)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
  }, [])


  return(
    <div className='results-page-wrapper'>
      <div className='quiz-title'>
        {data.quizName}
      </div>
      <div className='score-results-wrapper'>
        <div className='current-score-wrapper score-column'>
          <div className='column-title'>
            Previous High Score
          </div>
          <div className='column-score'>
            {score} / {data.quizLength}
          </div>
        </div>
        <div className='new-score-wrapper score-column'>
        <div className='column-title'>
            Current Score
          </div>
          <div className='column-score'>
            {data.correct} / {data.quizLength}
          </div>
        </div>
        <div className='kept-score-wrapper score-column'>
        <div className='column-title'>
            Kept High Score
          </div>
          <div className='column-score'>
            {highScore} / {data.quizLength}
          </div>
        </div>
      {/* Your score was {data.correct} out of {data.quizLength} */}
      </div>
      <div className='return-button-wrapper'>
        <Link to={path} className='return-button'>Return to Mastery</Link>      
      </div>
    </div>
  )
}