import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'
import './mastery.scss'


export default function BrailleMastery(props) {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <div className='mastery-page-content-wrapper'>
        Braille Mastery
    </div>
    </div>
  )
}