import React from 'react';
import ErrorBoundary from '../error-boundary';
import './app.css'


const App = () =>{

    return(
        <ErrorBoundary>
            <div className='jumbotron'>
                <span>Hello I`m App</span> 
            </div>
        </ErrorBoundary>
    )
}
export default App