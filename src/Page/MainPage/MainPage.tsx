import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../api/api';
import FormSelect from '../../components/FormSelect/FormSelect';
import { getPageBooks, setFoundBooks, setStartIndex, setTotalItems, setValueQuery } from '../../toolkitRedux/reducer-books/reducer-books';
import s from './MainPage.module.css'
import CardWithBook from '../../components/CardsWithBook/CardWithBook';
import { foundBooks, startIndex, totalItems, valueQuery } from '../../components/selectors/selectors';
import Spiner from '../../components/Spiner/Spiner';


function MainPage () {

    const [valueSearch, setValueSearch] = useState('') 
    const [currentCategory, setCurrentCategory] = useState('all') 
    const [currentSort, setCurrentSort] = useState('relevance')
    const [loading, setLoading] = useState(false)
    const books = useSelector(foundBooks)
    const totalitems = useSelector(totalItems)
    const startindex = useSelector(startIndex)
    const valuequery = useSelector(valueQuery)
    const dispatch = useDispatch()       


    const setBooks = async(setDispatch: any, startingIndex?: number) => {        
        setLoading(true)           
        try {
            let findBook
            if (valueSearch || valuequery) {
                if (valueSearch) {
                    dispatch( setValueQuery(valueSearch) )  // save Query in valueQuery if valueSearch is empty
                    findBook = await getBooks(valueSearch, currentSort, currentCategory, startingIndex)                      
                } else {
                    findBook = await getBooks(valuequery, currentSort, currentCategory, startingIndex)                     
                }
            }
            dispatch( setTotalItems(findBook.totalItems)) 
            if (findBook.items !== undefined) {
                dispatch( setDispatch(findBook.items) )     
            } else {
                dispatch( setDispatch(null) )
            }              
        } catch (e) {
            console.error(e)
        }       
        setLoading(false)
    }
     
    const searchBooks = async() => { 
        setBooks(setFoundBooks)       
    }        
   
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchBooks()  
    }

    const addBooks = () => {
        dispatch( setStartIndex(startindex + 30))
        setBooks(getPageBooks, startindex + 30)   
    }
    
     
    return (
        <div>                       
            <Form onSubmit={(e) => submit(e)}  className={s.search__input} >                
                <Form.Control                    
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Search'   
                    value={valueSearch}    
                    onChange={e => setValueSearch(e.target.value)}         
                /> 
                <Button                     
                    onClick={() => searchBooks()} 
                    className={s.search__button} 
                    variant="outline-dark"
                >
                     Search
                </Button>
            </Form>                     
            {books.length !== 0 ?  <div className={s.totalItems}>Found: {totalitems} result</div> : null}
            {books.length !== 0 ?            
            <>                   
                <FormSelect 
                    currentCategory={currentCategory} 
                    currentSort={currentSort}
                    setCurrentCategory={setCurrentCategory} 
                    setCurrentSort={setCurrentSort}
                    searchBooks={searchBooks}
                    loading={loading}                                       
                />           
                    <CardWithBook />
                {loading 
                ? 
                    <Button variant="light" disabled={true} className={s.button__leadMore}>Loading...</Button> 
                :
                    <Button variant="light" onClick={() => addBooks()} className={s.button__leadMore}>Load more</Button> }             
            </>
            : null}
            {loading ? <Spiner/> : null }
            {totalitems === 0 ? <div>Your search - {valuequery} - did not match any documents.</div> : null}           
                        
        </div>
    );
}

export default MainPage;