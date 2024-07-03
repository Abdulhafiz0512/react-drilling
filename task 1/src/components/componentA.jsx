import ComponentB from "./componentB";
import React, { useState } from 'react';
const ComponentA = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div>
        <ComponentB count={count} increment={increment} decrement={decrement} reset={reset} />
      </div>
    );
  };
  export default ComponentA