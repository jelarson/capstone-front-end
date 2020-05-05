import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from '../nav-bar/nav-bar'
import BrailleLinks from '../practice/braille-links'
import './item-page.scss'


export default function BrailleItem(props) {
  const [selectedObj, setSelectedObj] = useState({})
  const [currentId, setCurrentId] = useState(props.match.params.slug)

  useEffect(() => {
    axios.get('https://jel-language-flashcard-api.herokuapp.com/brailles')
      .then((response) => {
        response.data.forEach(item => {
          if (item.id == currentId) {
            setSelectedObj(item)
          }
        }
          )
      })
      .catch((error) => {
        console.log('get links error', error)
      })
  }, [currentId])

  useEffect(() => {
    setCurrentId(props.match.params.slug)
  }, [props.match.params.slug])


    return(
      <div className='page-wrapper'>
        <Navbar/>
        <div className='item-page-wrapper'>
        <div className='links-wrapper'>
          <BrailleLinks/>
        </div>
        <div className='content-wrapper'>

          <div className='letter-name'>
          {selectedObj.char}
          </div>
        <div className='letter-image'>
          <img src={selectedObj.imageWithoutChar}/>
        </div>
        </div>
      </div>
    </div>
    )
}