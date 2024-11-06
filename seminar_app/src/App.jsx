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
// import { useRef } from "react"; 

// function App() { 
// const inputRef = useRef();  //creating a reference with useref which will hold a reference to the input
// const focusInput = () => {  //creating function to  focus input
// inputRef.current.focus(); //The focus method is a standard JavaScript method used to set focus on an input field, allowing the user to start typing immediately
// }; 
// return ( 
// <> 
// <input ref={inputRef} type="text" />   
// <button onClick={focusInput}>Focus Input</button> 
// </> 
// ); 
// } 
// export default App
//The input element set attribute ref  to input ref that allows us to manipulate it directly in the focusInput function.
//when the button is clicked it trigers the input function


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
//       {todos.map(todo => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}  //calling the dispatch
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// export default TodoApp;


// error handiling in useReducer

function reducer(state, action) {
  switch (action.type) { //The switch statement checks the action.type to determine which case to execute.
  case "INCREMENT":
     return state + 1; //When the action.type is "INCREMENT", the reducer will return state + 1.
  case "DECREMENT": 
    return state - 1; //When the action.type is "DECREMENT", the reducer will return state - 1.
  default: throw new Error(`Unhandled action type: ${action.type}`); } } //If the action.type doesn't match any cases it will throw an error saying "Unhandled action type: <action type>".
   
  export default reducer

