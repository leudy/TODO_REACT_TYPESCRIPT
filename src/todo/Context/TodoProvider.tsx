import { useReducer } from "react"
import {  TODO_STATE } from "../Interfaces/TodoState"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "./TodoReducer"

const _initialState: TODO_STATE = {
    todos:  [
        { id: 1, desc: 'COMPRAR ARROZ', completed: false },
        { id: 2, desc: 'COMPRAR CARNE', completed: false },
        { id: 3, desc: 'HABLAR EN INGLES', completed: false }],
    pedding: 2,
    completed: 0,
    total: 1
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {
  
   const [TodoState, dispatch] = useReducer(TodoReducer, _initialState)

   const completeTaskOK = (id:number)=>{
       console.log(id)
     dispatch({type:'completed',payload:{id}})
   }
    return (
        <TodoContext.Provider value={{ 
            TodoState, completedTask :completeTaskOK
         }}>
            {children}
        </TodoContext.Provider>)
}