import React from 'react'
import "./MainHeader.css"

const MainHeader = () => {
  return (
    <div>
        <div class='container'>
          <div id='image'>
              <img src="src/Images/ifas.png" alt="" id='imges'/>
              <img src="src/Images/ifasText.png" alt="" id='imges'/>
           </div>
           <div id='link'>
               <li>Online Program ▼ </li>
               <li>Classroom Program ▼</li>
               <li>Study Material ▼</li>
               <li>Test Series ▼</li>
               <button id='login-btn'>Login</button>


           </div>
      </div>
    </div>
  )
}

export default MainHeader
