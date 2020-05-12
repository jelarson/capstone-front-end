import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './quiz-styles.scss'

export default function BrailleQuizThree(props) {
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerUrl, setSelectedAnswerUrl] = useState('')
  const [path, setPath] = useState(`/wrong/braille/q3/${slug}`)
  const [enteredAnswer, setEnteredAnswer] = useState()
  const [count, setCount] = useState(0)
  const slug = props.match.params.slug

  const correct = props.location.state.correct

  console.log('correct', correct)

  useEffect(() => {
    axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq3/${slug}`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }, [])
  
  useEffect(() => {
    axios.get(`https://jel-language-flashcard-api.herokuapp.com/brailles`)
    .then(response => {
      response.data.forEach(item => {
        if (enteredAnswer === item.char || enteredAnswer === item.char.toLowerCase()){
          setSelectedAnswer(item.char)
          console.log(item.char)
          setSelectedAnswerUrl(item.imageWithoutChar)
          console.log(item.imageWithoutChar)
        } else {
          console.log('no matches')
        }
      })
    })
    .catch(err => console.log('error', err))
  }, [enteredAnswer])

  useEffect(() => {
    console.log('selected', selectedAnswer)
    console.log('answer', currentQuestion.answerName)
    // debugger
    if (selectedAnswer === '') {
      setPath(`/wrong/braille/q3/${slug}`)
    }
    if (selectedAnswer === currentQuestion.answerName) {
      setPath(`/correct/braille/q3/${slug}`)
    } 
    else {
      setPath(`/wrong/braille/q3/${slug}`)
    }
  }, [selectedAnswer])

  return(
    <div className='page-wrapper-quiz'>
      <div className='top-bar-wrapper'>
      <div className='title'>
        Braille Quiz Three
      </div>
      <div className='question-number'>
        Question {currentQuestion.questionNum} / 36
      </div>
      </div>
      <div className='content-wrapper'>
        <div className='answer-image'>
          <img src={currentQuestion.answerUrl}/>
        </div>
        <div className='question'>
          What letter or number is represented by the above character?
        </div>
        <div className='answer-wrapper'>
          <form className='quiz-form'>
            <div className='input-title'>
              Enter Response: 
            </div>
            <input
            className='quiz-input'
            maxLength={1}
            value={enteredAnswer}
            onChange={e => {
              setEnteredAnswer(e.target.value); setCount(count + 1); console.log(count)
            }}
            />
          </form>
        </div>
        <div className='answer-submit-button-wrapper'>
          <Link to={{pathname: path, state: {selectedAnswer: selectedAnswer, selectedAnswerUrl: selectedAnswerUrl, currentQuestion: currentQuestion, correct: correct, quiz: 'Braille Quiz Three', quizpath: 'brailleq3', quizLen: '36'}}} className='answer-submit-button'>Submit Answer</Link>
        </div>
      </div>
    </div>
  )
  }