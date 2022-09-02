import React, { useState } from 'react'



function FilterButton(props) {

  const [isActive, setIsActive] = useState();
 
  const handleClick = () => {
    
    setIsActive(current => !current);

    // 👇️ or set to true
    // if (!isActive) {
    //   setIsActive(true);
    // } 

    

  };


  
 
  return (

   
      <button 
   
      style={{
        backgroundColor: isActive ? 'salmon' : 'gray',
        color: isActive ? 'white' : '',
      }}
      className="filter-btn" 
      type='button' 
      aria-pressed={props.isPressed} 
      onClick={() => {props.setFilter(props.name); handleClick(); }}>
  
      
        <span>{props.name} </span>
    </button>
      
    
  )
}

export default FilterButton