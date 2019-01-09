import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import tasks from './tasks'
import categories from './categories'
import axios from 'axios'

const reducer = combineReducers({tasks, categories})
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    createLogger({collapsed: true})
  )
);

export default store
