import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoslice.js';

// configure store with created reducers
export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});