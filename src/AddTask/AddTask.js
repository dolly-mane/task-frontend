import React ,{useState} from 'react';
import axios from 'axios'
import './AddTask.css';

function AddTask() {

  const [id,setId] = useState('');
  const [title,setTitle] = useState('');
  const [description,setDescription] =useState('');
  const [priority,setPriority] = useState('');
  const [emoji,setEmoji] = useState('');

  function addTask(){
     axios.post('/tasks', 
     {
      id: id,
      title: title,
      description: description,
      priority: priority,
      emoji: emoji,

     }).then((res)=>{
      alert("task added successfully")
      window.location="/"
     })
  }

    return(
         <div className='add-task-container'>
         
          <form className='form-design'>

          <h1 >Add Task</h1>

            ID: <input  value={id} onChange={(e)=>{setId(e.target.value)}}/><br/>
            Title: <input value={title}  onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            Description: <input value={description}  onChange={(e)=>{setDescription(e.target.value)}}/><br/>
            Priority: <input value={priority}  onChange={(e)=>{setPriority(e.target.value)}}/><br/>
            Emoji: <input  value={emoji} onChange={(e)=>{setEmoji(e.target.value)}}/><br/>
                

            <button  className="add-btn " type="button" onClick={addTask} >Add Task</button>
          </form>

         </div>
       ) 
};


export default AddTask;