import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Img1 from '../Assets/1.jpg'

const Service = () => {
  return (
    <>
    <Navbar/>
    <Hero
    
        cName = "heroMid"
        imgUrl = {Img1}
        title = "Services"
        btnClass = 'hide'
    />
    </>
  )
}

export default Service