import React from 'react'
import "./Projects.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
export default function Projects() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='projects-title' id='project'>
      <h1 data-aos="flip-right" style={{"border":"none"}}>PROJECTS</h1>
    <div   className="projects-container">
    
      <div className="projects-parent-div1">
  
        <div data-aos="fade" className='projects-parent-div1-div1'>  
        <img src="cricket.png" alt="" />
        <div className='projects-detail-parent-div1-div1'>
          <a data-aos="fade" href="https://github.com/Nnishks/smooth-book-4341/tree/main/pagelink" target='_blank' rel="noreferrer">
            <button className='btn primary-btn'>GitHub</button>
            </a>
         
        <a data-aos="fade" href="https://smooth-book-cricket-com.netlify.app/" target='_blank' rel="noreferrer">
          <button className='btn highlighted-btn'>SEE</button>
          </a> 

        
        </div>
        </div>
        <div data-aos="fade" className='project-name-details'>
         <h1>Cricket.Com</h1> 
          <p>Cricket.com provides live cricket scores updates, match schedules & results, latest news & international, domestic & T20 series </p>
           <p className='p2'>A collabrative project, built in 5 days by a team of 5 members.</p>
           <p className='p3'><span>Area of Responsibility:</span>Criclytics & Schedule page</p>
          <h3> <span>Tech Stack :</span> HTML | CSS3 | JAVASCRIPT</h3>
           
        </div>
 

      </div>
     
      <div className="projects-parent-div2">
      <div data-aos="fade" className='project-name-details'>
         <h1>DermStore.Com</h1> 
          <p>Cricket.com provides live cricket scores updates, match schedules & results, latest news & international, domestic & T20 series </p>
           <p className='p2'>A collabrative project, built in 5 days by a team of 5 members.</p>
           <p className='p3'><span>Area of Responsibility:</span>Criclytics & Schedule page</p>
          <h3> <span>Tech Stack :</span> HTML | CSS3 | JAVASCRIPT</h3>
           
        </div>
        <div data-aos="fade" className='projects-parent-div2-div1'>
          <img src="dermstore.png" alt="" />
          <div className='projects-detail-parent-div2-div1'>
            <a data-aos="fade" href="https://github.com/spidey52/dermstore-clone" target='_blank' rel="noreferrer">
          <button className='btn primary-btn'>GitHub</button>
          </a>
          <a data-aos="fade" href="https://dermstore-web18.netlify.app/" target='_blank' rel="noreferrer">
            <button className='btn highlighted-btn'>SEE</button>
            </a>
         
         
        </div>
        </div>
        
      </div>
      <div className="projects-parent-div3">
        <div data-aos="fade"  className='projects-parent-div3-div1'>
        <img src="licious.png" alt="" />
          <div className='projects-detail-parent-div2-div1'>
            <a data-aos="fade" href="https://github.com/soumyanil22/LisciousProject" target='_blank' rel="noreferrer">
              <button className='btn primary-btn'>GitHub</button>
              </a>
          <a  data-aos="fade" href="https://enchanting-croquembouche-b7b619.netlify.app/" target='_blank' rel="noreferrer">
              <button className='btn highlighted-btn'>SEE</button>
          </a>
       
        </div>
        </div>
        <div data-aos="fade" className='project-name-details'>
         <h1>Licious.Com</h1> 
          <p className='p2'>Licious is the ultimate destination to buy premium and high-quality fresh seafood and meat online</p>
           <p className='p3'>A collabrative project, built in 5 days by a team of 5 members.</p>
           <p><span>Area of Responsibility:</span>Cart section</p>
          <h3> <span>Tech Stack :</span> HTML | CSS3 | JAVASCRIPT</h3>
           
        </div>
      </div>
      <div className="projects-parent-div2">
      <div data-aos="fade" className='project-name-details'>
         <h1>Masai-LMS</h1> 
          <p> Masai-LMS, on this platform students can see lectures and assignments and admin can add and remove lectures, assignmnents and students. </p>
           <p className='p2'> project built in 5 days and this is Individual project</p>
           <p className='p3'><span>Area of Responsibility:</span>Criclytics & Schedule page</p>
          <h3> <span>Tech Stack :</span> HTML | CSS3 | JAVASCRIPT </h3>
           
        </div>
        <div data-aos="fade" className='projects-parent-div2-div1'>
          <img src="masai_lms.png" alt="" />
          <div className='projects-detail-parent-div2-div1'>
            <a data-aos="fade" href="https://github.com/aamirkhan9420/Masai-lms" target='_blank' rel="noreferrer">
          <button className='btn primary-btn'>GitHub</button>
          </a>
          <a data-aos="fade" href="https://mellifluous-kheer-2660da.netlify.app/" target='_blank' rel="noreferrer">
            <button className='btn highlighted-btn'>SEE</button>
            </a>
         
         
        </div>
        </div>
        
      </div>

    </div>
    </div>
  )
}
