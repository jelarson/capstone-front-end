import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './wrong.scss'


export default function WrongAnswer(props) {
  const [path, setPath] = useState('')
  
  const data = props.location.state

  console.log('correct', data.CorrectAnswer)

  const correct = data.correct


  // console.log(data.currentQuestion.questionNum)
  // console.log(data.currentQuestion.questionNum + 1)
  console.log(Number(data.currentQuestion.questionNum) + 1)

  useEffect(() => {
    if (data.quizpath === 'aslq1') {
      setPath(`/asl-mastery/q1/${Number(data.currentQuestion.questionNum) + 1}`)
    }
    if (data.quizpath === 'aslq2') {
      setPath(`/asl-mastery/q2/${Number(data.currentQuestion.questionNum) + 1}`)
    }
    if (data.quizpath === 'aslq3') {
      setPath(`/asl-mastery/q3/${Number(data.currentQuestion.questionNum) + 1}`)
    }
    if (data.quizpath === 'brailleq1') {
      setPath(`/braille-mastery/q1/${Number(data.currentQuestion.questionNum) + 1}`)
    }
    if (data.quizpath === 'brailleq2') {
      setPath(`/braille-mastery/q2/${Number(data.currentQuestion.questionNum) + 1}`)
    }
    if (data.quizpath === 'brailleq3') {
      setPath(`/braille-mastery/q3/${Number(data.currentQuestion.questionNum) + 1}`)
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
          <Link to={{pathname: path, state: {correct: correct}}} className='next-question-button'>Next Question</Link>
        </div>
    </div>
  )
  }