import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SidebarLink from './SidebarLink';

const Icons = () => {
  return library.add(
    faArrowCircleRight,
    faArrowCircleLeft
  );
};

export default function Navbar() {

  Icons()

  const [name, setName] = useState('nav-wrapper')
  const [activeLink, setActiveLink] = useState()
  function nameChange() {
    if (name === 'nav-wrapper-closed') {
      return setName('nav-wrapper')
    }
    if (name === 'nav-wrapper') {
      return setName('nav-wrapper-closed')
    }
  }
  const handleClickThingy = name => {
    setActiveLink(name)
  }
  return (
    <div className={name}>
      <div className='asl-navbar-links navbar-links'>
        <div className='navbar-sub-category-title'>
          <h3>American Sign Language</h3>
        </div>
        <div className='navbar-link-wrapper'>
          <NavLink exact to='/asl' className='link' activeStyle={{ color: "red", fontSize: "24px", fontWeight: "900" }}><div className='nav-div'>Practice</div></NavLink>
        </div>
        <div className='navbar-link-wrapper'>
          <NavLink exact to='/asl-translate' className='link' activeStyle={{ color: "red", fontSize: "24px", fontWeight: "900" }}><div className='nav-div'>Translate</div></NavLink>
        </div>
        <div className='navbar-link-wrapper'>
          {/* <NavLink exact to='/asl-mastery' className='link'><button className='nav-link'>Test Yourself</button></NavLink> */}
          <NavLink exact to='/asl-mastery' className='link' activeStyle={{ color: "red", fontSize: "24px", fontWeight: "900" }}><div className='nav-div'>Test Yourself</div></NavLink>
        </div>
      </div>

      <div className='braile-navbar-links navbar-links'>
        <div className='navbar-sub-category-title'>
          <h3>Braille</h3>
        </div>
        <div className={`navbar-link-wrapper`}>
          <NavLink exact to='/braille' className='link' activeStyle={{ color: "red", fontSize: "24px", fontWeight: "900" }}><div className='nav-div'>Practice</div></NavLink>
        </div>
        <div className='navbar-link-wrapper'>
          <NavLink exact to='/braille-translate' className='link' activeStyle={{ color: "red", fontSize: "24px", fontWeight: "900" }}><div className='nav-div'>Translate</div></NavLink>
        </div>
        <SidebarLink update={handleClickThingy} destination="/braille-mastery" text="Test Yourself" activeLink={activeLink} id={'1'} />
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