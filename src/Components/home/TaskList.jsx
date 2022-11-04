import axios from 'axios'
import {RiDeleteBack2Fill} from 'react-icons/ri'



 const TaskList = ({task,getTask}) => {
  
const handleDlt=async(id)=>{
  const url="https://6363964037f2167d6f7d3e8c.mockapi.io/task";
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(error)
  }
getTask();

}


  return (
    <div className='taskList'>
        
        {task.map((item)=>{
            const{id,task,date}=item
            return(
                    <div key={id}  className=" map-div d-flex justify-content-between mt-2  p-2 " >  
                    <div>  
                    <h4>{task}</h4>
                    <p>{date}</p>
                    
                    </div>
           
            
<RiDeleteBack2Fill onClick={()=>handleDlt(id)} style={{cursor:"pointer" , marginRight:"20px",marginTop:"0.8rem" ,fontSize:"2rem" }}/>
            </div>
            )
        })} 
     
        
     
    </div>
  )
}


export default TaskList;