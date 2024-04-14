import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import { slide as Menu } from 'react-burger-menu'

function Navbar() {
 // const [isOpen, setIsOpen] = useState(false)

/* Styles if I ever re-implement burger menu
  function closeMenu() {
    setIsOpen(false)
  }

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function handleStateChange (state) {
    setIsOpen(isOpen)  
    console.log("State: " + isOpen)
  }

  var styles = {
    bmBurgerButton: {
      position: 'sticky',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '24px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '70px'
    },
    bmMenu: {
      background: '#373a47',
      padding: '1em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
*/
return (
    <header className="bg-custom-red md:sticky top-0 z-10">
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-row justify-between items-center">
        <a href="#about"className="title-font font-medium text-white text-xl">
          Jason  <br className="sm:hidden"/>Levine
        </a>
        <nav className="text-lg block mr-auto ml-4 py-1 pl-4 border-l-2 border-gray-700	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800">
            Projects
          </a>
          <a href="#skills" className="mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800">
            Skills
          </a>
        </nav>
        <a
          target="_blank"
          href="./assets/Jason_Levine_Resume.pdf"
          className="hidden sm:block inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-custom-red sm:mt-0">
          Résumé
        </a>
        <a
          href="#contact"
          className="md:hidden inline-flex items-center bg-white border-0 py-1 px-3 ml-4 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-custom-red sm:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>

        {/*  https://www.npmjs.com/package/react-burger-menu
        <div className="sm:hidden" >
          <Menu 
            onStateChange={ isMenuOpen }
            noOverlay 
            right 
            styles={ styles } 
            customCrossIcon={ false }>
            <div className="flex-col">
              <a onClick={() => closeMenu()} id="projects" className="menu-item my-2 text-white hover:text-custom-red" href="#projects">Projects</a>
              <a onClick={() => closeMenu()} id="skills" className="menu-item my-2 text-white hover:text-custom-red" href="#skills">Skills</a>
              <a onClick={() => closeMenu()} id="testimonials" className="menu-item my-2 text-white hover:text-custom-red" href="#testimonials">Testimonials</a>
            </div>
          </Menu>
        </div>
          */}
      </div>
    </header>
  );
}

export default Navbar