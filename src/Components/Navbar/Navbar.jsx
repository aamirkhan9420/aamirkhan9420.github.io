import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Logo from '../Logo/Logo'
import Projects from '../Projects/Projects'
import ToolsAndSkills from '../ToolsAndSkills/ToolsAndSkills'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-parent'>
     <div >
        <Logo />
        </div> 
        <div className='navbar-link'>
<AboutMe />
<ContactMe />
<ToolsAndSkills />
<Projects />
            </div>   
            <div className='hamberger-menu'>
                <a href="#hgh">
          <GiHamburgerMenu />
                </a>
                </div>    

    
        </div>
    </div>
  )
}
