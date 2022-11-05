import React from 'react'
import Typical from "react-typical"
// import AboutMe from '../../AboutMe/AboutMe'
import "./Profile.css"

import { BiArrowToBottom } from "react-icons/bi";
export default function Profile() {
    return (
        <div className='profile-container' id='contactme'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
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

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'M <span className='highlighted-text'>Aamir Khan</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Devloper",
                                        1500,
                                        "Full Stack Devloper",
                                        1500,
                                        "Best In Algorithms ",
                                        1500,
                                        "MERN Web Devloper",
                                        1500,
                                    ]} />
                            </h1>
                            <span className='profile-role-tagline' >
                                Expert in building the website with front and backend operation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>

                        <a href="Aamir-Khan-Resume.pdf" download={"Aamir-Khan-Resume"}>
                            <button className='btn highlighted-btn'>
                                Resume <BiArrowToBottom fontSize={"20px"} />
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-backround'>

                    </div>

                </div>

            </div>



        </div>
    )
}
