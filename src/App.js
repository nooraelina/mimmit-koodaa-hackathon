import './App.css';
import Ylapalkki from './components/header/Ylapalkki.js';
import Alapalkki from './components/footer/Alapalkki.js';
import { Container } from 'hds-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Yhteystiedot from './components/pages/Yhteystiedot';
import Etusivu from './components/pages/Etusivu';

function App() {
  return (
    <>
      <Router >
        <Ylapalkki />
        <Container style={{ minHeight: '80vh', minWidth: '100%' }}>
          <Switch >
            <Route path="/yhteystiedot">
              <Yhteystiedot />
            </Route>
            <Route path="/" exact> 
              <Etusivu />
            </Route>
          </Switch>

        </Container>
        <Alapalkki />
      </Router>
    </>
  );
}

export default App;
