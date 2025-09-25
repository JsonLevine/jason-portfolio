import './ActionButtons.css';

function ActionButtons({ props }) {
  return (
    <>
    { props.gameOver ? 
      <button onClick={() => props.resetGame()} 
        className='resetButton'>Play again?
      </button> :
      <div className='buttons jersey-25 text-3xl'>
        <button onClick={() => props.submitGuess()} className="transition ease-in-out duration-200 hover:scale-110 guessButton">
          Guess 
        </button>
        <button onClick={() => props.setCurrentGuess([''])} className="transition ease-in-out duration-200 hover:scale-110 clearButton">
          Clear 
        </button>
        <button onClick={() => props.endGame('gaveup')} className="transition ease-in-out duration-200 hover:scale-110 clearButton">
          Give up 
        </button>
      </div>
    }
    </>
  )
}

export default ActionButtons