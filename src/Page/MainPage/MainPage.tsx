import React, { useState, useEffect } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../api/api';
import FormSelect from '../../components/FormSelect/FormSelect';
import { getPageBooks, setFoundBooks } from '../../toolkitRedux/reducer-books';
import s from './MainPage.module.css'
import CardWithBook from '../../components/CardsWithBook/CardWithBook';


function MainPage () {

    const [valueSearch, setValueSearch] = useState('') 
    const [currentCategory, setCurrentCategory] = useState('all') 
    const [currentSort, setCurrentSort] = useState('relevance')
    const dispath = useDispatch()   
    
    const f = async(query?: string, orderBy?: string, ) => {
        let book = await getBooks('Гарри Потер', 'relevance')                       
        dispath( setFoundBooks(book) )            
      }
      useEffect(() => {
             f()          
    }, [])
     
    const searchBooks = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let findBook = await getBooks(valueSearch, currentSort, currentCategory)  
        dispath( setFoundBooks(findBook) )
    }

      
   
    return (
        <div>
            <h1 className={s.title}>LITERATURE</h1>           
            <Form onSubmit={(e) => searchBooks(e)}  className={s.search__input} >                
                <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Search'   
                    value={valueSearch}    
                    onChange={e => setValueSearch(e.target.value)}         
                /> 
                <Button className={s.search__button} variant="outline-secondary">
                     Search
                </Button>
            </Form> 
            <FormSelect setCurrentCategory={setCurrentCategory} setCurrentSort={setCurrentSort} />           
            <CardWithBook />
            <Button className={s.button__leadMore}>Load more</Button>
        </div>
    );
}

export default MainPage;