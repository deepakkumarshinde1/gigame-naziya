import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./redux/slice/counter.slice";
import { useEffect } from "react";
import apis from "./redux/services/apis";

function App() {
  let dispatch = useDispatch();
  const { count, users } = useSelector((state) => state.counter);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    dispatch(apis.getUsersList(url));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
      <p>Total users : {users.length}</p>
    </>
  );
}

export default App;
