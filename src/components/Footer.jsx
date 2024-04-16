import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex flex-row items-center justify-center md:p-10">
        <a className="flex flex-col items-center justify-center pr-4 transition duration-300 ease-in-out hover:text-green-400 hover:-translate-y-1" href="https://github.com/JsonLevine/jason-portfolio" target="_blank" rel="noreferrer">
          <span>
            <span className="text-custom-red">2024</span> Designed and built by  
            <span className="jersey text-xl text-custom-red pl-1">
              <strong>Jason Levine</strong><br/>
            </span>
          </span>
          <span className="text-sm">with <strong className="text-gray-200">React</strong> + <strong className="text-gray-200">TailwindCSS</strong></span>
        </a>
      </div>
    </>
  )
}

export default Footer