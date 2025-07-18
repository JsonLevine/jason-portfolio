import React from 'react'

function Disclaimer() {
  return (
    <div className='hidden sm:block disclaimer md:text-justify m-10 p-10 text-left bg-stronghold-eerie-black/80 ring-4 ring-stronghold-red-accessible text-stronghold-platinum rounded-lg'>
        <button 
        className="jersey text-xl float-right text-stronghold-platinum bg-stronghold-red-accessible/70 hover:bg-stronghold-red-accessible transition ease-in-out hover:scale-110 rounded-md p-2 shadow-md"
        onClick={() => document.querySelector('.disclaimer').style.display = 'none'}
        >
            Dismiss
        </button>
        <div className='jersey md:text-3xl text-xl md:text-left text-stronghold-red-accessible'>July 11, 2025</div>
        <div className='jersey-25 md:text-5xl text-3xl font-bold mb-4 md:text-left'>A personal note</div>

        <span>Since late 2023, I have taken a deliberate step to explore career paths beyond tech.  I have spent time exploring new professional interests, including fitness and operations management.  Some of the opportunities I have pursued include:</span>
             <ul>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Building Management at the <strong className='jersey text-xl text-stronghold-red-accessible'>YMCA</strong></li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Earning a ceritification through <a target="_blank" rel="noreferrer" className='text-link-blue' href='https://www.nasm.org/'>NASM</a> to become a Certified Personal Trainer at the <strong className='jersey text-xl text-stronghold-red-accessible'>YMCA</strong> as well</li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Freelance furniture moving gigs with <strong className='jersey text-xl text-stronghold-red-accessible'>TaskRabbit</strong></li>
                <li>And most recently, </li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Working back of house retail operations at <strong className='jersey text-xl text-stronghold-red-accessible'>Vuori</strong></li>
             </ul>
            <span>These positions have challenged me in new ways, deepening my people skills, adaptability, and on-the-ground decision making. While I continue to value and grow in these roles, I am also exploring new opportunities to apply my experience in software engineering and product management to meaningful, user-focused projects in tech.</span>

    </div>
  )
}

export default Disclaimer