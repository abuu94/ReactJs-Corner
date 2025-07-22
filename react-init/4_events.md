React events are written in camelCase syntax,React event handlers are written inside curly braces.
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );

  //   const shoot = (a) => {
  //   alert(a);
  // }

  // return (
  //   <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  // );


  // const shoot = () => {
  //   alert("Great Shot!");
  // }

  // return (
  //   <button onClick={shoot}>Take the shot!</button>
  // );
}
export default App;
```
