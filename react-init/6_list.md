In React, you will render lists with some type of loop.The JavaScript map() array method is generally the preferred method.
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function App() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
export default App;
```

```
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function App() {

   const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'},
    {id: 4, brand: 'Ford'},
    {id: 5, brand: 'BMW'},
    {id: 6, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}
export default App;
```
