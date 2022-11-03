
import { Form ,Button} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const AddTask = ({getTask}) => {
const [task, setTask] = useState("");
const [date, setDate] = useState("");


const handleSubmit=(e)=>{
  e.preventDefault();
  const newTask={task,date};
  addNewTask(newTask);
}

const addNewTask=async(x)=>{
  const url="https://6363964037f2167d6f7d3e8c.mockapi.io/task"
  try {
    axios.post(url,x)
  } catch (error) {
    console.log(error);
  }

}
const save=()=>{
  getTask();
}



  return (
    <div>
  <Form  onSubmit={handleSubmit}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>
      
      
      <Button onClick={()=>save()} variant="primary" className="w-50" type="submit" >
        Save
      </Button>
    </Form>
    </div>
  )
}

export default AddTask;