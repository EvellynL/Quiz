import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);
  return (
    <div>
      <p>Pergunta de 0 a 10</p>
      <h2>Pergunta atual</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  )
}

export default Questions
