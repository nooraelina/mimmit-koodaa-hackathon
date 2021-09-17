import './App.css';
import Ylapalkki from './components/header/Ylapalkki.js';
import Alapalkki from './components/footer/Alapalkki.js';
import { Container, ImageWithCard } from 'hds-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import sittingGuy from './images/IMG_7674.jpg';
import Yhteystiedot from './components/pages/Yhteystiedot';
import Etusivu from './components/pages/Etusivu';

function App() {
  return (
    <>
    <Router >
      <Ylapalkki />
        <Container style={{ minHeight:'75vh', minWidth:'100%' }}>
        <Switch >
          <Route path="/yhteystiedot">
            <ImageWithCard cardLayout="hover" fullWidth src={sittingGuy}>
              <Yhteystiedot />
            </ImageWithCard>
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
