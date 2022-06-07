import React, { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";
import { getStudent } from "./redux/Student";
function App() {
  const { counter } = useSelector(store => store);
  const student = useSelector(store => store.student);
  const dispatch = useDispatch();
  console.log(student);
  useEffect(() => {
    dispatch(getStudent());
  }, []);
  return (
    <div className="App">
      Hello world {counter.data}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {student.length > 0 && student.map(value => <h3>{value.name}</h3>)}
      </div>
    </div>
  );
}

export default App;
