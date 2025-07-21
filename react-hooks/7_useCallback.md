Script 1 :  useCallback
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./Todos";



 export default function App(){
 
  const [count,setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment =()=>{
    setCount((count)=>count+1);
  };

  const addTodo =useCallback(()=>{
    setTodos((todos)=>[...todos, "New Item ToDo"]);
  });
  return (
   <>

   <Todos todos={todos} addTodo={addTodo} />
   <hr/>
   <div>
    Count : {count}
    <button onClick={increment}>Increment</button>
   </div>
  

   </>
  );
}
```

Script 2:
```
import { memo } from "react";
const Todos = ( {todos,addTodo})=>{
    console.log("Todos Rendered : Child Rendered");

    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>;
            })}
         <button onClick={addTodo}>Add Todo</button>
        </>
    );

};
export default memo(Todos);
```
