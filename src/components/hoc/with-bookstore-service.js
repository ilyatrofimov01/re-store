import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService =(mapMethodToProps)=>(Wrapped)=>{
    return (props) =>{
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreSrvice)=>{
                        const serviceProps= mapMethodToProps(bookstoreSrvice)
                        return(<Wrapped {...proops} {...serviceProps}/>)
                    }
                }
            </BookstoreServiceConsumer>
        )
    }

}