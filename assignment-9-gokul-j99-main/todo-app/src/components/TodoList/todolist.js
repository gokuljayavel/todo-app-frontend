import React, { useEffect } from 'react';
import TodoItem from '../Todoitem/todoitem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/todoslice';
import './todolist.scss';

const TodoList = () => {
	// initialize the dispach 
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
    // used effect to auto render the list of todo by  calling the getodo thunk
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem  key= {`${todo.id}`} id={todo.id} title={todo.title} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;