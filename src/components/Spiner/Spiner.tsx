import React from 'react';
import { Spinner } from 'react-bootstrap';
import s from './Spiner.module.css'

function Spiner() {
    return (
        <div className={s.block__spine}>
            <Spinner className={s.spinner} animation="border" variant="primary" />
        </div>
    );
}

export default Spiner;