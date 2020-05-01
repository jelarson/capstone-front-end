import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import './language-choice.scss'

export default function LanguageChoice(props) {
  return (
    <div className='landing-page-wrapper'>
      <Link to='/braille'>
        <div className='braille-link'>
          Braille
      </div>
      </Link>
      <Link to='/asl'>
        <div className='asl-link'>
          American Sign Language
      </div>
      </Link>
    </div>
  )
}
