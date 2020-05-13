import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'
import BrailleLinks from './braille-links'
import './practice.scss'


export default function BraillePractice(props) {

  const [data, setData] = useState('')
  const [linkData, setLinkData] = useState('')

  useEffect(() => {
    console.log('running get')
    axios.get('https://jel-language-flashcard-api.herokuapp.com/brailles')
      .then((response) => {
        setData(response.data)
        console.log(response.data.sort((a, b) => (a.id < b.id) ? -1 : 1))

        console.log('state set')
        setLinkData(response.data.map(item => {
          return <div className='letter-link-wrapper'>
            <NavLink to={`/braille/${item.id}`} className='letter-link' activeStyle={{ color: 'red', fontSize: '1.3em' }}>{item.char}</NavLink>
          </div>
        }))
      })
      .catch((error) => {
        console.log('getProducts error', error)
      })
  }, [])

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='practice-page-content-wrapper'>
        <BrailleLinks />
        <div className='title'>
          Choose a Letter Above to Start Practicing Braille
        </div>
      </div>
    </div>
  )
}