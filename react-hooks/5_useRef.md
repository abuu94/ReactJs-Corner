

useRef:
```
import { useState, useEffect, createContext,useContext, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const UserContext = createContext();

 export default function App(){
  const [inputValue,setInputValue] = useState("");
  const count = useRef(0);

  useEffect(()=>{
    console.log("useEffect called");
    count.current = count.current + 1;
    console.log(`Component rendered ${count.current} times`);
  });

  return (
   <>
   <input 
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Type something..."
   />
   <h3>Render Count : {count.current}</h3>
   </>
  );
}
```
