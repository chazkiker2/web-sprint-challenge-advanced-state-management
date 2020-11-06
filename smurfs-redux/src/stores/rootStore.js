import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import logger from "redux-logger";

//reducers
// import counterReducer from '../features/counter/counterSlice';
import smurfsReducer from "../features/smurfs/smurfsSlice";

export default configureStore({
	reducer: {
		// counter: counterReducer,
		smurfs: smurfsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});
