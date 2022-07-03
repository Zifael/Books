import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Routers from './components/Routers/Routers';
import MainPage from './Page/MainPage/MainPage';


function App  () {   
  
  return (
    <Container >
      <Routers />
    </Container>
  );
}

export default App;
