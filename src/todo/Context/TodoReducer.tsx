import { ITodo, TODO_STATE } from "../Interfaces/TodoState";

type action = 
|  {  type:'Add' , payload:ITodo    }
|  {  type:'completed' , payload: { id : number }    }

   export const TodoReducer = (state: TODO_STATE,action: action)=>{

       console.log('desde reducer  ==>', state)
        switch (action.type) {
            case 'Add':
                return {
                     ...state,
                     todos: [...state.todos,action.payload]
                }
            case 'completed':
            return {
                ...state,
                  todos: state.todos.map(({ ...todo })=>{
                     if(todo.id === action.payload.id)
                     {
                          todo.completed = !todo.completed;
                     }
                     return todo;   
                })
            }
             default:  return state;
        }
    }