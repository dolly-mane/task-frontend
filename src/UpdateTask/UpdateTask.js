import React, {useState ,useEffect} from 'react';
import "./UpdateTask.css"
import axios from 'axios'
import {useParams} from "react-router-dom"

function UpdateTask() {

    const {id} = useParams()
    
  
    const [title, setTitle] = useState('');
    const [description, setDescription] =useState('');
    const [priority, setPriority] = useState('');
    const [emoji, setEmoji] = useState('');

    
     useEffect( ( )=>{

        axios.post('/get_task',{id: id}).then((res)=>{

         setTitle(res.data.data.title);
         setDescription(res.data.data.description);
         setPriority(res.data.data.priority);
         setEmoji(res.data.data.emoji)

        })
    },[id] )


    function updateTask(){
        axios.post('/update_task', 
        {
         id: id,
         title: title,
         description: description,
         priority: priority,
         emoji: emoji
   
        }).then((res)=>{
            alert("Task Updated Successfully..!")
         window.location="/"
        })
    }

    return (
        <div>
            
            <form className='form-update'>
            <h1>UpdateTask :{id}</h1>

            Title: <input value={title} type="text" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            Description: <input value={description} type="text" onChange={(e)=>{setDescription(e.target.value)}}/><br/>
            Priority: <input value={priority} type="text" onChange={(e)=>{setPriority(e.target.value)}}/><br/>
            Emoji: <input  value={emoji} type="text" onChange={(e)=>{setEmoji(e.target.value)}}/><br/>
                 <br></br>

            <button className="update-btn" type="button" onClick={updateTask} >Update Task</button>
            </form>
        </div>
    )
}

export default UpdateTask