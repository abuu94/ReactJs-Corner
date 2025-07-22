- useFetch.jsx
```
import {useState,useEffect, use} from "react";
const useFetch = (url) =>{
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data));
    },[url])

    return [data];
}

export default useFetch;
```



- App.jsx
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useFetch from "./useFetch";

 export default function App(){
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  return (
   <>
    {data && data.map( (item)=>{ return <p key={item.id}>{item.title}</p>})};
  

   </>
  );
};
```
