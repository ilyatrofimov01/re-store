import React from 'react';
import './app.css'
import ErrorIndicator from '../error-indicator';

const App = () =>{
    return(
        <div className='jumbotron'>
           <span>Hello I`m App</span> 
           <ErrorIndicator/>
        </div>)
}
export default App