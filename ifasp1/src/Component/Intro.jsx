import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div id='mainComponent'>
        <div id='Comp1'>

        <div>
        <h1 class='introtext'>Best Destination for <br />
        Complete Exam <br />Preparation
        </h1>
        
        </div>

        <div id='info'>

          

            <select name="" id="selectCountry" disabled>
              <option value="+91">+91</option>
            </select>
            <input type="number" placeholder='    Enter phone number' id='inputno'/>
            <button id='getStarted'>Get Started</button>
            <p>indias <label id='highlight'>No 1 AI Based App</label>for IIT-Jam,CSIR,UGC-NET,GATE & Other
             <br />Competitive Examination</p>
            

        </div>

        </div>

        
        
        



       <img src="https://ifasonline.com/static/media/KC-Sir-Web-Banner.df6a7eef372c8d3e30d4.webp" alt="" id='imges1' />


      


       
      
    </div>
  )
}

export default Intro
