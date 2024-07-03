import ComponentC from "./componentC";
const ComponentB = ({ count, increment, decrement, reset }) => {
    return <ComponentC count={count} increment={increment} decrement={decrement} reset={reset} />;
  };
export default ComponentB;