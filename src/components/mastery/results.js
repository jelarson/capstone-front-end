import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import {UserContext} from '../context/context'
import './results.scss'

export default function Results(props){

  const [path, setPath] = useState('/asl-mastery')
  const [highScore, setHighScore] = useState('')
  const [score, setScore] = useState()
  const [user, setUser] = useState({})

  const { loggedInUser } = useContext(UserContext)

  console.log(loggedInUser)

  const data = props.location.state

  useEffect(() => {
    axios.get(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`)
    .then(response => {
      setUser(response.data)
    })
  }, [])

  useEffect(() => {
    console.log('user', user)
    // if (data.quizName === 'Braille Quiz One' || data.quizName === 'Braille Quiz Two' || data.quizName === 'Braille Quiz Three') {
    if (data.quizName === 'Braille Quiz One'){
      setPath('/braille-mastery')
      setScore(user.testOneHighScore)
      if (Number(user.testOneHighScore) > Number(data.correct)) {
        setHighScore(user.testOneHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(data.correct),
          testOnePassed: String(user.testOnePassed),
          testTwoHighScore: String(user.testTwoHighScore),
          testTwoPassed: String(user.testTwoPassed),
          testThreeHighScore: String(user.testThreeHighScore),
          testThreePassed: String(user.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'Braille Quiz Two'){
      setPath('/braille-mastery')
      setScore(user.testTwoHighScore)
      if (Number(user.testTwoHighScore) > Number(data.correct)) {
        setHighScore(user.testTwoHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(user.testOneHighScore),
          testOnePassed: String(user.testOnePassed),
          testTwoHighScore: String(data.correct),
          testTwoPassed: String(user.testTwoPassed),
          testThreeHighScore: String(user.testThreeHighScore),
          testThreePassed: String(user.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'Braille Quiz Three'){
      setPath('/braille-mastery')
      setScore(user.testThreeHighScore)
      if (Number(user.testThreeHighScore) > Number(data.correct)) {
        setHighScore(user.testThreeHighScore)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(user.testOneHighScore),
          testOnePassed: String(user.testOnePassed),
          testTwoHighScore: String(user.testTwoHighScore),
          testTwoPassed: String(user.testTwoPassed),
          testThreeHighScore: String(data.correct),
          testThreePassed: String(user.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz One'){
      setScore(user.testOnePassed)
      if (Number(user.testOnePassed) > Number(data.correct)) {
        setHighScore(user.testOnePassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(user.testOneHighScore),
          testOnePassed: String(data.correct),
          testTwoHighScore: String(user.testTwoHighScore),
          testTwoPassed: String(user.testTwoPassed),
          testThreeHighScore: String(user.testThreeHighScore),
          testThreePassed: String(user.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz Two'){
      setScore(user.testTwoPassed)
      if (Number(user.testTwoPassed) > Number(data.correct)) {
        setHighScore(user.testTwoPassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(user.testOneHighScore),
          testOnePassed: String(user.testOnePassed),
          testTwoHighScore: String(user.testTwoHighScore),
          testTwoPassed: String(data.correct),
          testThreeHighScore: String(user.testThreeHighScore),
          testThreePassed: String(user.testThreePassed)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
    if (data.quizName === 'ASL Quiz Three'){
      setScore(user.testThreePassed)
      if (Number(user.testThreePassed) > Number(data.correct)) {
        setHighScore(user.testThreePassed)
      } else {
        setHighScore(data.correct)
        axios.patch(`https://jel-user-capstone-api.herokuapp.com/user/${loggedInUser.id}`,
        {
          loggedIn: String(user.loggedIn),
          testOneHighScore: String(user.testOneHighScore),
          testOnePassed: String(user.testOnePassed),
          testTwoHighScore: String(user.testTwoHighScore),
          testTwoPassed: String(user.testTwoPassed),
          testThreeHighScore: String(user.testThreeHighScore),
          testThreePassed: String(data.correct)
        },
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
    }
  }, [user])


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