import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
function Form(props) {

    // Icons

    const addIcon = <FontAwesomeIcon icon={faCirclePlus} />


    const [name, setName] = useState('');
    

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
                placeholder='Add Item' 
                />
            <button className="add-btn" type='submit'>
                    <i>{addIcon}</i>
            </button>
        </form>
   
  )
}

export default Form