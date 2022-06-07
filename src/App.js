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

        {student.student.length > 0 &&
          student.student.map(value => (
            <h3 key={value.id}>
              {value.id} {value.name}
            </h3>
          ))}
      </div>
    </div>
  );
}

export default App;
