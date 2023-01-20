import React, {useState } from 'react';
import AddTodoForm from '../Addtodo/Addtodo';
import './Navbar.scss';

// this component is used to add the heading of the app
const Navbar = () => {
    // etting the view of add form false

    const [modalOpen, setModalOpen] = useState(false);
return(

    <div className="todoList">
        <div className="title">
            <h3>To Do App</h3>
            <div>
                Add new Task &nbsp;
                <button id="modal_button"
                className ="modal_button"
                onClick={() => {
                    setModalOpen(true);
                  }}>add</button>
                 
            </div>
        </div>
        {modalOpen && <AddTodoForm setOpenModal={setModalOpen} />}
    </div>

);

}

export default Navbar;

// export class Navbar extends Component {
    
//     const [modalOpen, setModalOpen] = setState('');
// 	render = () => (
        
        
//         <div class="todoList">
//         <div class="title">
//             <h3>To Do App</h3>
//             <div>
//                 Add new Task &nbsp;
//                 <button id="modal_button"
//                 onClick={() => {
//                     setModalOpen(true);
//                   }}>add</button>
//             </div>
            
//         </div>
//     </div>
// 	);
// }