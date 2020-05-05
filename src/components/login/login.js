import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import './login.scss'

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
    <div className='login-container'>
      {/* <img src={Logo} alt='Logo' /> */}
      <div className='login-image' style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/t/escola-de-protuber%C3%A2ncia-tocantes-do-livro-cego-doente-braile-da-leitura-crian%C3%A7a-113604556.jpg)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/two-women-speak-sign-language-girls-talk-language-hearing-impaired-people-deaf_8119-2247.jpg?size=626&ext=jpg)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://www.stronggo.com/sites/default/files/styles/image_col_12/public/2018-12/ada-blind-people-etiquette.jpg?itok=NHGJzVdu)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://imgix.ranker.com/user_node_img/50067/1001323114/original/people-talking-slowly-which-throws-off-their-lip-reading-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces)' }} />
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
      <div className='login-image' style={{ backgroundImage: 'url(https://images1.westword.com/imager/u/745xauto/10774837/istock-deaf-sign-language.jpg)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://image.freepik.com/foto-gratis/senior-hombre-ciego-leyendo-libro-braille_107420-34787.jpg)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://www.columbusspeech.org/wp-content/uploads/2018/02/shutterstock_1011270694-2experiment.jpg)' }} />
      <div className='login-image' style={{ backgroundImage: 'url(https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/reading_braille2.jpg)' }} />
    </div>
  );
}