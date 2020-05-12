import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import './correct.scss'

export default function CorrectAnswer(props) {
  const [path, setPath] = useState('')
  const data = props.location.state

  console.log('correct', data.correct + 1)
  console.log('selected', data.selectedAnswer)

  const correct = data.correct

  useEffect(() => {
    if (data.quizpath === 'aslq1') {
      if (data.currentQuestion.questionNum === '10') {
        setPath('/results/asl/q1')
      } else {
        setPath(`/asl-mastery/q1/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
    if (data.quizpath === 'aslq2') {
      if (data.currentQuestion.questionNum === '18') {
        setPath('/results/asl/q2')
      } else {
        setPath(`/asl-mastery/q2/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
    if (data.quizpath === 'aslq3') {
      if (data.currentQuestion.questionNum === '36') {
        setPath('/results/asl/q3')
      } else {
        setPath(`/asl-mastery/q3/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
    if (data.quizpath === 'brailleq1') {
      if (data.currentQuestion.questionNum === '10') {
        setPath('/results/braille/q1')
      } else {
        setPath(`/braille-mastery/q1/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
    if (data.quizpath === 'brailleq2') {
      if (data.currentQuestion.questionNum === '18') {
        setPath('/results/braille/q2')
      } else {
        setPath(`/braille-mastery/q2/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
    if (data.quizpath === 'brailleq3') {
      if (data.currentQuestion.questionNum === '36') {
        setPath('/results/braille/q3')
      } else {
        setPath(`/braille-mastery/q3/${Number(data.currentQuestion.questionNum) + 1}`)
      }
    }
  }, [])


  return(
    <div className='page-wrapper-quiz'>
      <div className='top-bar-wrapper'>
      <div className='title'>
        {data.quiz}
      </div>
      <div className='question-number'>
        Question {data.currentQuestion.questionNum} / {data.quizLen}
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
          <Link to={{pathname: path, state: {correct: correct + 1, quizLength: data.quizLen, quizName: data.quiz}}} className='next-question-button'>Next Question</Link>
        </div>
    </div>
  )
  }