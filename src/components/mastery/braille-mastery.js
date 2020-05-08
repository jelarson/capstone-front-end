import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'
import './mastery.scss'
// import { UserContext } from '../../bootstrap'



export default function BrailleMastery(props) {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('https://jel-user-capstone-api.herokuapp.com/user/17')
    .then(response => {
      console.log(response.data)
      setUser(response.data)
    })
  }, [])

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='mastery-page-content-wrapper'>
        <div className='page-title'>
          Welcome {user.name}! Ready to master Braille?
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
            <div className="progress-bar-wrapper">
              <div className='progress-bar'>
                progress bar place holder
              </div>
              <div className='percent-score'>
                ph%
              </div>
            </div>
            <div className='overall-score'>
              {Number(user.testOneHighScore) + Number(user.testTwoHighScore) + Number(user.testThreeHighScore)}/51
            </div>
          </div>
        </div>
        <div className='test-wrapper'>
          <div className='test-one test'>
            test 1 placeholder
            <Link exact to='/braille' className='test-one-link link'>Begin Test</Link>
          </div>
          <div className='test-two test'>
            test 2 placeholder
            <Link exact to='/braille' className='test-two-link link'>Begin Test</Link>
          </div>
          <div className='test-three test'>
            test 3 placeholder
            <Link exact to='/braille' className='test-three-link link'>Begin Test</Link>
          </div>
        </div>
    </div>
    {/* <button onClick={console.log('logged in user is: ', loggedInUser.name)}>button</button> */}
    </div>
  )
}