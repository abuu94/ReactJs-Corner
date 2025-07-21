
```
import { useState, useEffect, createContext,useContext, useRef, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: true,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
    {
    id: 3,
    title: "Todo 3",
    complete: true,
  },
  {
    id: 4,
    title: "Todo 4",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

 export default function App(){

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };



  return (
   <>

   {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
  
 
   </>
  );
}
```
