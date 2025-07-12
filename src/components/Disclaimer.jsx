import React from 'react'

function Disclaimer() {
  return (
    <div className='md:text-justify container my-10 px-10 py-10 mx-auto text-left bg-stronghold-red/50 ring-4 ring-stronghold-red text-stronghold-platinum rounded-lg shadow-lg'>
        <h3 className='jersey-25 text-5xl font-bold mb-4 md:text-left'>A personal note from me</h3>
        <span>Since late 2023, I have taken a deliberate step to explore career paths beyond tech.  I have spent time exploring new professional interests, including fitness and operations management.  Some of the opportunities I have pursued include:</span>
             <ul>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Building Management at the <strong className='jersey text-xl text-stronghold-red-accessible'>YMCA</strong></li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Earning a ceritification through NASM to become a Certified Personal Trainer at the <strong className='jersey text-xl text-stronghold-red-accessible'>YMCA</strong> as well</li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Freelance furniture moving gigs with <strong className='jersey text-xl text-stronghold-red-accessible'>TaskRabbit</strong></li>
                <li>And most recently, </li>
                <li className='ring-2 ring-stronghold-jet p-1 my-2 rounded w-fit bg-stronghold-onyx/80'>Working back of house retail operations at <strong className='jersey text-xl text-stronghold-red-accessible'>Vuori</strong></li>
             </ul>
            <span>These positions have challenged me in new ways, deepening my people skills, adaptability, and on-the-ground decision making. While I continue to value and grow in these roles, I am also exploring new opportunities to apply my experience in software engineering and product management to meaningful, user-focused projects in tech.</span>
    </div>
  )
}

export default Disclaimer