import React, { useState } from 'react'



function FilterButton(props) {


  return (

   
      <button 
      id={props.id}
      style={{
        backgroundColor: props.isPressed ? 'salmon' : 'gray',
        color: props.isPressed ? 'white' : 'black',
        textDecoration: props.isPressed ? 'underline' : 'none'
      }}
      className="filter-btn" 
      type='button' 
      aria-pressed={props.isPressed} 
      onClick={() => {props.setFilter(props.name); }}>
  
      
        <span>{props.name} </span>
    </button>
      
    
  )
}

export default FilterButton