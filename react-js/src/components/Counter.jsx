import { useEffect, useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(props.count); // number, string, boolean, array , object, null

  let inc = (event) => {
    // alert("inc clicked");
    // console.log(event);
    setCount(count + 1);
  };

  useEffect(() => {
    // mounting
    console.log("mounting");

    return () => {
      // unmounting
      console.log("unmounting");
    };
  }, []); // only once

  useEffect(() => {
    // update
    console.log("update");
  }, [count]);
  return (
    <>
      <p>
        Function Count:{count}
        <button onClick={inc}>INC</button>
      </p>
    </>
  );
}

export default Counter;

// hooks => function in react , to perform complex task
// use work
