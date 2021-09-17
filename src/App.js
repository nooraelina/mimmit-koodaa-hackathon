import './App.css';
import Ylapalkki from './components/header/Ylapalkki.js';
import Alapalkki from './components/footer/Alapalkki.js';
import { Container, ImageWithCard } from 'hds-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import imageFile from './images/IMG_7674.jpg';
import Test from './components/Test';

function App() {
  return (
    <>
    <Router >
      <Ylapalkki />
        <Container style={{ minHeight:'75vh', minWidth:'100%' }}>
        <Switch >
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
          
            <ImageWithCard cardLayout="hover" fullWidth src={imageFile}>
            contenttii
            </ImageWithCard>
          
          </Route>

        </Switch>
      </Container>
      <Alapalkki />
    </Router>
    </>
  );
}

export default App;
