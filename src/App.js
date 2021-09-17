import './App.css';
import Ylapalkki from './components/header/Ylapalkki.js';
import Alapalkki from './components/footer/Alapalkki.js';
import { Container } from 'hds-react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router >
      <Ylapalkki />

        <Container >

        </Container>

      <Alapalkki />
    </Router>
    </>
  );
}

export default App;
