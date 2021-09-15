import { TodoList } from './Components/TodoList';
import { TodoProvider } from './Context/TodoProvider';
import '../App.css'
 const Todo = () => {
    return (
        <TodoProvider>
            <div className='App App-header'>
            <h3>My TODO APP</h3>
            <TodoList /> 

            </div>
        </TodoProvider>
    )
}

export default Todo;