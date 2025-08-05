import React from 'react'
import { useNavigate } from 'react-router'

function PageNotFound() {

	const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
			<img src="/assets/Shocked_Ron.gif" alt="Shocked Ron Weasley GIF" className="w-1/2 lg:w-1/3 h-1/2 object-cover" />
			<h1 className="text-stronghold-red text-center my-10 text-3xl">404 - Page Not Found</h1>

			<button
				onClick={() => navigate('/')}
				className="group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none focus:bg-stronghold-red hover:bg-stronghold-red text-stronghold-platinum rounded"
				aria-label='Return to Homepage'>
				Return to the homepage
			</button>
    </div>
  )
}

export default PageNotFound