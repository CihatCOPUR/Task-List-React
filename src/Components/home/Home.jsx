import { Button, Container } from "react-bootstrap";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState ,useEffect} from "react";
import axios from "axios";

const Home = () => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("Show Task ");

  const toggle = () => {
    setOpen(!open);
    setText(open ? "Show tasks" : "Hide tasks");
  };

  const url="https://6363964037f2167d6f7d3e8c.mockapi.io/task";

  useEffect(() => {
   axios(url).then((res)=>console.log(res.data))
  }, [])
  

  return (
    <Container className="home">
      <Button
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>
      {open && <AddTask />}

      <TaskList />
    </Container>
  );
};

export default Home;
