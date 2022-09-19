import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import Aos from "aos"
import "aos/dist/aos.css"
export default function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div  id="aboutme" className='aboutme-container'>
     
        
        <h1 data-aos="flip-right">About Me</h1>
       
     
        <div className='aboutme-details' data-aos="flip-right">
     <img src="profile.png" alt="" />
     <ul>
         <p>Aspiring Full-Stack Developer is adept in Masai School.
           skilled in database integration, 
           I have completed mechanical engineering from North Maharashtra University 
           and have 6 months of learning experience in web development.
           I am seeking Full-Stack Developer positions in your company.
            </p>
            <li>
             Full Stack web developer
            </li>
            <li>
            Interactive Front End as per the design

            </li> 
            <li>
            React 

            </li>
             <li>
            Redux for State Mnanagement
            </li> 
            </ul>
            </div>
         
        </div>
  )
}
