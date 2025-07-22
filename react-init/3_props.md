Props are arguments passed into React components.Props are passed to components via HTML attributes.
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function App() {
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//     </>
//   );
// }

// function App() {
//   const carName = "Benz";
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={ carName } />
//     </>
//   );
// }


function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}
export default App;
```
