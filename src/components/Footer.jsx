import React from 'react'

function Footer() {
  
  return (
    <>
      <div className="flex flex-row items-center justify-center text-center md:p-10 p-2">
        <a 
          data-testid="footer-link" 
          className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:text-stronghold-green hover:-translate-y-1" 
          href="https://github.com/JsonLevine/jason-portfolio" 
          target="_blank" 
          aria-label='Open Portfolio GitHub repository in new tab'
          rel="noreferrer">
          <span>
            <strong className="text-stronghold-red-accessible">2024-2025</strong> Designed and built by  
            <span className="jersey text-xl text-stronghold-red-accessible pl-1">
              <strong>Jason Levine</strong><br/>
            </span>
          </span>
          <span className="text-sm">with <strong className="text-stronghold-platinum">React</strong> + <strong className="text-stronghold-platinum">TailwindCSS</strong></span>
        </a>
      </div>
    </>
  )
}

export default Footer
