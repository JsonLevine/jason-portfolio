import React from 'react'

function ScreenDebugger() {
  return (
    <div className="sticky top-0 left-0 z-50 flex gap-2 p-2 text-white bg-black">
        <div className="md:hidden">SM</div>
        <div className="hidden md:block lg:hidden">MD</div>
        <div className="hidden lg:block xl:hidden">LG</div>
        <div className="hidden xl:block 2xl:hidden">XL</div>
        <div className="hidden 2xl:block">2XL</div>
    </div> 
  )
}

export default ScreenDebugger
