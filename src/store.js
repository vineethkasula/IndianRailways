import { createStore, combineReducers, applyMiddleware } from 'redux';
import searchReducer  from '../src/Reducers/search.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let search = combineReducers({
    sr : searchReducer
});

let store = createStore(
    search,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    
    );

    console.log("store", store);
    console.log("store-reducer", store.search);

export default store;
