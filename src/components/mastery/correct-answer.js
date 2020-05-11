import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import './correct.scss'

export default function CorrectAnswer(props) {

  const data = props.location.state

  return(
    <div className='page-wrapper-quiz'>
      <div className='top-bar-wrapper'>
      <div className='title'>
        {data.quiz}
      </div>
      <div className='question-number'>
        Question {data.currentQuestion.questionNum} / 10
      </div>
      </div>
      <div className='correct-content-wrapper'>
        <div className='answer-image'>
          <img src={data.currentQuestion.answerUrl}/>
        </div>
        <div className='correct-letter'>
          <h1>{data.currentQuestion.answerName}</h1>
        </div>
        </div>
        <div className='correct-message'>
          Correct!
        </div>
        <div className='next-question-button-wrapper'>
          <Link to='/' className='next-question-button'>Next Question</Link>
        </div>
    </div>
  )
  }