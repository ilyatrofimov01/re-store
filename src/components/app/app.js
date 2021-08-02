import React from 'react';
import { withBookstoreService } from '../hoc'
import './app.css'



const App = ( {bookstoreService} ) =>{
    console.log(bookstoreService.getBooks())
    return(
                <div className='jumbotron'>
                    <span>Hello I`m App</span> 
                </div>

    )
}
export default withBookstoreService()(App)
