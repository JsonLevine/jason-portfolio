import './GameBoard.css';
import GuessRow from './GuessRow';
import ActionButtons from './ActionButtons';

function GameBoard({props}) {

  const ActionButtonsProps = {
    submitGuess: props.submitGuess,
    setCurrentGuess: props.setCurrentGuess,
    gameOver: props.gameOver,
    resetGame: props.resetGame,
    endGame: props.endGame
  }

  function generateRows() {
    let rows = []
    for(let i=0; i<props.numberOfGuesses; i++){
      const GuessRowProps = {
        row: i,
        currentRow: props.currentRow,
        currentGuess: props.currentGuess,
        setCurrentGuess: props.setCurrentGuess,
        everyGuess: props.everyGuess,
      }

      rows.push(
        <GuessRow props={GuessRowProps}/>
      )
    }
    return rows
  }

  return (
    <div className='gameBoard'>
        {generateRows()}
        <ActionButtons props={ActionButtonsProps}/>
    </div>
  )
}

export default GameBoard