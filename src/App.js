
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {
  return (
   <Container className='app'>
  <div className='Div1'> 
    <Header/>
    <Home/>
    </div>   
   </Container>
   
  );
}

export default App;
