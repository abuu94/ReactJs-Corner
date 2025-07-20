- It manage state globally, any where in the project. Together with useState hook it can share state between nested components more easily.
- You can avoid Context  by doing "pop drilling" as following
```
 export default function App(){
  const [user,setUser] = useState(0);

  return (
    <>
      <h1> {` Hello ${user}`} </h1>
      <Component2 user={user}/>
    </>
  )
}

function Component2({user}){
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user}/>
    </>
  )

}

function Component3({user}){
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user}/>
    </>
  )
}

function Component4({user}){
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user}/>
    </>
  )
} 

function Component5({user}){
  return (
    <>
      <h1>Component 5</h1>
      <h2> {`Hello ${user} again!`}  </h2>
    </>
  )
}


// export default App;
```


But Best way is to use userContext as follow:
```
import { useState, useEffect, createContext,useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const UserContext = createContext();

 export default function App(){
  const [user,setUser] = useState("Abubakr Yussuf");

  return (
    <UserContext.Provider value={user}>
      <h3>{`Hello ${user}!`}</h3>
      <Component2 user={user}/>
    </UserContext.Provider>

 
  );
}
function Component2(){
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  )

}
function Component3(){
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  )
}
function Component4(){
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  )
} 
function Component5(){
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2> {`Hello ${user} again!`}  </h2>
    </>
  )
}

```
