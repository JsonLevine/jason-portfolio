import React from 'react'
import { useNavigate } from 'react-router-dom'
import JLingoApp from '../apps/jlingo/JLingoApp'

function Jlingo() {
  
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
		<h1 className="text-stronghold-red jersey-25 text-center md:mt-36 mt-10 2xl:text-8xl lg:text-7xl text-6xl">JLingo</h1>
		<span className="jersey text-xl text-center text-stronghold-platinum">A Wordle recreation, but with fewer guesses</span>
		<JLingoApp />
		<button
			onClick={() => navigate('/')}
			className="mt-10 group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none focus:bg-stronghold-red hover:bg-stronghold-red text-stronghold-platinum rounded"
			aria-label='Return to Homepage'>
			Return to the homepage
		</button>
	</div>
  )
}

export default Jlingo