import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import { TodoITem } from './TodoITem';

export const TodoList = () => {
   const {  TodoState: {todos}} = useContext(TodoContext)
   console.log(todos)
    return (
        <ul>
          {todos.map(i=>  <TodoITem todo={i} key={i.id.toString()} />)}
        </ul>
    )
}
