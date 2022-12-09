import reducers from "./reducer";
// import { createStore, applyMiddleware } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'



const store = configureStore({reducer:reducers}, {}, composeWithDevTools())

export default store;
