# useState()
- The React useState Hook allows us to track state in a function component.
- State generally refers to data or properties that need to be tracked in an application.

```
import { useState } from "react";
import ReactDOM from "react-dom/client";
function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button  type="button" onClick={() => setColor("blue")}>Blue</button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```

- keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
- We could create multiple state Hooks to track individual values.
  
```
import { useState } from "react";
import ReactDOM from "react-dom/client";
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

- We can use one state and include an object instead!

```
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
```

```
  function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}
```
- Updating Objects and Arrays in State
- When state is updated, the entire state gets overwritten.
- What if we only want to update the color of our car?
- If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
- We can use the JavaScript spread operator to help us.
```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

- Because we need the current value of state, we pass a function into our setCar function.
- This function receives the previous value.
- We then return an object, spreading the previousState and overwriting only the color.
