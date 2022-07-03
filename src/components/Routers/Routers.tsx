import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Page/MainPage/MainPage';
import OneBookInfo from '../../Page/OneBookInfo/OneBookInfo';

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/info-book/:id' element={<OneBookInfo />} />
        </Routes>
    );
}

export default Routers;