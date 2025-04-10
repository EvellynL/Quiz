import './App.css'
import Welcome from './components/Welcome'
import "./components/Welcome.css"
import { QuizContext } from './context/quiz'
import Questions from './components/Questions'
import { useContext, useEffect } from 'react'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS"})
  }, [])

  return (
    <>
      <div className='App'>
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Questions/>}
        {quizState.gameStage === "End" && <GameOver/>}
        {quizState.gameStage === "Category" && <PickCategory/>}
      </div>
    </>
  )
}

export default App
