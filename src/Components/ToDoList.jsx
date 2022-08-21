import React from 'react'
import { useState } from 'react';

function ToDoList(props) {
  
  
  
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) {
        return;
    } 
    props.editTask(props.id, newName);
    setNewName("");
    
    setIsEdit(false);
  }

  const handleChange = (e) => {
      setNewName(e.target.value);
  }

  const showEdit = (
    <form action="submit" className="edit-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChange} defaultValue={props.name} />
        </div>
        <button type='submit'>Save</button>

        <button type='button' onClick={() => setIsEdit(false)}>Cancel</button>

        
    </form>
)



  const showTaskList = (
    <div className="task-container">
      <div>
        <input id={props.id} 
              type="checkbox" 
              defaultChecked={props.completed} 
              onChange={() => props.toggleTaskCompleted(props.id)} />
        <label htmlFor={props.id} className="todo-label">{props.name}</label>
        <button className="edit-btn" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="delete-btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
      
      
    </div>
);
    
  
  


return <li className="task-item">{isEdit ? showEdit : showTaskList}</li>;
    
  
}

export default ToDoList