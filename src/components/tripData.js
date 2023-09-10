import React from 'react'
import './tripStyles.css'

const tripData = (props) => {
  return (
    <div className='tCard'>
        <div className='tImage'>
            <img alt='Img' src={props.Img}/>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default tripData