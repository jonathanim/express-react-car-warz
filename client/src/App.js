import { Container } from 'react-bootstrap'
import './App.css';
import CurrentWinner from './components/CurrentWinner';
import Home from './components/Home';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <Container fluid>
      <NavbarComponent />
      <Home />
      <CurrentWinner />

    </Container>
  );
}

export default App;
