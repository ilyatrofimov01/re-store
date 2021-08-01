import React from 'react';
import ErrorBoundry from '../error-boundry';
import './app.css'


const App = () =>{

    return(
        <ErrorBoundry>
            <div className='jumbotron'>
                <span>Hello I`m App</span> 
            </div>
        </ErrorBoundry>
    )
}
export default App