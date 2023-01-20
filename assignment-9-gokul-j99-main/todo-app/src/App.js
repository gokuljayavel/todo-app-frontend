import './App.scss';
import  Navbar  from './components/Navbar/Navbar.js';
import TodoList from './components/TodoList/todolist';

// this is root div for the page
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <TodoList />
    </div>
  );
}

export default App;
