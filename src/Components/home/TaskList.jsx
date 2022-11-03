import axios from 'axios'
import {RiDeleteBack2Fill} from 'react-icons/ri'



 const TaskList = (task,getTask) => {
  
const dlt=async(id)=>{
  const url="https://6363964037f2167d6f7d3e8c.mockapi.io/task";
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    
  }
getTask();

}


  return (
    <div className='taskList'>
        
        {task.task.map((item)=>{
            const{id,task,date}=item
            return(
                    <div key={id}  className=" map-div d-flex justify-content-between mt-2  p-2 bg-secondary" >  
                    <div>  
                    <h4>{task}</h4>
                    <p>{date}</p>
                    </div>
           
            
<RiDeleteBack2Fill onClick={()=>{dlt(id)}} style={{cursor:"pointer" , marginRight:"20px" ,fontSize:"2rem" , boxShadow:"2px 2px 2px 2px"}}/>
            </div>
            )
        })} 
     
        
     
    </div>
  )
}


export default TaskList;