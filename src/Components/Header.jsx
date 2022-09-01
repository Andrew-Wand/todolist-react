import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Header() {
  
  
  const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />
  
  
return (
    
    <div className="header-container">

        <button className='info-btn'>
            <i>{infoIcon}</i>
        </button>
           
        
       

        <h1 className="header-text">
            TASKS
        </h1>
        
    </div>
  )
}

export default Header