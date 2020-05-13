import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'
import AslLinks from './asl-links'
import './practice.scss'


export default function AslPractice(props) {

  const [data, setData] = useState('')
  const [linkData, setLinkData] = useState('')

  useEffect(() => {
    axios.get('https://jel-language-flashcard-api.herokuapp.com/asls')
      .then((response) => {
        setData(response.data)
        console.log(response.data.sort((a, b) => (a.id < b.id) ? -1 : 1))

        setLinkData(response.data.map(item => {
          return <div>
            <Link to={`/asl/${item.id}`}>{item.char}</Link>
          </div>
        }))
      })
      .catch((error) => {
        console.log('get links error', error)
      })
  }, [])

  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='practice-page-content-wrapper'>
        <AslLinks />
        <div className='title'>
          Choose a Letter Above to Start Practicing American Sign Language
        </div>
      </div>
    </div>
  )
}