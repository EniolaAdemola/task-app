import React from 'react'
import "./style.css"
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// We receiving props from App component, so we must specify the type of our props
// to the Functional component 
const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
      <div className='container'>
        <Droppable droppableId='TodosList'>
            {
                (provider, snapshot) => (
                    <div className={`todos active__task ${snapshot.isDraggingOver ? "dragactive" : ""}`} ref={provider.innerRef} {...provider.droppableProps}>
                        <span className="todos__heading">Active Task</span>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                                    )
                                })  
                            }
                            {provider.placeholder}
                    </div>
                )
            } 
        </Droppable>
        <Droppable droppableId='TodoRemove'> 
        {
            (provider, snapshot) => (
                <div className={`todos completed__task ${snapshot.isDraggingOver ? "dragcomplete" : ""}`} ref={provider.innerRef} {...provider.droppableProps}>
                    <span className="todos__heading">Completed Task</span>
                    {
                        completedTodos.map((todo, index) => {
                            return (
                                <SingleTodo index={index} key={todo.id} todo={todo} todos={completedTodos} setTodos={setCompletedTodos}/>
                                )
                            })  
                    }
                    {provider.placeholder}
                </div>
            )
        }
        </Droppable>
    </div>
  )
}

export default TodoList