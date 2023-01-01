import React from 'react'
import "./Projects.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
export default function Projects() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='projects-title' id='project'>
      <h1 data-aos="flip-right" style={{ "border": "none" }}>PROJECTS</h1>
    
      <div className='project_container_main'>
        <div className='card'>
          <img src="espn.png" alt="" />
          <div className='card_detail_parent'>
            <div className='card_detail_main'>
              <div>
              <h1>ESPN cricinfo</h1>
              <p>ESPN cricinfo is a sports news website exclusively for the game of cricket. The site features news, articles, live coverage of cricket matches.</p>
              <p className='p2'>A collabrative project, built in 5 days by a team of 4 members.</p>
              <p className='p3'><span>Area of Responsibility: </span>Home page, Live score page News page, Single news page, Teams page</p>
              <h3> <span>Tech Stack : </span> ReactJs | Redux | JavaScript | Chakra | React icons | Css3</h3>
              </div>
              <div className='btn_div'>
                <a href="https://github.com/Vishal-508/ceaseless-zebra-5788" target="_blank" rel="noopener noreferrer">
                  <button className='btn primary-btn'>GitHub</button>
                </a>

                <a href="https://ceaseless-zebra-5788.vercel.app/" target='_blank' rel="noreferrer">
                  <button className='btn highlighted-btn'>SEE</button>
                </a>


              </div>
            </div>

          </div>
        </div>
        <div className='card'>
          <img src="exprobook.png" alt="" />
          <div className='card_detail_parent'>
            <div className='card_detail_main'>
              <div> 
              <h1>Exprobook</h1>
              <p>Exprobook.com is online travel shopping plateform. The website can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.
</p>
              <p className='p2'>A collabrative project, built in 5 days by a team of 4 members.</p>
              <p className='p3'><span>Area of Responsibility: </span>Home page,Signup,Login</p>
              <h3> <span>Tech Stack : </span> ReactJs | JavaScript | Chakra | React icons | Css3 | Express</h3>
              </div>
              <div className='btn_div'>
                <a href="https://github.com/aamirkhan9420/-roomy-tree-8865" target="_blank" rel="noopener noreferrer">
                  <button className='btn primary-btn'>GitHub</button>
                </a>

                <a href="https://exprobook.netlify.app/" target='_blank' rel="noreferrer">
                  <button className='btn highlighted-btn'>SEE</button>
                </a>


              </div>
            </div>

          </div>
        </div>
        <div className='card'>
          <img src="licious.png" alt="" />
          <div className='card_detail_parent'>
            <div className='card_detail_main'>     
            <div>         
              <h1>Licious.Com</h1>
              <p>Licious is the destination to buy high-quality fresh seafood and meat online.</p>
              <p className='p2'>Individual project.</p>
              <p className='p3'><span>Area of Responsibility: </span>All pages</p>
              <h3> <span>Tech Stack : </span> ReactJs | Redux | JavaScript | Chakra | React icons | Css3</h3>
              </div>
              <div className='btn_div'>
                <a href="https://github.com/aamirkhan9420/Licious_food_Platform" target="_blank" rel="noopener noreferrer">
                  <button className='btn primary-btn'>GitHub</button>
                </a>

                <a href="https://my-licious.vercel.app/" target='_blank' rel="noreferrer">
                  <button className='btn highlighted-btn'>SEE</button>
                </a>


              </div>
            </div>

          </div>
        </div>
        <div className='card'>
          <img src="masai_lms.png" alt="" />
          <div className='card_detail_parent'>
            <div className='card_detail_main'>
              <div>
              <h1>Masai-LMS</h1>
              <p> Masai-LMS, on this platform students can see lectures and assignments and admin can add and remove lectures, assignmnents and students. </p>
              <p className='p2'>Individual project.</p>
              <p className='p3'><span>Area of Responsibility: </span> All pages</p>
              <h3> <span>Tech Stack : </span> HTML | CSS3 | JAVASCRIPT</h3>
              </div>
              <div className='btn_div'>
                <a href="https://github.com/aamirkhan9420/Masai-lms" target="_blank" rel="noopener noreferrer">
                  <button className='btn primary-btn'>GitHub</button>
                </a>

                <a href="https://mellifluous-kheer-2660da.netlify.app/" target='_blank' rel="noreferrer">
                  <button className='btn highlighted-btn'>SEE</button>
                </a>


              </div>
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}
