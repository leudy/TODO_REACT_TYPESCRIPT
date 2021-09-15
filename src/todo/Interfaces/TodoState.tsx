export interface ITodo {
  id:number,
  desc:string,
  completed :boolean
}

export interface TODO_STATE  {
   todos: ITodo[],
   pedding:number,
   completed:number,
   total :number
}