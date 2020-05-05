import React, { Component } from "react";
import axios from "axios";

import Navbar from '../nav-bar/nav-bar'
import BrailleLinks from '../practice/braille-links'
import './item-page.scss'


export default function BrailleItem(props) {
  return(
    <div className='page-wrapper'>
      <Navbar/>
      <div className='item-page-wrapper'>
      hello from Braille Item
      <div className='links-wrapper'>
      <BrailleLinks/>
      </div>
      </div>
    </div>
  )
}