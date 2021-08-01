import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService =()=>(Wrapped)=>{
    return (props) =>{
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreSrvice)=>{
                        return(<Wrapped {...props} 
                            bookstoreSrvice ={bookstoreSrvice}/>)
                    }
                }
            </BookstoreServiceConsumer>
        )
    }

}
export {withBookstoreService}