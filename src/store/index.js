import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    {},
     applyMiddleware(thunk)
    // search, config lai cho nay de xem log cua redux :V bang dev tool
);

export default store;