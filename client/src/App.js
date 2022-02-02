import { Container } from 'react-bootstrap'
import './App.css';
import CurrentWinner from './components/CurrentWinner';
import NavbarComponent from './components/NavbarComponent';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Container fluid>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<CurrentWinner />} />

      </Routes>
    </Container>
  );
}

export default App;
