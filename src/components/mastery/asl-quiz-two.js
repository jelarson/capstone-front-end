import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './quiz-styles.scss'

export default function AslQuizTwo(props) {
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerUrl, setSelectedAnswerUrl] = useState('')
  const [path, setPath] = useState(`/asl-mastery/q2/${slug}`)
  const [activeButton1, setActiveButton1] = useState()
  const [activeButton2, setActiveButton2] = useState()
  const [activeButton3, setActiveButton3] = useState()
  const [activeButton4, setActiveButton4] = useState()
  const slug = props.match.params.slug

  const correct = props.location.state.correct


  useEffect(() => {
    if (slug === '16') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/aslq2/22`)
    .then(response => {
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '17') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/aslq2/23`)
    .then(response => {
      setCurrentQuestion(response.data)
    })
  }
    if (slug === '18') {
      axios.get(`https://jel-quiz-capstone-api.herokuapp.com/aslq2/24`)
    .then(response => {
      setCurrentQuestion(response.data)
    })
  }
  if (slug !== '16' && slug !== '17' && slug !== '18') {
    axios.get(`https://jel-quiz-capstone-api.herokuapp.com/aslq2/${slug}`)
    .then(response => {
      setCurrentQuestion(response.data)
    })}
  }, [])

  useEffect(() => {
    if (selectedAnswer === currentQuestion.answerName) {
      setPath(`/correct/asl/q2/${slug}`)
    } else {
      setPath(`/wrong/asl/q2/${slug}`)
    }
  }, [selectedAnswer])

  return(
    <div className='page-wrapper-quiz'>
      <div className='top-bar-wrapper'>
      <div className='title'>
        ASL Quiz Two
      </div>
      <div className='question-number'>
        Question {currentQuestion.questionNum} / 18
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
          <Link to={{pathname: path, state: {selectedAnswer: selectedAnswer, selectedAnswerUrl: selectedAnswerUrl, currentQuestion: currentQuestion, correct: correct, quiz: 'ASL Quiz Two', quizpath: 'aslq2', quizLen: '18'}}} className='answer-submit-button'>Submit Answer</Link>
        </div>
      </div>
      <div className='return-link-wrapper'>
        <Link to='/asl-mastery' className='return-link'>Return to Mastery</Link>
      </div>
    </div>
  )
  }