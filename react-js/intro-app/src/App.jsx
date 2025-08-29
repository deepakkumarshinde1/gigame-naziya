import { useState } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";

function App() {
  let counters = [10, 13, 5, 12, 100];
  let [toggle, setToggle] = useState(true);
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? (
        <Counter count={counters[0]} />
      ) : (
        <CounterClass count={counters[1]} />
      )}

      {/* <Counter count={counters[2]} />
      <Counter count={counters[3]} />
      <Counter count={counters[4]} /> */}
    </>
  );
}

export default App;
