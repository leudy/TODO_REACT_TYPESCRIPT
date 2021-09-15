import {createContext} from 'react'
import { TODO_STATE } from '../Interfaces/TodoState';

export type TodoContextProps = {
    TodoState : TODO_STATE;
    completedTask:(id:number) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

