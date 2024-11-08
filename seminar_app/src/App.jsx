// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// userefexample

// how to programmatically set focus on user input box 
import { useRef } from "react"; 

function App() { 
const inputRef = useRef();  //creating a reference with useref which will hold a reference to the input
const focusInput = () => {  //creating function to  focus input
inputRef.current.focus(); //The focus method is a standard JavaScript method used to set focus on an input field, allowing the user to start typing immediately
}; 
return ( 
<> 
<input ref={inputRef} type="text" />   
<button onClick={focusInput}>Focus Input</button> 
</> 
); 
} 
export default App
// The input element set attribute ref  to input ref that allows us to manipulate it directly in the focusInput function.
// when the button is clicked it trigers the input function


// users can mark individual todo items as completed or incomplete by clicking checkboxes
// import { useReducer } from "react";

// const initialTodos = [
//   { id: 1, title: "Todo 1", complete: false }, //creating an intial todo array
//   { id: 2, title: "Todo 2", complete: false },
// ];

// function reducer(state, action) {  //The reducer function determines how the todos state is updated based on the action that is dispatched.
//   switch (action.type) {
//     case "TOGGLE_TODO":
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, complete: !todo.complete } : todo  //If todo.id matches action.id, it creates a new todo object
//       );
//     default:
//       return state;  //If the action type doesn’t match anything, it simply returns the current state without making changes.
//   }
// }

// function TodoApp() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);  //initializes the todos state to initialTodos and sets up dispatch to call the reducer function

//   return (
//     <>
//       {todos.map(todo => (  //ensures each todo item has a unique key for efficient rendering. 
//         <div key={todo.id}>
//           <label>  
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}  // When the checkbox is clicked, it calls dispatch with an action object.
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }
// export default TodoApp;
//Loops over each todo item and returns with the div


// error handiling in useReducer

// import React, { useReducer } from 'react';
// import Reducer from './Reducer'; 

// function Counter() {
//   const [state, dispatch] = useReducer(Reducer, 0); // useReducer takes two arguments: a reducer function (Reducer) and an initial state (set to 0 here).

  
//   const increment = () => dispatch({ type: 'INCREMENT' }); //increment and decrement functions use dispatch to send actions to the reducer.
//   const decrement = () => dispatch({ type: 'DECREMENT' });

//   return (
//     <div>
//       <p>Current count: {state}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }
// //Displays the current state (the counter) inside a <p> element.
// export default Counter;

