const booksLoaded = (newBooks)=>{
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequsted = () =>{
    return {
        type:'FETCH_BOOKS_REQUSET',
    }
};

const booksError =(error)=>{
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAddedtoCart =(bookId)=>{
    return {
        type:'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const fetchBooks = (bookstoreService,dispatch) => ()=>{

        dispatch(booksRequsted());
        bookstoreService.getBooks()
         .then((data)=>dispatch(booksLoaded(data)))
         .catch((error)=>dispatch(booksError(error)));
};

export {
    fetchBooks,
    bookAddedtoCart
};