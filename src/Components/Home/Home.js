import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer/Footer'

import "./Home.css"
import Profile from './Profile/Profile'
export default function Home() {
  return (
    <div className='home-container'>
        <Navbar />
  <Profile />
  <Footer />
    </div>
  )
}
