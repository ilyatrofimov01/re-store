import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux' ;
import {withBookstoreService} from '../hoc'
import { booksLoaded } from '../../actions';
import  compose  from '../..//utils';
import Spiner from './../spiner';

import './book-list.css'



class BookList extends Component {

    componentDidMount(){
        const {bookstoreService,booksLoaded} = this.props;
        bookstoreService.getBooks().then((data)=>{
            booksLoaded(data);
        })     
    }


    render (){

        const { books,loading  } = this.props;
        if(loading){
            return(
                <Spiner />
            )
        }
        return (
            <ul className="book-list ">
                {books.map((book)=>{
                   return( 
                        <li key ={book.id}>
                            <BookListItem book ={book}/>
                        </li>
                    )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps= ({books,loading})=>{
   return { 
       books,
       loading
    }
};
const mapDispatchToProps = {

    booksLoaded
    
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
    )(BookList)