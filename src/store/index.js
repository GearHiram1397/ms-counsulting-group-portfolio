import { createStore, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

// const middleware = [thunk];

const store = createStore(rootReducer, compose(
    // applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store