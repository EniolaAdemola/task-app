import React from 'react';
import './App.css';



// ========== TYPESCRIPT TUTORIAL ========== //

let name: string; // use any for anytype value
let age: number | string;
let isStudent: boolean;
let hobbies: string[]
let role: [number, string]

// ===== HAndling types in tsx ===== //

// type Person = {
//   name: string,
//   age?: number
// }

type X = {
  a: string,
  b: number
}

type Y = X | {
  c: string,
  d: number
}

// when using this it must contain all thevalues is X and Y
let y: Y = {
  c: "enny",
  d: 10
}

let person: Person = {
  name: "Dave"
}

let lotsOfPeople: Person[]

let personName : unknown; //instead of using any we use unknown its better that way

// let printName: (name: string) => void; //dealing with functions in tsx

// void return ondefined
// never doesn't retun anything

let printName = (name: string) => {
  console.log("Hello ", name);
}

printName("Dave")

// ===== HAndling interface in tsx ===== //

interface Person {
  name: string,
  age?: number
}

interface Guy extends Person {
  professsion: string
}

const App: React.FC = () => {

  return (
    <div className="App">
      <span className='heading'>TASK-APP</span>
    </div>
  );
}

export default App;
