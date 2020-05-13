import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from '../nav-bar/nav-bar';
import Character from './character'

import './translate.scss'


export default function AslTranslate(props) {

  const [enteredInput, setEnteredInput] = useState('')
  const [chosenInput, setChosenInput] = useState('')
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)
  const [maxCount, setMaxCount] = useState(999)
  const [aslResult, setAslResult] = useState('')

  useEffect(() => {
    axios.get('https://jel-language-flashcard-api.herokuapp.com/asls')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log('getProducts error', error)
      })
  }, [])

  function handleSubmit(e){
    const varibale = translate(enteredInput.split(' ').join(''))
    setAslResult(varibale)
  }

  function translate(string) {
    return string.split('').map(letter => {
      return data.map(item => {
        if (letter.toUpperCase() === item.char) {
          return <div className='letter-wrapper'>

            <div className='letter-image' style={{
              backgroundImage: `url(${item.imageWithoutChar})`
            }} />
            <div className='letter-title'>
              < h3 > {item.char}</h3>
            </div>
          </div>
        }
      })
    })
  }

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='translate-page-content-wrapper'>
        <div className='title'>
          ASL Translate
        </div>
        <form className='input-form'>
          <input
            className='translate-input'
            type='text'
            placeholder='Enter Text'
            maxLength={enteredInput.split(' ').join('').length < 8 ? 20: 8}
            value={enteredInput}
            onChange={e => {
              setEnteredInput(e.target.value);
            }}
          />
          <div className='char-count'>
            Characters Used: {enteredInput.split(' ').join('').length} / 8
        </div>
          <button type='button' className='input-button' onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

        <div className='output'>
           {aslResult}
        </div>
      </div>
    </div>
  )
}