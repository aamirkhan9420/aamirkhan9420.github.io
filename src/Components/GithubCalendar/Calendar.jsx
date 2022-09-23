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
    year={new Date().getFullYear()}
   
    />  
     </div>
   
 
    </div>
  )
}
