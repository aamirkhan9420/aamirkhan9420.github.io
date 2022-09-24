import React from 'react'
// import AboutMe from '../AboutMe/AboutMe'
// import ContactMe from '../ContactMe/ContactMe'
import Logo from '../Logo/Logo'
// import Projects from '../Projects/Projects'
// import ToolsAndSkills from '../ToolsAndSkills/ToolsAndSkills'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'

// import { NavLink } from 'react-bootstrap'
import { HashLink as NavLink } from 'react-router-hash-link'

export default function Navbar() {
    let [show, setShow] = useState(false)
    let links = [{ path: "#aboutme", title: "AboutMe" }, { path: "#project", title: "Projects" },{ path: "#github-calendar", title: "GitHub Calendar" }, { path: "#statistic", title: "Statistic" },{ path: "#toolsandskill", title: "Tools & Skills" }, { path: "#Contact", title: "Contact Me" }, ]


    return (
        <div className='navbar-container'>
         
            <div className='navbar-parent'>
                <div >
                    <Logo />
                </div>
             
                <div className={ show ?'hide-option': 'navbar-link'} >

                    {links.map((el) => (
                         
                        <NavLink style={{color:"white", fontsize:"25px"}} key={el.path} smooth to={el.path} >
                            {el.title}
                        </NavLink>
                       
                    ))} 

  




                </div>

                <div className='hamberger-menu' onClick={() => setShow(!show)}>
                    <a href="#hgh">
                        <GiHamburgerMenu />
                    </a>
                </div>



            </div>
        </div>
    )
}
