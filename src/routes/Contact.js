import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Img1 from '../Assets/2.jpg'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero
    
        cName = "heroMid"
        imgUrl = {Img1}
        title = "Contact"
        btnClass = 'hide'
    />
    </>
  )
}

export default Contact