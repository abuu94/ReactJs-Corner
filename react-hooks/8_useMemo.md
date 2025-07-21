useMemo:
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Todos from "./Todos";



 export default function App(){

 
  const [count,setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=>expensiveCalculation(count),[count]);

  const increment =()=>{
    setCount((count)=>count+1);
  };

  const addTodo =useCallback(()=>{
    setTodos((todos)=>[...todos, "New Item ToDo"]);
  });
  return (
   <>
    <div>
      <h2>My Todos</h2>
        {todos.map((todo,index)=>{
                return <p key={index}>{todo}</p>;
            })}
         <button onClick={addTodo}>Add Todo</button>
    
    </div>

   {/* <Todos todos={todos} addTodo={addTodo} /> */}
   <hr/>
   <div>
    Count : {count}
    <button onClick={increment}>Increment</button>
    <p>Calculation Result: {calculation}</p>
   </div>
  

   </>
  );
};

const expensiveCalculation = (num) => {
  console.log("Expensive Calculation Called ......");
  for (let i=0;i< 1000000000;i++) {
    // Simulating a heavy computation
    num += i;
  }
  return num;
}
```
