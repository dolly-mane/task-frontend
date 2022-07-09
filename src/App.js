
import Task from "./Task/Task";
import axios from "axios";
import "./App.css";

import {Link} from "react-router-dom";

import {useState, useEffect} from 'react'

function App() {

  const [tasks , setTasks] = useState([])
 
  useEffect(() =>{

    axios.get('/tasks').then((response) =>{
      setTasks(response.data.data)
    })

  }, [])

  return (
    <div>
      
      <Link to="/add"><button className="newbtn" >Add New Task</button></Link>

      {
        tasks.map((task) =>{
          
          return (
          <Task id={task.id} 
          title={task.title} 
          description={task.description} 
          priority={task.priority} 
          emoji={task.emoji} />)
        })
      }
      
    </div>
  );
}

export default App;
