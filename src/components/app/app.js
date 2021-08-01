import React from 'react';
import ErrorBoundary from '../error-boundary';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import BookstoreService from '../../services/bookstore-service'
import './app.css'



const App = () =>{

    const bookstoreService = new BookstoreService()
    

    return(
        <ErrorBoundary>
            <BookstoreServiceProvider value= {bookstoreService}>
                <div className='jumbotron'>
                    <span>Hello I`m App</span> 
                </div>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    )
}
export default App