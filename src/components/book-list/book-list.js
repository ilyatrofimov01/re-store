import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux' ;
import {withBookstoreService} from '../hoc'
import { fetchBooks,bookAddedtoCart } from '../../actions';
import  compose  from '../..//utils';
import Spinner from '../spinner';

import './book-list.css'
import ErrorIndicator from './../error-indicator';

const BookList = ({books, onAddedToCart}) => {

    return (
        <ul className="book-list ">
            {books.map((book) => {
               return( 
                    <li key ={book.id}>
                        <BookListItem book ={book} onAddedToCart = {()=> onAddedToCart(book.id)}/>
                    </li>
                )
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount () {
        this.props.fetchBooks();           
    }
    
    render () {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) return <Spinner />  

        if (error) {
            console.log(error);
            return <ErrorIndicator />   
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({bookList:{books,loading, error}}) => {

   return { 
       books,
       loading,
       error
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return  bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedtoCart
    },dispatch);
}
    
export default compose(
    withBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
    )(BookListContainer)