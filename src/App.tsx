import React from 'react';
import { Container } from 'react-bootstrap';
import Routers from './components/Routers/Routers';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App  () {     
  const navigate = useNavigate()
  return (
    <div className='wraper'>
      <Container className='container'>
        <h1 className='app__title' onClick={() => navigate('/')}>LITERATURE</h1>
        <Routers />
      </Container>
    </div>
  );
}

export default App;
