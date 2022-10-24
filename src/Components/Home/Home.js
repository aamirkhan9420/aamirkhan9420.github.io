import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import ToolsAndSkills from '../ToolsAndSkills/ToolsAndSkills'
import Footer from './Footer/Footer'
import ScrollToTop from "react-scroll-to-top"
import "./Home.css"
import Profile from './Profile/Profile'
import "../AboutMe/AboutMe.css"
import "../Projects/Projects.css"
import "../ToolsAndSkills/ToolsAndSkills.css"
import Calendar from '../GithubCalendar/Calendar'
import Statistic from '../Statistic/Statistic'

export default function Home() {
  return (
<div id="home">
  <ScrollToTop smooth className='scrolltop-icon'/> 
   <Navbar />
    <div className='home-container'>
 
  <Profile />
  <Footer />
=
  </div>
  <div className="aboutme-container">
 <AboutMe />
 </div>
<div className="projects-container1">

 <Projects />
</div>
<div className='calendar-container1'>
  <Calendar />
</div>
<div className='statistic-container1'>
  <Statistic />
</div>
<div className='toolsandskill-container'>
  <ToolsAndSkills />
</div>

<div className='contactme-container'>
  <ContactMe />
</div>



  </div>


    
  )
}
