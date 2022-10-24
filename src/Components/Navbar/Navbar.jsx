import React from 'react'

import Logo from '../Logo/Logo'
import "./Navbar.css"
// import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { NavLink } from 'react-bootstrap'
import { HashLink as NavLink } from 'react-router-hash-link'



export default function Navbar() {

    let [isWindo, setWindo] = useState()

    let links = [{ path: "#home", title: "Home" }, { path: "#aboutme", title: "AboutMe" }, { path:"#project", title: "Projects" }, { path: "#github-calendar", title:"GitHub Calendar" }, { path: "#statistic", title: "Statistic" }, { path: "#toolsandskill", title: "Tools & Skills" }, { path: "#Contact", title: "Contact Me" },]


    window.addEventListener('resize', function () {
        setWindo(window.innerWidth)
    });

    return (
        <div className='navbar-container'>

            <div className='navbar-parent'>
                <div >
                    <Logo />
                </div>

                {window.innerWidth > 912 && <div className='navbar-link'>

                    {links.map((el) => (

                        <NavLink style={{ color: "white", fontsize: "25px" }} key={el.path} smooth to={el.path} >
                            {el.title}


                        </NavLink>

                    ))}
                </div>}
                {/* backgroundColor="#0D1117" */}
                {window.innerWidth < 913 && <div >
               
                    <DropdownButton id="dropdown-item-button" title="MENU">
                  <Dropdown.Item  id="dropdown" >
                        {links.map((el) => (
                            
                            
                                <NavLink style={{ color: "white", fontsize: "25px" }} key={el.path} smooth to={el.path} >

                                  <h3>{el.title}</h3>  
                                </NavLink>
                          
                        ))}
           </Dropdown.Item>
                    </DropdownButton>  
                
                </div>}

              


            </div>
        </div>
    )
}
