import React from 'react';
import noImgBook from '../../Img/noImgBook.png'
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { foundBooks } from '../selectors/selectors';
import { useNavigate } from 'react-router-dom';
import s from './CardWithBook.module.css'

function CardWithBook() {
    const foundBook = useSelector(foundBooks)
    const navigate = useNavigate()
    console.log(foundBook)
    return (
        <div  className={s.block__cards}>
                {foundBook.length !== 0 && foundBook.map((e, i) =>
                    <Card key={i} className={s.cards} onClick={() => navigate(`/info-book/${e.id}`)}>
                        <Card.Img 
                            className={s.img}
                            variant="top" 
                            src={e.volumeInfo.readingModes.image === true ? e.volumeInfo.imageLinks?.thumbnail : noImgBook } 
                        />
                        <Card.Body>                            
                            <div  className={s.titleCategories}>                                     
                                {e.volumeInfo.categories && e.volumeInfo.categories.filter((e, i) => i === 0).map((e, i)=> 
                                    <div key={i} className={s.categories}>{e}</div>
                                )}                                                                
                            </div>                            
                            <Card.Title className={s.titleCard}>{e.volumeInfo.title ? e.volumeInfo.title : null}</Card.Title>                           
                            {e.volumeInfo.authors ?
                                <div  className={s.titleAuthors}>
                                    author: 
                                    {e.volumeInfo.authors.map((e, i)=> 
                                        <div key={i} className={s.author}>[{e}]</div>
                                    )}
                                                                     
                                </div>
                            : null}                    
                        </Card.Body>
                    </Card>
                )}
            </div>
    );
}

export default CardWithBook;