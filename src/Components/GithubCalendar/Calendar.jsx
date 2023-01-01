import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "./Calendar.css"
export default function Calendar() {
  return (
    <div className="calendar-container" id='github-calendar'>
       
    <h1 >  GitHub Calendar</h1>
     <div  className="calendar-parent">
    
      
          <GitHubCalendar  
    style={{margin:"auto"}}
    username="aamirkhan9420"
    year={new Date().GitHubCalendar}
   
    />  
     </div>
     <div id="stats_container">
      <img   src="https://github-readme-stats.vercel.app/api?username=aamirkhan9420&show_icons=true&locale=en" />
          <img id="image1" src="https://github-readme-streak-stats.herokuapp.com/?user=aamirkhan9420"/>
      </div>
 
    </div>
  )
}
