import React from 'react'
import "./style.css"
import { Todo } from '../model';
import SingleTodo from './SingleTodo';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// We receiving props from App component, so we must specify the type of our props
// to the Functional component 
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {
            todos.map((todo) => {
                return (
                    <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                )
            })  
        }
    </div>
  )
}

export default TodoList