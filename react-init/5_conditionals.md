- If Statement:
```
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function App(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
  

}
export default App;
``
- Logical && Operator:

```
function App(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}
export default App;
```

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const cars = ['Ford', 'BMW', 'Audi'];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App cars={cars} />
  </StrictMode>,
)
```
  
