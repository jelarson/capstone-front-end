import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './results.scss'

export default function Results(props){

  const [path, setPath] = useState('/asl-mastery')

  const data = props.location.state

  useEffect(() => {
    if (data.quizName === 'Braille Quiz One' || data.quizName === 'Braille Quiz Two' || data.quizName === 'Braille Quiz Three') {
      setPath('/braille-mastery')
    }
  }, [])


  return(
    <div className='results-page-wrapper'>
      <div className='quiz-title'>
        {data.quizName}
      </div>
      <div className='score-results-wrapper'>
        <div className='current-score-wrapper score-column'>
          <div className='column-title'>
            Previous High Score
          </div>
          <div className='column-score'>
            PH / {data.quizLength}
          </div>
        </div>
        <div className='new-score-wrapper score-column'>
        <div className='column-title'>
            Current Score
          </div>
          <div className='column-score'>
            {data.correct} / {data.quizLength}
          </div>
        </div>
        <div className='kept-score-wrapper score-column'>
        <div className='column-title'>
            Kept High Score
          </div>
          <div className='column-score'>
            PH / {data.quizLength}
          </div>
        </div>
      {/* Your score was {data.correct} out of {data.quizLength} */}
      </div>
      <div className='return-button-wrapper'>
        <Link to={path} className='return-button'>Return to Mastery</Link>      
      </div>
    </div>
  )
}