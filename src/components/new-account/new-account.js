import React, { useState, useEffect } from "react";
import axios from 'axios';

import './new-account.scss'


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
          'https://jel-user-capstone-api.herokuapp.com/user',
          {
            email: email,
            name: name,
            password: password,
            loggedIn: 'no',
            testOneHighScore: '0',
            testOnePassed: 'no',
            testTwoHighScore: '0',
            testTwoPassed: 'no',
            testThreeHighScore: '0',
            testThreePassed: 'no'
          },
        )
        .then(response => {
          console.log('Account Created')
        })
        .catch(error => {
          console.log('error', error)

        });
      props.history.push('/login')
    }
  }

  useEffect(() => {
    setVisibleStyle('hidden')
  }, [name, email, password])

  return (
    <div className='new-account-container'>
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/t/escola-de-protuber%C3%A2ncia-tocantes-do-livro-cego-doente-braile-da-leitura-crian%C3%A7a-113604556.jpg)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/two-women-speak-sign-language-girls-talk-language-hearing-impaired-people-deaf_8119-2247.jpg?size=626&ext=jpg)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://www.stronggo.com/sites/default/files/styles/image_col_12/public/2018-12/ada-blind-people-etiquette.jpg?itok=NHGJzVdu)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://imgix.ranker.com/user_node_img/50067/1001323114/original/people-talking-slowly-which-throws-off-their-lip-reading-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces)' }} />
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
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://images1.westword.com/imager/u/745xauto/10774837/istock-deaf-sign-language.jpg)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://image.freepik.com/foto-gratis/senior-hombre-ciego-leyendo-libro-braille_107420-34787.jpg)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://www.columbusspeech.org/wp-content/uploads/2018/02/shutterstock_1011270694-2experiment.jpg)' }} />
      <div className='new-acct-image' style={{ backgroundImage: 'url(https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/reading_braille2.jpg)' }} />
    </div>
  );
}