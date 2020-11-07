import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

//reducers
import smurfsReducer from "../features/smurfs/smurfsSlice";

export default configureStore({
	reducer: {
		// counter: counterReducer,
		smurfs: smurfsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});
