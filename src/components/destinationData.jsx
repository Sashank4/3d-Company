import React from 'react'

const destinationData = (props) => {
  return (
    <>    
    <div className={props.cName}>
    <div className='desText'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        </div>
    <div className='image'>
        <img alt='Img1' src={props.Img1}/>
        <img alt='Img2' src = {props.Img2}/>
    </div>
    </div>
    </>

  )
}

export default destinationData