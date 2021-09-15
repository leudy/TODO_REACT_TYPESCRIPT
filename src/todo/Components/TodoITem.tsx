import { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import { ITodo } from '../Interfaces/TodoState'
export type Props ={
    todo:ITodo
}

export const TodoITem = ({todo}: Props) => {

 const {completedTask} = useContext(TodoContext)

 const  hanlderDoubleCick = () =>{
    // console.log('se invoco el completado', todo.desc)
     completedTask(todo.id)
 }


    return (
        <li onDoubleClick={hanlderDoubleCick} style={{cursor:'pointer', textDecoration: todo.completed ? 'line-through' :''}}>{todo.desc}</li>
    )
}





