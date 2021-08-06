import { createStore, applyMiddleware }from 'redux';
import thunkMiddleware  from 'redux-thunk';
import reducer from './reducers';


const logMiddleware = ({getState}) => (dispatch) => (action)=>{
    console.log(action.type, getState());
    return dispatch(action);
}
const stringMidddleware = ()=> (dispatch)=> (action)=>{
    if (typeof action === 'string'){
        return dispatch({type:action})
    }

    return dispatch(action)
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware,stringMidddleware,logMiddleware));


const delayedActionCreator = (timeout) =>  (dispatch) =>{
    setTimeout(()=>dispatch({type:'DELAYED_ACTION'}), timeout)
}

store.dispatch(delayedActionCreator(3000));

export default store;