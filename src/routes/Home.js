import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Img1 from '../Assets/12.jpg'
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
        title = "Your journey your story"
        text = "Choose your faorite destination"
        buttonText = "Travel Plan"
        url = ''
        btnClass = 'show'
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home