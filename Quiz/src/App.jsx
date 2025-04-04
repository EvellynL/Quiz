import './App.css'
import Welcome from './components/Welcome'
import "./components/Welcome.css"
import { QuizContext } from './context/quiz'
import Questions from './components/Questions'
import { useContext } from 'react'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className='App'>
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Questions/>}
      </div>
    </>
  )
}

export default App
