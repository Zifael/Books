import React from 'react';
import { Form } from 'react-bootstrap';
import s from './FormSelect.module.css'

function DropDown({currentCategory, currentSort, setCurrentCategory, setCurrentSort}: any) {
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
        {id: 1, select: 'relevance'},
        {id: 2, select: 'newest'}
    ]
    return (
        <div className={s.dropDown}>
           <div className={s.dropDown__block}>
                <div className={s.dropDown__title}>Categories</div>
                <Form.Select onChange={e => setCurrentCategory(e.target.value)} className={s.selectBlock} >
                    <option>{currentCategory}</option>
                    {categories.filter(e => e.select !== currentCategory).map(e => 
                        <option key={e.id}>{e.select}</option>                        
                    )}
                </Form.Select>
           </div>
           <div className={s.dropDown__block}>
                <div className={s.dropDown__title}>Sorting by</div>
                <Form.Select onChange={e => setCurrentSort(e.target.value)} className={s.selectBlock}>
                    <option>{currentSort}</option>
                    {sort.filter(e => e.select !== currentSort).map(e => 
                        <option  key={e.id}>{e.select}</option>  
                    )}                  
                </Form.Select>
           </div>
        </div>
    );
}

export default DropDown;