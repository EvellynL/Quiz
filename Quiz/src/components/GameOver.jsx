import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import WellDone from "../img/welldone.svg"
import "./GameOver.css"
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id = "gameover">
        <h2>Game Over</h2>
        <p>pontuação: {quizState.score}</p>
        <p>Vocee acertou {quizState.score} de {quizState.questions.length} perguntas{""}</p>
        <img src= {WellDone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>reiniciar</button>
    </div>
  )
}

export default GameOver