import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//thunk is created for fetching data from server
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:9001/todos');
		if (resp.ok) {
			const todos = await resp.json();
           // console.log(todos);
			return { todos };
		}
	}
);
//thunk is created for posting data to server
export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:9001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
                id : payload.id,
                title: payload.title ,
                description: payload.description,
                dueDate: payload.dueDate,
                dueTime: payload.dueTime,
                status : payload.status
            }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

//thunk is created for updating status of task
export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:9001/todos?id=${payload.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id : payload.id,
                title: payload.title ,
                description: payload.description,
                dueDate: payload.dueDate,
                dueTime: payload.dueTime,
                status : payload.status}),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

//thunk is created for delete task from list to todo
export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:9001/todos?id=${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		// addTodo: (state, action) => {
		// 	const todo = {
		// 		id: action.payload.id,
		// 		title: action.payload.title,
        //         description: action.payload.description,
        //         dueDate: action.payload.dueDate,
        //         dueTime: action.payload.dueTime,
        //         status : action.payload.status,
		// 		completed: false,
		// 	};
		// 	state.push(todo);
		// },
		// toggleComplete: (state, action) => {
		// 	const index = state.findIndex((todo) => todo.id === action.payload.id);
		// 	state[index].completed = action.payload.completed;
        //     state[index].status = action.payload.status;
		// },
		// deleteTodo: (state, action) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },
	},
	//reducers creaated by using thunks
	extraReducers: {
		[getTodosAsync.pending]: (state, action) => {
			console.log("fetching data")
		},

		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
		[toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(todo) => todo.id === action.payload.todo.id
			);
			state[index].title = action.payload.todo.title;
			state[index].description = action.payload.todo.description;
			state[index].dueDate = action.payload.todo.dueDate;
			state[index].dueTime = action.payload.todo.dueTime;
			state[index].id = action.payload.todo.id;
			state[index].status = action.payload.todo.status;
		},
		[deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

export default todoSlice.reducer;