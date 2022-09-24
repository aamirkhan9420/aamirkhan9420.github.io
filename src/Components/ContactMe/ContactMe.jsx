import React, { useEffect } from 'react'
import Aos from "aos"


import "./ContactMe.css"
import { FiMail } from "react-icons/fi";
import Email from './Email';
export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id='Contact' className="contactme-container" >

      <h1 data-aos="flip-right">Contact Me</h1>
      <div className='contactme-parent' >
        <div className='socialmedia-div'>
          <h3 className='getintouch'>Get In TOuch</h3>

          <div className='media-icons' >

            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100027938010996'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/mr.erk5789/'>
              <i className='fa fa-instagram'></i>
            </a>
            <a target='_blank' rel="noreferrer" href='https://twitter.com/AamirkhanZ9373'>
              <i className='fa fa-twitter'></i>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/aamir-khan-26899024b/'>
              <i className="fa fa-linkedin"></i>
            </a>
            <a target='_blank' rel="noreferrer" href='https://github.com/aamirkhan9420'>
              <i className="fa fa-github"></i>
            </a>

          </div>
        <h4 className='emialaddress'>E-Mail  :<span>aamirkhan.z9373@gmail.com</span> </h4>
        </div>
        <div className='emailbox-image-div'>
          <div className='image-div'>
            <h3 className='sende-your-emial-h3'>
              Sende Your <span className='email-span'>Email</span> Here<span className='blink'> <FiMail /></span>

            </h3>
            <img src="mailz.jpeg" alt="mailz" />
          </div>
          <div className='email-box'>
            <Email />
          </div>
        </div>

      </div>
    </div>
  )
}
