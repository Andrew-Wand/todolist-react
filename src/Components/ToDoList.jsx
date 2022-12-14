import React, { useEffect } from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
function ToDoList(props) {

  const penIcon = <FontAwesomeIcon icon={faPen} />
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />

  
  
  
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState('');
  
  const [completedTask, setCompletedTask] = useState(props.completed);




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

  const handleCheckbox = () => {
    setCompletedTask(!completedTask);
    
  }

  const showEdit = (
    <form action="submit" className="edit-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChange} defaultValue={props.name} className='edit-input' />
        </div>

        <div>
          <button type='submit' className='task-btn'>Save</button>

          <button type='button' className='task-btn' onClick={() => setIsEdit(false)}>Cancel</button>
        </div>
        
    
        
    </form>
)



  const showTaskList = (



    <div className="task-container">
      
      <div className="left-side">
        <input id={props.id} 
              type="checkbox" 
              defaultChecked={props.completed} 
              onChange={() => props.toggleTaskCompleted(props.id)}
              className={completedTask ? 'taskComplete checkbox' : 'checkbox'}
              onClick={handleCheckbox}
               />
          <label  htmlFor={props.id} className={completedTask ? 'taskComplete todo-label' : 'todo-label'}>{props.name}</label>
          
      </div>
      
    
    
    <div className="right-side">
      <button className="task-btn" onClick={() => setIsEdit(true)}>
          <i>{penIcon}</i>
      </button>
      <button className="task-btn" onClick={() => props.deleteTask(props.id)}>
          
          <i>{trashIcon}</i>

      </button>
    </div>
        
        
      
      
      
    </div>
);
    
  
  


return <li className="task-item">{isEdit ? showEdit : showTaskList}</li>;
    
  
}

export default ToDoList