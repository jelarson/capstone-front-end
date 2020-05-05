import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


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
        return <div>
          <Link to={`/asl/${item.id}`}>{item.char}</Link>
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