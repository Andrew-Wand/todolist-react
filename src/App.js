import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";
import FilterButton from "./Components/FilterButton";
import SearchBar from "./Components/SearchBar";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'


const FILTER_MAP = {
  All: () => true,
  Incomplete: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);




function App(props) {
  
  
  
  const [tasks, setTasks] = useState(props.tasks);

  const [filter, setFilter] = useState('All');




 

  const filterList = FILTER_NAMES.map((name) => (
      <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>
  ));
  
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
       
        return {...task, completed: !task.completed}
      }
      return task;
    });

    window.localStorage.setItem('items', JSON.stringify(updatedTasks))
    setTasks(updatedTasks);
  }

  
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    window.localStorage.setItem('items', JSON.stringify(remainingTasks))
    setTasks(remainingTasks);

  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    })

    window.localStorage.setItem('items', JSON.stringify(editedTaskList))
    setTasks(editedTaskList)
  }



  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  
  .map(task => (
    <ToDoList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask = {deleteTask}
      editTask = {editTask}
    />

  )) ;
  
  

  // function search(search){
  //   let currentTodos = [];
  //   let newList = [];
  //   if (search !== "") {
  //     currentTodos = tasks;
  //     newList = currentTodos.filter(todo => {
  //       const lc = todo.name.toLowerCase();
  //       const filter = search.toLowerCase();
  //       return lc.includes(filter);

        
  //     })

  //     setTasks(newList)
      
  //   } else if (search === '') {
  //     setTasks(props.tasks);
     
  //   }
    
    

 
  // }




  

  
  
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    
    const updatedTasks = [...tasks, newTask];
    
    

    window.localStorage.setItem('items', JSON.stringify(updatedTasks))
    setTasks(current => [...current, newTask]);
  }
  
  const remainingText = `${taskList.length} tasks remaining`;

  
  
  
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('items'))
    if (getTodos) {
      setTasks(getTodos)
    }
  }, [])
  
  
  return (
   <div className="App">
      <Header />

    
      {/* <SearchBar search={search} /> */}
      <Form addTask = {addTask}/>


      <section className="list-title">

        <h3 className="remaining-text">TO DO</h3>

        <h2 className="remaining-text">
          {remainingText}
        </h2>


      </section>
      
      <section className="filter-list">
        {filterList}
      </section>
      
      <ul className="task-list">
        {taskList}
      </ul>
      

      <Footer />
   </div>
  );
}

export default App;
