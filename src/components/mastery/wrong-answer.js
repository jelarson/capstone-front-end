import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './wrong.scss'


export default function WrongAnswer(props) {
  const [path, setPath] = useState('')

  useEffect(() => {
    if (data.quizpath === 'aslq1') {
      setPath(`asl-mastery/q1/${data.questionNum + 1}`)
    }
    if (data.quizpath === 'aslq2') {
      setPath(`asl-mastery/q2/${data.questionNum + 1}`)
    }
    if (data.quizpath === 'aslq3') {
      setPath(`asl-mastery/q3/${data.questionNum + 1}`)
    }
    if (data.quizpath === 'brailleq1') {
      setPath(`braille-mastery/q1/${data.questionNum + 1}`)
    }
    if (data.quizpath === 'brailleq2') {
      setPath(`braille-mastery/q2/${data.questionNum + 1}`)
    }
    if (data.quizpath === 'brailleq3') {
      setPath(`braille-mastery/q3/${data.questionNum + 1}`)
    }
  })
 
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
      <div className='incorrect-content-wrapper'>
        <div className='correct-answer-wrapper answer-wrapper'>
          <div className='subtitle'>
            Correct Answer:
          </div>
          <div className='image-letter-answer-wrapper'>

        <div className='answer-image'>
          <img src={data.currentQuestion.answerUrl}/>
        <div className='correct-letter'>
          <h1>{data.currentQuestion.answerName}</h1>
        </div>
        </div>
        </div>
          </div>
        <div className='your-answer-wrapper answer-wrapper'>
        <div className='subtitle'>
            Your Answer:
          </div>
          <div className='image-letter-answer-wrapper'>

        <div className='answer-image'>
          <img src={data.selectedAnswerUrl}/>
        <div className='correct-letter'>
          <h1>{data.selectedAnswer}</h1>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='incorrect-message'>
          Wrong!
        </div>
        <div className='next-question-button-wrapper'>
          <Link to={path} className='next-question-button'>Next Question</Link>
        </div>
    </div>
  )
  }