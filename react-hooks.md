# Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. It replace class components. Still class components exist in React.
It allow us to use React features such as state and lifecycle methods.

# React Hooks:
 - useState: For managing state.
 - useEffect: For side effects like fetching data or subscriptions.
 - useContext: For using context in functional components.

# Example of React Hook
```
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button"  onClick={() => setColor("blue")} >Blue</button>
      <button  type="button" onClick={() => setColor("red")} >Red</button>
      <button  type="button" onClick={() => setColor("pink")}>Pink</button>
      <button  type="button" onClick={() => setColor("green")}>Green</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```
