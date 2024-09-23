import { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((currCount) => currCount + 1);
  };

  return (
    <div>
      <CounterButton count={count} handleIncrementCount={handleIncrement} />
    </div>
  );
};

export default Counter;
