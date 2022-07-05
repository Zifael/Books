import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import s from './OneBookInfo.module.css'
import {getOneBook} from '../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import { oneBook } from '../../components/selectors/selectors';
import { setOneBook } from '../../toolkitRedux/reducer-books/reducer-books';
import noImgBook from '../../Img/noImgBook.png'
import Spiner from '../../components/Spiner/Spiner';

function OneBookInfo() {

    const {id} = useParams()
    const book = useSelector(oneBook)
    const dispath = useDispatch()
    const [loading, setLoading] = useState(true)    

    const getBook = useCallback(async() => {        
        try {
            if(id !== undefined) {
                const oneBook = await getOneBook(id)
                dispath(setOneBook(oneBook))
            }            
        } catch (e) {
            console.error(e)
        }   
        setLoading(false)
    }, [])

    useEffect(() => {      
        getBook()        
    }, [])
    
    if(loading) {
        return (
            <Spiner />
        )
    }

    return (        
        <div  className={s.wraper__oneBook}>            
            {book ?  
                <Row className={s.oneBook}>
                    <Col className={s.oneBook__blockOne}>
                        <div className={s.oneBook__block__img}>
                            <img 
                                className={s.oneBook__img} 
                                src={book?.readingModes.image === false ? noImgBook : book?.imageLinks?.thumbnail}
                            />
                        </div>
                    </Col>
                    <Col className={s.oneBook__blockSecond}>
                        <h2 className={s.oneBook__title}>{book?.title}</h2>
                        <div className={s.oneBook__info__block}>
                            <div className={s.title__criterion}>Authors:</div>
                            {book.authors ? book?.authors.map(e => 
                                <div key={e} className={s.oneBook__criterion}>{e}</div>
                            ): 'empty'}
                        </div>
                        <div className={s.oneBook__info__block}>
                            <div className={s.title__criterion}>Categories:</div>
                            {book.categories ?  book?.categories.map((e, i) => 
                                <div key={i} className={s.oneBook__criterion}>{e}</div>
                            ): 'empty'}
                        </div>
                        <div className={s.oneBook__pageCount}>PageCount: {book?.pageCount}</div>
                        <div className={s.oneBook__description}>{book?.description}</div>                
                    </Col> 
                </Row>
                : null
            }
        </div>        
    );
}

export default OneBookInfo;