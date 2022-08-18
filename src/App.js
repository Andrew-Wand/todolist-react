import Header from "./Components/Header";
import Footer from "./Components/Footer";
import taskList from "./Components/taskList";
import Form from "./Components/Form";
import { useState } from "react";

function App(props) {
  
  
  
  const [tasks, setTasks] = useState(props.tasks);
  
  
 const addTask = (name) => {
    const newTask = {id: props.id + 1, name: name, completed: false};
    setTasks([...tasks, newTask])
  }
  
  
  
  
  
  
  
  return (
   <div className="App">
      <Header />
      <Form addTask = {addTask}/>

      <ul className="task-list">
      <taskList />
      </ul>
      

      <Footer />
   </div>
  );
}

export default App;
