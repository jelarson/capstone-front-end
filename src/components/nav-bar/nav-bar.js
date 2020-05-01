import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faCog,
    faArrowCircleRight,
    faArrowCircleLeft,
    faEnvelope
  );
};

export default function Navbar() {

  Icons()

  const [name, setName] = useState('nav-wrapper-closed')

  function nameChange() {
    if (name === 'nav-wrapper-closed') {
      return setName('nav-wrapper')
    }
    if (name === 'nav-wrapper') {
      return setName('nav-wrapper-closed')
    }
  }

  return (
    <div className={name}>
      <div className='nav-link-wrapper1'>
        <NavLink exact to='/'><a className='nav-link-wrapper'>Home</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/hashtag'><a className='nav-link-wrapper'>Hashtag Generator</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/least-greatest'><a className='nav-link-wrapper'>Least and Greatest</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/spongebob'><a className='nav-link-wrapper'>Spongebob Case</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/squared'><a className='nav-link-wrapper'>Square Every Digit</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/string-increment'><a className='nav-link-wrapper'>Increment Numbers in a String</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/string-reverse'><a className='nav-link-wrapper'>Reverse String</a></NavLink>
      </div>
      <div className='nav-link-wrapper1'>
        <NavLink to='/military-time'><a className='nav-link-wrapper'>Military Time Converter</a></NavLink>
      </div>
      <div className='drawer-button'>
        {name === 'nav-wrapper' ?
          <button onClick={() => nameChange()} className='drawer-button1'><FontAwesomeIcon icon='arrow-circle-left' /></button>
          :
          <button onClick={() => nameChange()} className='drawer-button1'><FontAwesomeIcon icon='arrow-circle-right' /></button>
        }
      </div>
    </div >
  )
}