import React, { useState } from 'react'



function FilterButton(props) {


  return (

   
      <button 
      id={props.id}
      style={{
        backgroundColor: props.isPressed ? '#5579A4' : 'white',
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