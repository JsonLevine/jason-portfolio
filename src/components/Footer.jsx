import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex flex-row items-center justify-center md:p-10">
        <a className="pr-4 transition duration-300 ease-in-out hover:text-green-400 hover:-translate-y-1" href="https://github.com/JsonLevine/jason-portfolio" target="_blank" rel="noreferrer">
          <span className="text-custom-red">2024</span> Designed and built by  
          <span className="jersey text-xl text-custom-red pl-1">
              <b>Jason Levine</b>
          </span>
        </a>
      </div>
    </>
  )
}

export default Footer