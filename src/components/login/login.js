import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login(props) {
  const [visibility, setVisibility] = useState('hidden')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  function handleLoginSubmit(event) {
    event.preventDefault();
    axios.get('https://ejt-meme-maker-api.herokuapp.com/users')
      .then(response => {
        let profileArray = response.data
        profileArray.forEach(p => {
          if (loginEmail === p.email) {
            if (loginPassword === p.password) {
              setLoggedInUser(p)
              props.history.push('/')
            } else {
              console.log('failed')
              setVisibility('initial')
            }
          } else {
            console.log('not a match')
            setVisibility('initial')
          }
        })

      })
  }

  useEffect(() => {
    setVisibility('hidden')
  }, [loginPassword, loginEmail])

  return (
    <div className='login-page'>
      <div className='login-container'>
        {/* <img src={Logo} alt='Logo' /> */}
        <div className='login-container-content'>


          <div className='title'>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
          </div>

          <form className='login-form' onSubmit={handleLoginSubmit}>
            <div className='form-item'>
              <div className='email-title'>
                <h3>Email:</h3>
              </div>
              <input
                className='input-field'
                type="email"
                name="email"
                placeholder="Your email"
                value={loginEmail}
                onChange={({ target }) => { setLoginEmail(target.value) }}
              />
            </div>
            <div className='form-item'>
              <div className='password-title'>
                <h3>Password:</h3>
              </div>
              <input
                className='input-field'
                type="password"
                name="password"
                placeholder="Your password"
                value={loginPassword}
                onChange={({ target }) => { setLoginPassword(target.value) }}
              />
            </div>

            <div className='form-button-container'>
              <button type="submit" className='form-button'>LOGIN</button>
            </div>
            <div className='incorrect-message' style={{
              visibility: `${visibility}`
            }}>
              <h4>USERNAME OR PASSWORD IS INCORRECT</h4>
            </div>
            <div>
              <hr />
              <Link className='new-account-button-link' to='/new-account'
              >
                <div className='new-account-button'>
                  CREATE NEW ACCOUNT
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}