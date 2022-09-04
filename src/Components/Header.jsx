import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import  DarkMode  from "../Components/DarkMode";

function Header() {
  
  
  const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />
  
  
return (
  
    <div className="header-container">
<div className="top-div"></div>
        <button className='info-btn'>
            <i>{infoIcon}</i>
        </button>
        <DarkMode />
        
       

        <h1 className="header-text">
            TASKS
        </h1>
        
    </div>
  )
}

export default Header