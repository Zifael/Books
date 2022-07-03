import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import FormSelect from '../../components/FormSelect/FormSelect';
import s from './MainPage.module.css'



function MainPage () {

    const [valueSearch, setValueSearch] = useState('')

    let arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,]
    const [state, setState] = useState() 
    const f = async(orderBy?: string,query?: string, ) => {
        let a = axios.create({
          baseURL: 'https://www.googleapis.com/books/v1/',
          params: {
            maxResults: 30,
            key: 'AIzaSyBq3rQ_tTT9Ajd4B0v-tKaSpryAlwQglKY'
          }
        })
        let getBook = await a.get(`volumes?q=${query}`, {
          params: {
                   orderBy        
          }
        }) 
        
        setState(getBook.data);
        //console.log(getBook.data)    
        
      }
      useEffect(() => {
          f('newest', 'Harry+Potter', )
          
      }, [])
      console.log(state)
    return (
        <div>
            <h1 className={s.title}>LITERATURE</h1>           
            <InputGroup className={s.search__input} size="lg">                
                <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder='Search'   
                value={valueSearch}    
                onChange={e => setValueSearch(e.target.value)}         
                /> 
            </InputGroup> 
            <FormSelect />           
            <div className={s.block__cards}>
                {arr.map(e => 
                    <Card className={s.cards}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{null}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
            <Button className={s.button__leadMore}>Load more</Button>
        </div>
    );
}

export default MainPage;