import '../components/destination.css'
import Img1 from '../Assets/1.jpg'
import Img2 from '../Assets/2.jpg'
import Img3 from '../Assets/3.jpg'
import Img4 from '../Assets/4.jpg'
import DestinationData from './destinationData'
import React from 'react'

const destination = () => {
  return (
    <>
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        

    <DestinationData
        cName = 'firstDes'
        heading = 'Taal Volcano, Batangas'
        text = 'One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. 
        If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. 
        Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, 
        so plan for an early morning trip, and then unwind with some bulalo before heading back home!'
        Img1 = {Img1}
        Img2 = {Img2}
    />

    <DestinationData
        cName = 'firstDesReverse'
        heading = 'Mt.Daguldul, Batangas'
        text = 'If you’re looking for a hike that’s a little more challenging but still good for a 
        beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll 
        start your hike from the beach and pass through tropical forest, different rock formations, 
        and small streams. There’s a small store halfway up the trail where you can take a break and 
        drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. 
        Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.'
        Img1 = {Img3}
        Img2 = {Img4}
    />
        
    </div>

    
    </>
  )
}

export default destination