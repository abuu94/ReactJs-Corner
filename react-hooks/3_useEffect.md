UseEffects:
```
function App() {
  const [count, setCount] = useState(0);
  useEffect (()=>{
     setTimeout(()=>{
       setCount((count)=>count + 1);
    },1000);
  }, []);
  return (
    <> <h6> Nimebonyeza mara </h6>   {count}  
    </>
  );
}
export default App;
```


Calculation:
```
function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(()=> count * 2);
  }, [count]);
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={()=>setCount((c)=>c+1)}> + </button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
export default App;

ClearTimeout:
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(()=>{
      setCount((count)=>count+1);
    },1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>  <h3>Nimeweka mara ,</h3> {count}</>
  );
}

export default App;

