import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import {DragDropContext, DropResult} from "react-beautiful-dnd"


// ========== TYPESCRIPT TUTORIAL ========== //

// let name: string; // use any for anytype value
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[]
// let role: [number, string]

// ===== HAndling types in tsx ===== //

// type Person = {
//   name: string,
//   age?: number
// }

// type X = {
//   a: string,
//   b: number
// }

// type Y = X | {
//   c: string,
//   d: number
// }

// when using this it must contain all thevalues is X and Y
// let y: Y = {
//   c: "enny",
//   d: 10
// }

// let person: Person = {
//   name: "Dave"
// }

// let lotsOfPeople: Person[]

// let personName : unknown; //instead of using any we use unknown its better that way

// let printName: (name: string) => void; //dealing with functions in tsx

// void return ondefined
// never doesn't retun anything

// let printName = (name: string) => {
//   console.log("Hello ", name);
// }

// printName("Dave")

// ===== HAndling interface in tsx ===== //

// interface Person {
//   name: string,
//   age?: number
// }

// interface Guy extends Person {
//   professsion: string
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  // todos is an array with bunch of nested objects
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos]  = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }
  // console.log(todos) 
  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result

    // console.log(result) //log this to see drag results
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    let add, active = todos, complete = completedTodos;

    if(source.droppableId === "TodosList") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }
    if(destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>TASK-APP</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div>
    </DragDropContext>
  );
}

export default App;
