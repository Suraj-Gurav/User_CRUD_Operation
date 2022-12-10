import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Delete from './Delete';
import Form from './Form';
import Home from './Home';
import Update from './Update';

const Routing = () => {
    return (
        <>
          <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/add' element={<Form/>}/> 
                <Route exact path="/edit/:userId" element={<Update/>}/> 
                <Route exact path='/delete/:userId' element={<Delete/>}/> 
           </Routes>  
        </>
    );
};

export default Routing;