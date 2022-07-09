import react from 'react';
import  './Task.css';
import axios from "axios" 
import {Link} from 'react-router-dom'

function Task(props){
  
    function deleteTask(id){

        axios.post('/delete_task',{ id: id }).then((res)=>{
            alert('Task deleted successfully');
            window.location.reload();
        })

    }

    return(
        <div className='task-container'>
            <h4>{props.id} ) {props.title} </h4>
            <p> Description : {props.description}</p>
            <p> Priority : {props.priority}</p>
            <p> Emoji : {props.emoji}</p>
            
            <p>

            <button className='delete-btn' onClick={(e)=>{deleteTask(props.id)}}> Delete</button>

            <Link to={`/update/${props.id}`} >
            <button className='update-btn'> Update</button>

            </Link>   
            
            </p>
        </div>
    )
}
 export default Task