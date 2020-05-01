import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from '../nav-bar/nav-bar'

export default function BraillePractice(props) {
  return (
    <div>

      <Navbar />
      <div className='practice-page-content-wrapper'>
        Braille Practice
    </div>
    </div>
  )
}