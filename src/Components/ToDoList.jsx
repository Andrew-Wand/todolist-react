import React from 'react'

function ToDoList(props) {
  
  
const showTaskList = (
    <div className="task-list">
      <div>
        <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
        <label htmlFor={props.id} className="todo-label">{props.name}</label>
      </div>
      
      
    </div>
);
    
  
  


return <li className="task-item">{showTaskList}</li>;
    
  
}

export default ToDoList