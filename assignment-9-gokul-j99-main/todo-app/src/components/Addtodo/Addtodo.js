import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../redux/todoslice.js'
import './Addtodo.scss';

// this component is used to diaplayb the form to add todo task
const AddTodoForm = ({ setOpenModal }) => {
	//initially setting state of the fileds to  empty
	const [id, setId] = useState('');
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [dueDate,setDuedate] = useState('')
    const [dueTime,setDueTime] = useState('')
    const [status,setStatus] = useState('')

	//initializing dispatch
	const dispatch = useDispatch();
	// on submitting form passing the value to reducer through addTododasync thunk
	const onSubmit = (event) => {
		event.preventDefault();
		
			dispatch(
				addTodoAsync({
                    id : id,
					title: title,
                    description: description,
                    dueDate: dueDate,
                    dueTime: dueTime,
                    status : status
				})
			);
			setOpenModal(false);
	};
	console.log("entered button")
	return (
		 <div className="modalBackground1">
		 <div className="modalContainer">
		 <div className="titleCloseBtn">
          <button
            onClick={() => {
                setOpenModal(false);
            }}
          >
            X
          </button>
          </div>
		<form onSubmit={onSubmit} >
			<label htmlFor="id">Id</label><br />
			<input
				type='text'
				placeholder='Add Id...'
				value={id}
				onChange={(event) => setId(event.target.value)}
			required/> <br />
            <label >Title</label><br />
            <input
            type = 'text'
			placeholder='Add Title'
			value={title}
			onChange={(event) => setTitle(event.target.value)}
            required /> <br />
            

            <label >Description</label> <br />
            <input
            type = 'text'
			placeholder='Add Description'
			value={description}
			onChange={(event) => setDescription(event.target.value)}
            required /> <br />
            

            <label >Due date</label><br />
            <input
            type = 'date'
			placeholder='Add Due date'
			value={dueDate}
			onChange={(event) => setDuedate(event.target.value)}
            required /><br />
           

            <label >Due time</label><br />
            <input
            type = 'time'
			placeholder='Add Due time'
			value={dueTime}
			onChange={(event) => setDueTime(event.target.value)}
            required /> <br />
            

            <label >Status</label><br></br>
            <input
            type = 'text'
			placeholder='Add Status'
			value={status}
			onChange={(event) => setStatus(event.target.value)}
            required /> <br />
           


			<button type='submit'
			className="submit" >
				Submit
			</button>
		</form>
		 </div>
		 </div>
	);
};

export default AddTodoForm;