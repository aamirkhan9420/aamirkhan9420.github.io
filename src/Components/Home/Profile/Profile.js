import React from 'react'
import Typical from "react-typical"
import  "./Profile.css"
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href='https://www.facebook.com/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/direct/inbox/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.instagram.com/direct/inbox/'>
                            <i className='fa fa-twitter'></i>
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
                                        "Full Stack  Devloper",
                                        1500,
                                        "Best Algorithm ",
                                        1500,
                                        "MERN Web Devloper",
                                        1500,
                                    ]} />
                            </h1>
                            <span className='profile-role-tagline'>
                                Expert in building the website with front and backend operation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="aamirkhan.pdf" download={"Aamir aamirkhan.pdf"}>
                            <button className='btn highlighted-btn'>
                                Download Resume
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
