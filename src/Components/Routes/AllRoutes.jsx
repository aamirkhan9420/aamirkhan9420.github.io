import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import ToolsAndSkills from '../ToolsAndSkills/ToolsAndSkills'

export default function AllRoutes({props}) {
let {AboutMeRef,ContactRef,toolRef,projectsRef}=props
return(
    <div>
        <Routes>
        
        

            <Route path='/aboutme' element={<AboutMe AboutMeRef={AboutMeRef}/>}/>
            <Route path='/contactme'  element={ <ContactMe ContactRef={ContactRef}/>} />
            <Route  path='/toolsandskill'element={ <ToolsAndSkills toolRef={toolRef}/>}/>
            <Route  path='/project'element={ <Projects projects={projectsRef}/>}/>
        </Routes>
    </div>
  )
}
