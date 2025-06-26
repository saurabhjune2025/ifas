import React from 'react'
import "./info.css"

const Info = (props) => {
  return (
    <div id='infoContainer'> 

        <img src={props.src} alt=""  id='infoimg'/>
        <p id='infodesc'>{props.desc}</p>
      
    </div>
  )
}

export default Info
