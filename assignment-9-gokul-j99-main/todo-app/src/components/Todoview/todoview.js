import moment from "moment";

// this component is used to see the detailed view of the taks
const todoView = ({setOpenModalview,todo})=>{

    return(
        
		 <div className="modalContainer">
         <div className="titleCloseBtn">
          <button
            onClick={() => {
                setOpenModalview(false);
            }}
          >
            X
          </button>
          </div>
          <p> <b>Id : </b>{todo.id}</p>
          <p> <b>Titlle : </b>{todo.title}</p>
          <p> <b>Description : </b>{todo.description}</p>
          <p> <b>Duedate : </b>{moment(todo.dueDate).utc().format('YYYY-MM-DD')}</p>
          <p> <b>Duetime : </b>{todo.dueTime}</p>
          <p> <b>Status : </b>{todo.status}</p>
          <p> <b>CreatedDate : </b>{moment(todo.createdDate).utc().format('YYYY-MM-DD')}</p>
          <p> <b>LastModifiedDate : </b>{moment(todo.lastModifiedDate).utc().format('YYYY-MM-DD')}</p>
          
         </div>
         

    );

};






export default todoView;