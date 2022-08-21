import React, { useState, useEffect } from 'react'

function Form(props) {

    const [name, setName] = useState('')
   
    
 
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            return;
        } 
        props.addTask(name);
        setName("");
       
        

    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

  


  return (
    
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" 
                id='new-todo-input' 
                className="task-input" 
                value={name} 
                onChange={handleChange} 
                name='text' 
                />
            <button className="add-btn" type='submit'>Add</button>
        </form>
   
  )
}

export default Form