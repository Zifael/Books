import React from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import s from './FormSelect.module.css'

function DropDown() {
    let categories = [
        {id: 1, select: 'all'},
        {id: 2, select: 'art'},
        {id: 3, select: 'biography'},
        {id: 4, select: 'computers'},
        {id: 5, select: 'history'},
        {id: 6, select: 'medical'},
        {id: 7, select: 'poetry'},
    ]

    const sort =  [
        {id: 1, select: 'relevance '},
        {id: 2, select: 'newest'}
    ]
    
    return (
        <div className={s.dropDown}>
           <div className={s.dropDown__block}>
                <div className={s.dropDown__title}>Categories</div>
                <Form.Select className={s.selectBlock} >
                    {categories.map(e => 
                        <option key={e.id}>{e.select}</option>                        
                    )}
                </Form.Select>
           </div>
           <div className={s.dropDown__block}>
                <div className={s.dropDown__title}>Sorting by</div>
                <Form.Select onChange={e => console.log(e.target.value)} className={s.selectBlock}>
                    {sort.map(e => 
                        <option  key={e.id}>{e.select}</option>  
                    )}                  
                </Form.Select>
           </div>
        </div>
    );
}

export default DropDown;