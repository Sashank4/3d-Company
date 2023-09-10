import React from 'react'
import '../components/HeroStyles.css'

const Hero = (props) => {
  return (
    <div className={props.cName} >
        <img alt='HeroImg' src={props.imgUrl}/>
        <div className='heroText'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
    </div>
  )
}

export default Hero