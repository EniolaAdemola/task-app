import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }
  // console.log(todos) 
  return (
    <div className="App">
      <span className='heading'>TASK-APP</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
