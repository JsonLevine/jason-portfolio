import styles from './Keyboard.module.css';
import arrowIcon from '../assets/arrow.png'

const KEYSROW1 = ['q','w','e','r','t','y','u','i','o','p']
const KEYSROW2 = ['a','s','d','f','g','h','j','k','l']
const KEYSROW3 = ['z','x','c','v','b','n','m']

function Keyboard({ props }) {

  function backspace(){
    if(props.currentGuess.length > 0) {
      let currentInput = props.currentGuess.length-1;
      console.log(currentInput)
      let newGuess = []
      for(let i=0; i<currentInput; i++ ){
          newGuess[i] = props.currentGuess[i]
      }
      props.setCurrentGuess(newGuess)
    }
  }

  return (
    <div className={props.isMobile ?  styles.keyboardMobile : styles.keyboard}>
      <div className={styles.keyboardRow}>
        {KEYSROW1.map(key => {
          const isGreen = props.greenLetters.includes(key)
          const isYellow = props.yellowLetters.includes(key)
          const isInactive = props.guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = props.disabledLetters.includes(key)
          return (
            <button
              onClick={() => props.populateInput(key)}
              className={`jersey-25 text-2xl
              ${isDisabled ? "" : "transition ease-in-out duration-200 hover:scale-110"}
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
              disabled={isDisabled}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div className={styles.keyboardRow}>
        {KEYSROW2.map(key => {
          const isGreen = props.greenLetters.includes(key)
          const isYellow = props.yellowLetters.includes(key)
          const isInactive = props.guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = props.disabledLetters.includes(key)
          return (
            <button
              onClick={() => props.populateInput(key)}
              className={`jersey-25 text-2xl
              ${isDisabled ? "" : "transition ease-in-out duration-200 hover:scale-110"}
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
              disabled={isDisabled}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div className={styles.keyboardRow}>
        {KEYSROW3.map(key => {
          const isGreen = props.greenLetters.includes(key)
          const isYellow = props.yellowLetters.includes(key)
          const isInactive = props.guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = props.disabledLetters.includes(key)
          return (
            <button
              onClick={() => props.populateInput(key)}
              className={`jersey-25 text-2xl
              ${isDisabled ? "" : "transition ease-in-out duration-200 hover:scale-110"}
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
              disabled={isDisabled}
            >
              {key}
            </button>
          )
        })}
        <button onClick={() => backspace()} className={`jersey-25 text-2xl
        transition ease-in-out duration-200 hover:scale-110
        ${styles.btn} 
        ${styles.backspace}
        ${props.disabledLetters.length > 1 ? styles.disabled : ''}
        `}><img src={arrowIcon}></img></button>
      </div>
    </div>
  )
}

export default Keyboard