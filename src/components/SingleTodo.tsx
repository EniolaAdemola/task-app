import React, {useState, useRef, useEffect} from 'react'
import { Todo } from '../model'
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

import "./style.css"
import { Draggable } from 'react-beautiful-dnd'

interface Props {
   index: number
   todo: Todo,
   todos: Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}

const SingleTodo = ({index, todo, todos, setTodos}:Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    return (
      setTodos((prevValue) => prevValue.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      ))
    )
  }

  const handleDelete = (id: number) => {
    return (
      setTodos(todos.filter((todo) => todo.id !== id))
    )
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => {
      return (
        todo.id === id ? {...todo, todo: editTodo} : todo
      )
    }))
     
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  },[edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provider, snapshot) => (
        <form className = {`todos__single ${snapshot.isDragging ? "drag" : ""}`} onSubmit={(e) => handleEdit(e, todo.id)} {...provider.draggableProps} {...provider.dragHandleProps} ref={provider.innerRef}>
          {
            edit ? 
            (
              <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos__single-text"/>
            )
            :
            (
              <span className={`todos__single-text ${todo.isDone ? "done" : ""}`}>
                  {todo.todo}
              </span>
            )
          }
            <div>
                <span className="icon" onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit)
                  }
                } }><AiFillEdit/></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
        )
      }

    </Draggable>
  )
}

export default SingleTodo