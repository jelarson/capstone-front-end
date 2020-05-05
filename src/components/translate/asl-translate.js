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

  useEffect(() => {
    console.log('running')
    axios.get('https://jel-language-flashcard-api.herokuapp.com/asls')
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        // setStartingData(response.data)
      })
      .catch((error) => {
        console.log('getProducts error', error)
      })
  }, [])

  useEffect(() => {
    setCount(enteredInput.split(' ').join('').length)
    if (count === 7) {
      setMaxCount(count)
    } else {
      setMaxCount(999)
    }
  }, [enteredInput])

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
          ASL Translate
        </div>
        <form className='input-form'>
          <input
            className='translate-input'
            type='text'
            placeholder='Enter Text'
            maxLength={maxCount}
            onChange={e => {
              setEnteredInput(e.target.value);
            }}
          />
          <div className='char-count'>
            Characters Used: {count} / 8
        </div>
          <button className='input-button' onClick={(e) => { e.preventDefault(); setChosenInput(enteredInput) }}>Submit</button>
        </form>

        <div className='output'>
          {translate(chosenInput)}
        </div>
      </div>
    </div>
  )
}