import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

import './letter-links.scss'

export default function AslLinks(props) {
  
  const [data, setData] = useState('')
  const [linkData, setLinkData] = useState('')

useEffect(() => {
  console.log('running get')
  axios.get('https://jel-language-flashcard-api.herokuapp.com/asls')
    .then((response) => {
      // debugger
      setData(response.data)
      // console.log(response.data)
      console.log(response.data.sort((a, b) => (a.id < b.id) ? -1 : 1))

      console.log('state set')
      setLinkData(response.data.map(item => {
        return <div className='link-div'>
          <NavLink to={`/asl/${item.id}`} className='letter-link' activeStyle={{backgroundColor: 'white',
        color: 'black'}}>{item.char} </NavLink>
        </div>
      }))
      // setStartingData(response.data)
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