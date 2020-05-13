import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './quiz-styles.scss'

export default function BrailleQuizOne(props) {
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerUrl, setSelectedAnswerUrl] = useState('')
  const [path, setPath] = useState(`/braille-mastery/q1/${slug}`)
  const [activeButton1, setActiveButton1] = useState()
  const [activeButton2, setActiveButton2] = useState()
  const [activeButton3, setActiveButton3] = useState()
  const [activeButton4, setActiveButton4] = useState()
  const slug = props.match.params.slug
  const correct = props.location.state.correct


  useEffect(() => {
    if (slug === '4') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/18`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '5') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/12`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '6') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/13`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '7') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/14`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '8') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/15`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '9') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/16`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '10') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/17`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })
  }
    if (slug !== '4' && slug !== '5' && slug !== '6' && slug !== '7' && slug !== '8' && slug !== '9' && slug !== '10'){

    axios.get(`https://jel-quiz-capstone-api.herokuapp.com/brailleq1/${slug}`)
    .then(response => {
      console.log(response.data)
      setCurrentQuestion(response.data)
    })}
  }, [])

  useEffect(() => {
    if (selectedAnswer === currentQuestion.answerName) {
      setPath(`/correct/braille/q1/${slug}`)
    } else {
      setPath(`/wrong/braille/q1/${slug}`)
    }
  }, [selectedAnswer])

  return(
    <div className='page-wrapper-quiz'>
      <div className='top-bar-wrapper'>
      <div className='title'>
        Braille Quiz One
      </div>
      <div className='question-number'>
        Question {currentQuestion.questionNum} / 10
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
          <div className='answer-top-row answer-row'>
          <button className={`answer-button ${activeButton1}`} onClick={() => {setSelectedAnswer(currentQuestion.optionOneName); setSelectedAnswerUrl(currentQuestion.optionOneUrl); setActiveButton1('active-button1'); setActiveButton2('null'); setActiveButton3('null'); setActiveButton4('null')}}>{currentQuestion.optionOneName}</button>
          <button className={`answer-button ${activeButton2}`} onClick={() => {setSelectedAnswer(currentQuestion.optionTwoName); setSelectedAnswerUrl(currentQuestion.optionTwoUrl); setActiveButton2('active-button2'); setActiveButton1('null'); setActiveButton3('null'); setActiveButton4('null')}}>{currentQuestion.optionTwoName}</button>
          </div>
          <div className='answer-bottom-row answer-row'>
          <button className={`answer-button ${activeButton3}`} onClick={() => {setSelectedAnswer(currentQuestion.optionThreeName); setSelectedAnswerUrl(currentQuestion.optionThreeUrl); setActiveButton3('active-button3'); setActiveButton1('null'); setActiveButton2('null'); setActiveButton4('null')}}>{currentQuestion.optionThreeName}</button>
          <button className={`answer-button ${activeButton4}`} onClick={() => {setSelectedAnswer(currentQuestion.optionFourName); setSelectedAnswerUrl(currentQuestion.optionFourUrl); setActiveButton4('active-button4'); setActiveButton1('null'); setActiveButton2('null'); setActiveButton3('null')}}>{currentQuestion.optionFourName}</button>
          </div>
        </div>
        <div className='answer-submit-button-wrapper'>
          <Link to={{pathname: path, state: {selectedAnswer: selectedAnswer, selectedAnswerUrl: selectedAnswerUrl, currentQuestion: currentQuestion, correct: correct, quiz: 'Braille Quiz One', quizpath: 'brailleq1', quizLen: '10'}}} className='answer-submit-button'>Submit Answer</Link>
        </div>
      </div>
      <div className='return-link-wrapper'>
        <Link to='/braille-mastery' className='return-link'>Return to Mastery</Link>
      </div>
    </div>
  )
  }