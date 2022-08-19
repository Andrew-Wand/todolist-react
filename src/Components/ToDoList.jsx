import React from 'react'
import { useState } from 'react';

function ToDoList(props) {
  
  
  
  const [isEdit, setIsEdit] = useState(false);


  const handleSubmit = () => {
      
  }

  const showEdit = (
      <form action="submit" className="edit-form" onSubmit={handleSubmit}>
          
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
        <button className="delete-btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
      
      
    </div>
);
    
  
  


return <li className="task-item">{showTaskList}</li>;
    
  
}

export default ToDoList