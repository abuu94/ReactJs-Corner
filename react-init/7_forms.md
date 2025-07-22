React Form:You add a form with React like any other element:
```
function App() {
const [name, setName] = useState("");
const handleSubmit = (event) =>{
  event.preventDefault();
  alert(`The name you entered is: ${name}`)
}

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
export default App;
```

- Multiple fields
```
import { useState, useEffect, createContext,useContext, useRef, useReducer, useCallback,useMemo } from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";

function App() {
 const [inputs,setInputs] = useState({});
 const handleChange =(event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values=>({...values,[name]:value}))

 }
 const handleSubmit=(event)=>{
  event.preventDefault();
  // // You can add further processing here, like sending data to an API
  alert(`Username: ${inputs.username}, Age: ${inputs.age}`);
  setInputs({}); // Reset the form after submission

 }
  return (
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
 
}
export default App;
```
