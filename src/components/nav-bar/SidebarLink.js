import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarLink({ destination, text, activeLink, id, update }) {

  return (
    <div className={`navbar-link-wrapper ${activeLink === id ? 'active' : null}`}>
      <NavLink exact to={destination} className='link' activeStyle={{ color: "red" }}><div onClick={() => update(id)} className='nav-div'>{text}</div></NavLink>
    </div>
  )
}