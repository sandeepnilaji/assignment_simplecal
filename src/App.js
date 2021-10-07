import "./App.css";
import { addcount, subcount } from "./Allredux/actions";
// import { store } from "./Allredux/store";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  // const [count, setCount] = useState();
  // const x = store.getState();
  // console.log(x);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addcount(1));
        }}
      >
        increment Count
      </button>
      <div>Counter :{counter}</div>
      <button
        onClick={() => {
          dispatch(subcount(1));
        }}
      >
        decrement Count
      </button>
    </div>
  );
}

export default App;
