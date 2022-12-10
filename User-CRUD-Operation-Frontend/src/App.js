import React from 'react';
import Routing from './Components/Routing';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
        
          <Routing/>
        
        </BrowserRouter>
    </>
  );
}

export default App;
