import {React,useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import TodoView from '../Todoview/todoview';
import { toggleCompleteAsync, deleteTodoAsync } from '../../redux/todoslice';
import './todoitem.scss';
import Editform from '../Formedit/Editform';

// this component will dispay the todo item
const TodoItem = ({ id, title,todo }) => {
	const dispatch = useDispatch();

    //console.log(todo);
	// setting the view of detailed view and edit form as false
    const [modalOpenview, setModalOpenview] = useState(false);
    const [checkStatus, setcheckstatus] = useState(false);
	const [modalOpenedit, setModalOpenedit] = useState(false);

    const checkstatus = () =>{
        if (todo.status === 'Open'){
            setcheckstatus(false)
            
        }
        else{
            setcheckstatus(true)
        }
    }
		// to check the status of the task to give color for task tab
    useEffect(() => {
        checkstatus()
      });

	  // call the togglecomplete thung when checkbox is clicked button is clicked
	const handleCheckboxClick = () => {
        let sta = 'Open'
        if(todo.status==='Open'){
            sta ='Close'
        }
        
		dispatch(toggleCompleteAsync({ id, status: sta}));
	};
	// call the delete thung when delete button is clicked
	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li   className={`${checkStatus ? "boxshow_checked" : "boxshow"}`}>
			<div >
				<span >
                <label>Completed</label>
					<input
						type='checkbox'
						className='mr-3'
                        checked = {checkStatus}
						onClick={handleCheckboxClick}
                        onChange = {()=>{checkstatus()}}
					/>   
					{todo.id}  {title}  
				</span>
                <button  onClick={() => {
                    setModalOpenview(true);
                  }}>
					View
				</button>
               
				<button onClick={handleDeleteClick} >
					Delete
				</button>

				<button onClick={()=>{
					setModalOpenedit(true)
				}} >
					Edit
				</button>
                  
			</div>
            { modalOpenview && <TodoView setOpenModalview = {setModalOpenview} todo = {todo} />}
			{ modalOpenedit && <Editform setModalOpenedit={setModalOpenedit}  todo={todo}/>}
		</li>
	);
};

export default TodoItem;