import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync } from '../../redux/todoslice.js'
import './Editform.scss';
import moment from "moment";

const Editform = ({ setModalOpenedit ,todo}) => {
   // initializing the form data with existing data from db to edit
    let date = moment(todo.dueDate).utc().format('YYYY-MM-DD')
	const [id, setId] = useState(todo.id);
    const [title,setTitle] = useState(todo.title)
    const [description,setDescription] = useState(todo.description)
    const [dueDate,setDuedate] = useState(date)
    const [dueTime,setDueTime] = useState(todo.dueTime)
    const [status,setStatus] = useState(todo.status)

    //intializing dispatchs
	const dispatch = useDispatch();
    // on submitting form passing the value to reducer through togglecompleteasync thunk to update
	const onSubmit = (event) => {
		event.preventDefault();
		
			dispatch(
				toggleCompleteAsync({
                    id : id,
					title: title,
                    description: description,
                    dueDate: dueDate,
                    dueTime: dueTime,
                    status : status
				})
			);
			setModalOpenedit(false);
	};
	console.log("entered button")
	return (
		 
		 <div className="modalContainer">
		 <div className="titleCloseBtn">
          <button
            onClick={() => {
                setModalOpenedit(false);
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
	);
};

export default Editform;