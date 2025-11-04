import { useState } from "react";

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + step);

  const decrement = () => {
    if (count == 0) {
      alert("the count is already 0");
    } else setCount((prev) => prev - step);
  };

  const reset = () => setCount(initialCount);

  return (
    <>
      <div className="counter">
        <div className="display">
          <button
            onClick={decrement}
            aria-label="decrement"
          >
            −
          </button>
          <span className="value">{count}</span>
          <button
            onClick={increment}
            aria-label="increment"
          >
            +
          </button>
        </div>

        <div className="controls">
          <button onClick={reset}>Reset</button>
          <span className="meta">
            start: {initialCount} • step: {step}
          </span>
        </div>
      </div>
    </>
  );
}
