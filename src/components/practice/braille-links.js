import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

import './letter-links.scss'

export default function BrailleLinks(props) {
  
  const [data, setData] = useState('')
  const [linkData, setLinkData] = useState('')

useEffect(() => {
  axios.get('https://jel-language-flashcard-api.herokuapp.com/brailles')
    .then((response) => {
      setData(response.data)
      console.log(response.data.sort((a, b) => (a.id < b.id) ? -1 : 1))

      setLinkData(response.data.map((item, idx) => {
        return <div key={idx} className='link-div'>
          <NavLink to={`/braille/${item.id}`} className='letter-link' activeStyle={{backgroundColor: 'white',
        color: 'black'}}>{item.char} </NavLink>
        </div>
      }))
    })
    .catch((error) => {
      console.log('get links error', error)
    })
}, [])

return(
  <div className='links'>
          {linkData}
        </div>
)

}