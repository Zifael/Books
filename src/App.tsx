import React from 'react';
import { Container } from 'react-bootstrap';
import Routers from './components/Routers/Routers';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App  () {     
  const navigate = useNavigate()
  return (
    <Container >
      <h1 className='app__title' onClick={() => navigate(-1)}>LITERATURE</h1>
      <Routers />
    </Container>
  );
}

export default App;
