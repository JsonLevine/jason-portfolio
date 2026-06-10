import React from 'react'
import { useNavigate } from 'react-router-dom'
import lists from '../lists'
import Timer from './Timer'

function Scattergories() {
  const [letter, setLetter] = React.useState()
  const [list, setList] = React.useState(1)
  const [gameStarted, setGameStarted] = React.useState(false)
  const [timerRunning, setTimerRunning] = React.useState(false)

  const navigate = useNavigate()

  function getRandomLetter() {
    const alphabet = 'ABCDEFGHILMNOPRST'
    const randomIndex = Math.floor(Math.random() * alphabet.length)
    return alphabet[randomIndex]
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col mx-16 items-center justify-start">
        
        {!gameStarted && (
        <div id="newgame" className="mt-10 flex flex-col items-center">
          <h1 className="text-stronghold-red jersey-25 text-center md:mt-36 mt-10 2xl:text-8xl lg:text-7xl text-6xl">Scattergories</h1>
          <span className="mb-6 border-b border-stronghold-red jersey text-xl w-full text-center text-stronghold-platinum">Presented by Jason</span>
          <label htmlFor="list-select" className="text-stronghold-platinum jersey text-3xl">Choose a list:</label>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {Array.from({ length: 12 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setList(i + 1)}
                className={`p-4 rounded bg-stronghold-jet text-stronghold-platinum cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-stronghold-red jersey text-2xl ${
                  list === i + 1 ? 'bg-stronghold-red' : ''
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
              onClick={() => {
                setLetter(getRandomLetter());
                setGameStarted(true);
              }}
              className="mt-10 group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl bg-stronghold-jet border-0 py-2 px-6 focus:outline-none hover:bg-stronghold-red text-stronghold-platinum rounded"
              aria-label='Generate a letter and begin'>
              Generate a random letter
            </button>
        </div>)}

        {gameStarted && (
          <div id="game" className="flex flex-col items-center justify-center md:mt-36 mt-10 ">
            <Timer onRunningChange={setTimerRunning}/>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-stronghold-red-accessible jersey-25 text-center 2xl:text-5xl lg:text-4xl text-3xl underline">List {list}</span>
                <span className="text-stronghold-white jersey-25 text-center 2xl:text-5xl lg:text-4xl text-3xl">Current Letter:</span>
              </div>
              <span className="border-2 px-8 py-4 rounded-lg text-stronghold-red jersey-25 text-center  mt-2 2xl:text-8xl lg:text-7xl text-6xl">{letter}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
              {lists[list - 1].map((category, index) => (
                <div key={index} className="p-4 rounded bg-stronghold-jet text-stronghold-platinum text-xl">
                  <strong className="text-stronghold-red">{index+1})</strong>  <span style={{ filter: timerRunning ? "none" : "", userSelect: timerRunning ? "auto" : "none", transition: "filter 0.4s ease" }}>{category}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => 
                setGameStarted(false)}
              className="mt-10 group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none hover:bg-stronghold-red text-stronghold-platinum rounded"
              aria-label='Generate a new letter'>
              Finish Round
            </button>
          </div>)
        }

      </div>
  </div>
  )
}

export default Scattergories