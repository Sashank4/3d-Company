import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Img1 from '../Assets/night.jpg'

const About = () => {
  return (
        <>
        <Navbar/>
    <Hero
    
        cName = "heroMid"
        imgUrl = {Img1}
        title = "About"
        btnClass = 'hide'
    />
    
        </>
    )
}

export default About