import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";
import { useState } from "react";
import { nanoid } from 'nanoid'

function App(props) {
  
  
  
  const [tasks, setTasks] = useState(props.tasks);
  
  
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
       
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }




  
  const taskList = tasks.map(task => (
    <ToDoList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask = {deleteTask}
    />
  ));
  
  
  
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  const remainingText = `${taskList.length} tasks remaining`;

  
  
  
  
  return (
   <div className="App">
      <Header />
      <Form addTask = {addTask}/>
      <h2 className="remaining-text">
        {remainingText}
      </h2>

      <ul className="task-list" role="list">
        {taskList}
      </ul>
      

      <Footer />
   </div>
  );
}

export default App;
