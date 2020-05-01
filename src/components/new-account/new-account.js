import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function NewAccount(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visibileStyle, setVisibleStyle] = useState('hidden')

  function handleNewAccountSubmit(event) {
    event.preventDefault();
    if (name === '' || email === '' || password === '') {
      setVisibleStyle('initial')
    } else {

      axios
        .post(
          'https://ejt-meme-maker-api.herokuapp.com/user',
          {
            email: email,
            name: name,
            password: password,
            role: 'user'
          },
        )
        .then(response => {
          console.log('Account Created')
        })
        .catch(error => {
          console.log('error')

        });
      props.history.push('/login')
    }
  }

  useEffect(() => {
    setVisibleStyle('hidden')
  }, [name, email, password])

  return (
    <div className='new-account-page'>
      <div className='new-account-container'>
        {/* <img src={Logo} alt='Logo' /> */}
        <div className='new-account-container-content'>


          <div className='title'>
            <h1>CREATE NEW ACCOUNT</h1>
          </div>

          <form className='new-account-form' onSubmit={handleNewAccountSubmit}>
            <div className='form-item'>
              <div className='name-title'>
                <h3>Name:</h3>
              </div>
              <input
                className='input-field'
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={({ target }) => { setName(target.value) }}
              />
            </div>
            <div className='form-item'>
              <div className='email-title'>
                <h3>Email:</h3>
              </div>
              <input
                className='input-field'
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={({ target }) => { setEmail(target.value) }}
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
                value={password}
                onChange={({ target }) => { setPassword(target.value) }}
              />
            </div>
            <div className='incorrect-message' style={{
              visibility: `${visibileStyle}`
            }}>
              <h3>Please fill in all fields</h3>
            </div>

            <div className='form-button-container'>
              <button type="submit" className='form-button'>CREATE NEW ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}