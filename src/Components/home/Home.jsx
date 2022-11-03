import { Button, Container } from "react-bootstrap";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState ,useEffect} from "react";
import axios from "axios";

const Home = () => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("Show Task ");

  const [task, setTask] = useState([]);


  const toggle = () => {
    setOpen(!open);
    setText(open ? "Show tasks" : "Hide tasks");
  };

  const url="https://6363964037f2167d6f7d3e8c.mockapi.io/task";
const getTask=async ()=>{
    const data=await axios(url)
    setTask(data.data)
    
}

  useEffect(() => {
   getTask()
  }, [])
  


  return (
    <Container className="home">
      <Button
      className="w-50"
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>
      
      {open && <AddTask  getTask={getTask}  />}

      <TaskList  getTask={getTask} task={task}/>
    </Container>
  );
};

export default Home;
