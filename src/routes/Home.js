import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Img1 from '../Assets/Hero.jpg'
import Destination from '../components/destination.jsx'
import Trip from '../components/trip'
import Footer from '../components/Footer.js'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
    
        cName = "hero"
        imgUrl = {Img1}
        title = "3D design Printing"
        text = "3D printing services done here"
        buttonText = "Travel Plan"
        url = ''
        btnClass = 'hide'
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home