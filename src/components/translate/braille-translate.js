import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from '../nav-bar/nav-bar';
import Character from './character'

import './translate.scss'


export default function BrailleTranslate(props) {

  const [enteredInput, setEnteredInput] = useState('')
  const [chosenInput, setChosenInput] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    console.log('running')
    axios.get('https://jel-language-flashcard-api.herokuapp.com/brailles')
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        // setStartingData(response.data)
      })
      .catch((error) => {
        console.log('getProducts error', error)
      })
  }, [])

  // function translate(string) {
  //   console.log(data)
  //   return string.split('').map(letter => {
  //     if (letter === data.char) {
  //       console.log(data.char)
  //       return <Character key={item.id} letter={letter} />
  //     }
  //   })
  // return data.map((item) => {
  //   return <Product key={item.id} item={item} slug={item.slug} />
  // })
  // }

  function translate(string) {
    return string.split('').map(letter => {
      return data.map(item => {
        if (letter.toUpperCase() === item.char) {
          console.log(item.char)
          return <div className='letter-wrapper'>

            <div className='letter-image' style={{
              backgroundImage: `url(${item.imageWithoutChar})`
            }} />
            {/* <img key={item.id} src={item.imageWithoutChar} alt='Displayed Letter' /> */}
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
          Braille Translate
        </div>
        <form className='input-form'>
          <input
            className='translate-input'
            type='text'
            placeholder='Enter Text'
            onChange={e => {
              setEnteredInput(e.target.value);
            }}
          />
          <button className='input-button' onClick={(e) => { e.preventDefault(); setChosenInput(enteredInput) }}>Submit</button>
        </form>
        <div>
          {enteredInput}
        </div>
        <div className='output'>
          {translate(chosenInput)}
        </div>
      </div>
    </div>
  )
}