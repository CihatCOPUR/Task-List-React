import { Container } from "react-bootstrap";
import AddTask from "./AddTask";
import TaskList from "./TaskList";




const Home = () => {
  return (
    <Container>
        <AddTask/>
        <TaskList/>
    </Container>
  )
}

export  default Home;
